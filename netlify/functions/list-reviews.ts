import { getStore } from "@netlify/blobs";
import { DEFAULT_REVIEWS } from "./reviews-data";

interface Review {
  id: string;
  name: string;
  text: string;
}

export default async function handler(req: Request) {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const store = getStore("reviews");
    const { blobs } = await store.list({ prefix: "review_" });
    
    const reviews: Review[] = [];
    for (const blob of blobs) {
      const raw = await store.get(blob.key);
      if (raw) {
        reviews.push(JSON.parse(raw));
      }
    }

    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch (error) {
    console.error("List reviews error:", error);
    return new Response(JSON.stringify(DEFAULT_REVIEWS), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
