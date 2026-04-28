import { getStore } from "@netlify/blobs";

interface Review {
  id: string;
  name: string;
  text: string;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

function unauthorized(): Response {
  return new Response(JSON.stringify({ error: "Unauthorized" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}

export default async function handler(req: Request) {
  const password = req.headers.get("admin-password");
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword || password !== expectedPassword) {
    return unauthorized();
  }

  try {
    const store = getStore("reviews");
    const raw = await store.get("data");
    let reviews: Review[] = raw ? JSON.parse(raw) : [];

    if (req.method === "POST") {
      const body = await req.json();
      const { name, text } = body;

      if (!name || !text) {
        return new Response(
          JSON.stringify({ error: "Name and text are required" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const newReview: Review = { id: generateId(), name, text };
      reviews.push(newReview);
      await store.setJSON("data", reviews);

      return new Response(JSON.stringify(newReview), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (req.method === "PUT") {
      const body = await req.json();
      const { id, name, text } = body;

      if (!id || !name || !text) {
        return new Response(
          JSON.stringify({ error: "id, name, and text are required" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const index = reviews.findIndex((r) => r.id === id);
      if (index === -1) {
        return new Response(
          JSON.stringify({ error: "Review not found" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }

      reviews[index] = { id, name, text };
      await store.setJSON("data", reviews);

      return new Response(JSON.stringify(reviews[index]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (req.method === "DELETE") {
      const url = new URL(req.url);
      const id = url.searchParams.get("id");

      if (!id) {
        return new Response(
          JSON.stringify({ error: "id query parameter is required" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const index = reviews.findIndex((r) => r.id === id);
      if (index === -1) {
        return new Response(
          JSON.stringify({ error: "Review not found" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }

      reviews.splice(index, 1);
      await store.setJSON("data", reviews);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Method Not Allowed", { status: 405 });
  } catch (error) {
    console.error("Error managing reviews:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}