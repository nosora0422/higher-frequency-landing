# Higher Frequency — Landing Page

Next.js (App Router, TypeScript, Tailwind CSS) rebuild of the Higher Frequency landing page, built pixel-for-pixel from the approved Figma design.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — one component per landing-page section, composed in `app/page.tsx` in the same order as the Figma file
- `public/assets/` — icons and photography exported from the Figma design

## Deploying

This project is set up to deploy on [Vercel](https://vercel.com) with zero configuration — import the GitHub repo in the Vercel dashboard and it will detect the Next.js app automatically.
