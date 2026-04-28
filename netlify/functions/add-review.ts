import { getStore } from "@netlify/blobs";

interface Review {
  id: string;
  name: string;
  text: string;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, description }: { name: string; description: string } = body;

    if (!name || !description) {
      return new Response(JSON.stringify({ error: 'Name and description are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const store = getStore("reviews");
    const raw = await store.get("data");
    let reviews: Review[] = raw ? JSON.parse(raw) : [];

    const newReview: Review = { 
        id: generateId(), 
        name, 
        text: description 
    };
    reviews.push(newReview);
    await store.setJSON("data", reviews);

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding review:', error);
    return new Response(JSON.stringify({ error: 'Failed to add review' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
