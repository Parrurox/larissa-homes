import { getStore } from "@netlify/blobs";
import { DEFAULT_REVIEWS } from "./reviews-data";

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const store = getStore("reviews");
    let reviews = DEFAULT_REVIEWS;
    
    if (req.headers.get("Content-Type") === "application/json") {
      try {
        const body = await req.json();
        if (Array.isArray(body)) {
          reviews = body;
        }
      } catch (e) {
        // ignore invalid json if provided
      }
    }
    
    await store.setJSON("data", reviews);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Seeded ${reviews.length} reviews`,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error seeding reviews:", error);
    return new Response(
      JSON.stringify({ error: "Failed to seed reviews" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
