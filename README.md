
# Airbnb Management Landing Page

This is a code bundle for Airbnb Management Landing Page. The original project is available at https://www.figma.com/design/zBpyeF2RlDbWHB6osBCe70/Airbnb-Management-Landing-Page.

## Running the code

Run `pnpm install` to install the dependencies.

Run `pnpm dev` to start the development server.

## Contact Form Email Setup

The contact form sends emails via Resend when deployed to Netlify. To enable email functionality:

### 1. Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Required variables:
- `RESEND_API_KEY` - Your Resend API key (get from https://resend.com/api-keys)
- `VITE_RESEND_TO_EMAIL` - The email address that receives inquiries

Optional variables:
- `VITE_RESEND_FROM_EMAIL` - Sender email (default: `Larissa Homes <onboarding@resend.dev>`)
- `VITE_API_URL` - Custom API URL if using a custom domain

### 2. Install Dependencies

```bash
pnpm install
```

This installs the required packages:
- `resend` - Email sending via Resend API
- `@netlify/functions` - Netlify Functions runtime

### 3. Local Development

For local testing with Netlify Functions:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Start local development server with function emulation
netlify dev
```

### 4. Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard:
   - `RESEND_API_KEY`
   - `VITE_RESEND_TO_EMAIL`
   - `VITE_RESEND_FROM_EMAIL` (optional)
4. Deploy

### 5. Verify Email Sending

After deployment, test the contact form by submitting an inquiry. You should receive an email at the address specified in `VITE_RESEND_TO_EMAIL`.

## Project Structure

```
├── netlify/
│   └── functions/
│       └── send-general-inquiry.ts   # Email handler function
├── src/
│   ├── lib/
│   │   └── contactApi.ts            # API client with fallbacks
│   └── app/
│       └── pages/
│           └── LandingPage.tsx       # Contact form integration
├── netlify.toml                      # Netlify configuration
└── .env.example                     # Environment template
```
  