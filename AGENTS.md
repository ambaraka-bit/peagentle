# PeaGentle Project Guide

## Architecture

PeaGentle is a single-product marketing website built with TanStack Start, React 19, TypeScript, Vite, and Tailwind CSS. It is configured for deployment on Netlify and uses file-based routing through TanStack Router.

## Key Directories

- `src/routes/` contains page routes. `index.tsx` is the primary product landing page, `__root.tsx` owns document metadata, and `products/$productId.tsx` provides a simple product detail route.
- `src/data/` contains the typed PeaGentle product record.
- `src/styles.css` contains the full visual system, responsive layouts, animation, and component styling.
- `public/images/` contains the user-supplied PeaGentle product photography used by the site.
- `netlify.toml` contains the Netlify build and local development configuration.

## Conventions

- Write components and route modules in TypeScript and use PascalCase for component names.
- Keep user-facing copy in Indonesian unless a short English brand phrase is intentional.
- Use the existing CSS variables for colors and typography rather than adding one-off values.
- Preserve accessible landmarks, descriptive image alt text, focus states, and reduced-motion support.
- Keep third-party purchase links centralized in constants when reused across a route.

## Design Decisions

The interface uses an earthy editorial direction rather than a conventional ecommerce grid. Dark botanical green, recycled-paper cream, muted sage, and a restrained orange accent reflect the natural ingredients and upcycled peanut-shell story. The homepage is intentionally a long-form narrative that moves from product benefit to ingredients, making process, price, purchase, and contact.

The Shopee destination currently uses a PeaGentle marketplace search because a direct store or product URL was not supplied. Replace the `shopeeUrl` constant in `src/routes/index.tsx` and the detail-page link when the official listing is available.

## Commands

- `npm run dev` starts the Vite development server.
- `npm run build` creates the production build used by Netlify.
