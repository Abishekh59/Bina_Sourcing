# BINA SOURCING — audit and migration plan

## Audit

The supplied repository was a blank React 19 + Vite 8 + TypeScript + Tailwind CSS v4 web scaffold. It
contained one empty component and no routes, design system, assets, animation libraries, forms, APIs,
database, authentication, native application, tests, or deployment configuration.

## Implemented foundation

- Responsive, semantic web homepage and mobile navigation
- Brand tokens using the supplied palette and public Manrope/Inter fonts
- CSS-rendered truck with reversible scroll-position-controlled journey
- Lightweight illustrative China-to-worldwide globe routes
- Services, example categories, reduced-motion support, and accessible focus states
- Validated multi-step enquiry that honestly prepares an email and does not claim persistence

## Migration sequence

1. **Confirm source material:** obtain the production logo, approved company/legal/contact details,
   category list, privacy policy, licensed truck GLB, and approved photography.
2. **Create a pnpm monorepo:** keep `apps/web`, add `apps/native` with Expo Router, and share
   `packages/design`, `packages/domain`, `packages/content`, and `packages/api`.
3. **Native app:** implement screens with React Native primitives, Expo Image, React Hook Form/Zod, and a
   2D/2.5D Skia truck story driven by Reanimated shared scroll values. Do not use a WebView.
4. **Cinematic web:** after receiving a licensed optimized GLB, isolate Three/R3F/Drei/GSAP behind
   web-only lazy imports. Add KTX2/Draco assets, DPR limits, scene loading, displacement-based wheels,
   ScrollTrigger cleanup, reduced motion, and a non-WebGL fallback.
5. **Supabase:** after project connection, add enquiries, files, profiles, services, categories, shipments,
   events, and case studies. Enforce ownership/admin roles with RLS, restricted buckets, MIME/size checks,
   server-only notification functions, CAPTCHA, and rate limiting. Never expose a service-role key.
6. **Portal/admin:** separate route groups and enforce authorization in database policies. Display only
   verified operational milestones.
7. **SEO:** use an SSR/static web frontend for crawlable service pages; this Vite SPA does not provide SEO
   parity. Add a final canonical URL, sitemap, per-route metadata, verified structured data, and social art.
8. **Verification:** test browsers, iOS/Android devices, keyboard/screen readers, reverse scroll, uploads,
   WebGL loss, slow networks, RLS, and measured Core Web Vitals.

## External blockers

Production 3D, native builds, backend, notification, and deployment require an approved logo/truck model,
Supabase project, business recipient, legal and contact details, Expo/EAS and hosting accounts, final
domain, and verified business content. None are fabricated in this implementation.
