import { getStore } from "@netlify/blobs";
import { DEFAULT_REVIEWS } from "./reviews-data";

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const store = getStore("reviews");
    let reviewsToSeed = DEFAULT_REVIEWS;
    
    if (req.headers.get("Content-Type") === "application/json") {
      try {
        const body = await req.json();
        if (Array.isArray(body)) {
          reviewsToSeed = body;
        }
      } catch (e) {
        // ignore invalid json if provided
      }
    }
    
    // Clear existing reviews first
    const { blobs } = await store.list({ prefix: "review_" });
    for (const blob of blobs) {
      await store.delete(blob.key);
    }
    
    // Set each review individually
    for (const review of reviewsToSeed) {
      await store.setJSON(`review_${review.id}`, review);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Seeded ${reviewsToSeed.length} reviews`,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error seeding reviews:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add reviews" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
