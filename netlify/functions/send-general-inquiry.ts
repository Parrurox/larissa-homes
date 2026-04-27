import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface GeneralInquiry {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, email, phone, message }: GeneralInquiry = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!validateEmail(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const toEmail = process.env.VITE_RESEND_TO_EMAIL;
    if (!toEmail) {
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const fromEmail =
      process.env.VITE_RESEND_FROM_EMAIL || 'Larisa Homes <onboarding@resend.dev>';

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1c3423; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0;">New Contact Inquiry</h1>
        </div>
        <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px;">
          Sent from your website contact form
        </div>
      </div>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: process.env.VITE_RESEND_REPLY_TO_EMAIL || email,
      subject: `Contact Inquiry from ${name}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
