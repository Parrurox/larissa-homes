/** DOM ids for in-page scroll targets (footer, nav, deep links). */
export const SECTION_IDS = {
  featuredStays: 'featured-stays',
  testimonials: 'testimonials',
  about: 'about',
  faq: 'faq',
  /** Top of /investments (and shared pricing hero) — footer “Investment” scrolls here. */
  investmentsTop: 'investments-top',
  investment: 'investment',
  contact: 'contact',
  termsOfService: 'terms-of-service',
  privacyPolicy: 'privacy-policy',
  cookiePolicy: 'cookie-policy',
  partners: 'partners',
} as const;

export const SCROLL_ANCHOR_CLASS = 'scroll-mt-24';
