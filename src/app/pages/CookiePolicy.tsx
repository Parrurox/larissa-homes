import React from 'react';
import { LegalPageLayout } from './LegalPageLayout';

export default function CookiePolicy() {
  return (
    <LegalPageLayout title="Cookie Policy" effectiveDate="23-April-2026">
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small data files stored on your device that help improve your browsing experience.</p>

      <h2>2. How We Use Cookies</h2>
      <p>We use cookies to understand site traffic, remember user preferences, and ensure the website's core features work properly.</p>

      <h2>3. Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential Cookies:</strong> Necessary for the website to function.</li>
        <li><strong>Analytics Cookies:</strong> Help us track visitor interactions.</li>
        <li><strong>Functional Cookies:</strong> Remember your site settings.</li>
      </ul>

      <h2>4. Third-Party Cookies</h2>
      <p>Some cookies are placed by third-party services like Google or booking platforms.</p>

      <h2>5. Managing Cookies</h2>
      <p>You can disable cookies through your browser settings, but some website features may not function correctly.</p>

      <h2>6. Contact Us</h2>
      <p>For more information, contact us at <a href={`mailto:${import.meta.env.VITE_RESEND_TO_EMAIL}`}>{import.meta.env.VITE_RESEND_TO_EMAIL}</a>.</p>
    </LegalPageLayout>
  );
}
