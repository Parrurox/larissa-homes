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
    const raw = await store.get("data");
    const reviews: Review[] = raw ? JSON.parse(raw) : DEFAULT_REVIEWS;

    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60, s-maxage=300",
      },
    });
  } catch {
    return new Response(JSON.stringify(DEFAULT_REVIEWS), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
