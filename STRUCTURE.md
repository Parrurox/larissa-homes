# Project Structure: Larisa Homes 2

This document provides a comprehensive overview of the directory structure and key components of the Larisa Homes 2 web application.

## Tech Stack
- **Framework:** React 18.3.1 (Vite-based)
- **Routing:** React Router 7
- **Styling:** Tailwind CSS 4, Radix UI Primitives (shadcn/ui)
- **Animations:** Motion (Framer Motion)
- **Build Tool:** Vite 6

---

## Directory Structure

```text
Larisa Homes 2/
├── src/                    # Main source code
│   ├── app/                # Application logic and components
│   │   ├── components/     # Reusable UI components
│   │   │   ├── figma/      # Figma-exported or related components
│   │   │   ├── ui/         # Base UI components (shadcn/ui)
│   │   │   ├── Footer.tsx
│   │   │   └── CustomerReviews.tsx
│   │   ├── constants/      # Application constants
│   │   │   └── sections.ts # SECTION_IDS and scroll anchor classes
│   │   ├── pages/          # Page-level components
│   │   │   ├── LandingPage.tsx
│   │   │   ├── LegalPageLayout.tsx
│   │   │   ├── CookiePolicy.tsx
│   │   │   ├── PrivacyPolicy.tsx
│   │   │   └── TermsOfService.tsx
│   │   ├── App.tsx         # Root application component
│   │   └── routes.tsx      # Routing configuration
│   ├── assets/             # Static assets (images, icons)
│   │   ├── images/         # WebP and PNG images
│   │   │   └── backgrounds/# Section backgrounds
│   │   └── Union.svg       # Brand SVG assets
│   ├── imports/            # Imported components and larger sections
│   │   ├── Navbar.tsx      # Global navigation component
│   │   ├── Hero.tsx
│   │   └── Website.tsx
│   ├── lib/                # Utility functions and API clients
│   │   └── contactApi.ts   # Contact form submission logic
│   ├── styles/             # Global and component styles
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   ├── main.tsx            # Entry point
│   └── vite-env.d.ts       # Vite type definitions
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## Key Components

### 1. Routing (`src/app/routes.tsx`)
The application uses `createBrowserRouter` from `react-router`.
- `/`: LandingPage (Home)
- `/investments`: LandingPage (Investment view)
- `/pricing`: LandingPage (Pricing view)
- `/contact`: LandingPage (Contact view)
- `/cookie-policy`: CookiePolicy
- `/privacy-policy`: PrivacyPolicy
- `/terms-of-service`: TermsOfService

### 2. Pages (`src/app/pages/`)
- **LandingPage.tsx:** The main entry page of the site, handling multiple routes via conditional rendering based on the path.
- **Legal Pages:** `CookiePolicy.tsx`, `PrivacyPolicy.tsx`, and `TermsOfService.tsx` share a common layout defined in `LegalPageLayout.tsx`.

### 3. Components (`src/app/components/`)
- **ui/:** A collection of low-level, accessible UI primitives (Accordion, Button, Dialog, etc.) built on top of Radix UI (shadcn/ui).
- **Footer.tsx:** Global footer component with legal links and smooth scroll behavior.

### 4. Imports (`src/imports/`)
Contains larger sections and specialized components.
- **Navbar.tsx:** Global navigation component with smooth scroll to top for active routes.
- **Hero.tsx:** Main hero section components.

### 5. API Logic (`src/lib/`)
- **contactApi.ts:** Handles the logic for sending contact inquiries.

---

## Styling
The project uses **Tailwind CSS 4** for utility-first styling, with custom theme configurations in `src/styles/theme.css` and global styles in `src/styles/index.css`.
