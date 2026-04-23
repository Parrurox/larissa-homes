interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  error?: string;
}

export async function sendContactInquiry(
  params: ContactRequest
): Promise<ContactResponse> {
  const endpoints = [
    `${import.meta.env.VITE_API_URL}/api/send-general-inquiry`,
    '/api/send-general-inquiry',
    '/.netlify/functions/send-general-inquiry',
  ];

  let lastError = 'Failed to send inquiry';

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }

      const data = await response.json().catch(() => ({}));
      lastError = data.error || `Server error: ${response.status}`;
    } catch (err) {
      lastError = err instanceof Error ? err.message : 'Network error';
    }
  }

  return { success: false, error: lastError };
}
