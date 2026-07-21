# PeaGentle Product Website

A responsive product website for PeaGentle, a natural bar soap made with peanut shell, virgin olive oil, palm oil, and essence oil. The site presents the product's strengths, ingredients, making process, Rp30.000 price, Shopee purchase path, and contact information in an editorial, nature-inspired experience.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Vite and Tailwind CSS
- Lucide icons
- Netlify deployment configuration

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app runs on the port printed by Vite. For local Netlify emulation, use:

```bash
netlify dev --port 8889
```

## Product Assets

The supplied product images are stored in `public/images/` and are referenced directly from the homepage. The site currently links to a Shopee search for “PeaGentle”; replace the `shopeeUrl` constant in `src/routes/index.tsx` with the official store or product listing when available.
