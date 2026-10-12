# ForgeSight promotional website

A standalone, static-first promotional website for the early-stage ForgeSight manufacturing order execution visibility concept. The site uses the Next.js App Router, React Server Components, TypeScript, and Tailwind CSS 4 (with a small set of custom styles for the dashboard illustration). It does not connect to the operational application or its API.

## Run locally

Use the Node.js version configured for this repository, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3001.

## Contact configuration

The pilot CTA and footer use Gowtham's supplied email, phone, and LinkedIn profile. Set `NEXT_PUBLIC_CONTACT_EMAIL` only if you want to override the default email destination; the phone and LinkedIn details are configured in `components/site.tsx`.

For local development, create `.env.local` in the project root:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your-real-business-email@example.com
```

Replace the example value with an address you control if you want to override the default. Do not commit `.env.local`.

## Validation scripts

- `npm run lint` — ESLint
- `npx tsc --noEmit` — TypeScript check
- `npm run build` — production build

All dashboard values and the order journey are illustrative. Compatibility depends on source data and integration requirements; ForgeSight is an early-stage product concept.
