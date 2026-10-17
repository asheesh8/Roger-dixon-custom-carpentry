# Roger Dixon Custom Carpentry

One-page website for **Roger Dixon Custom Carpentry** in Burlington, Vermont: project gallery, shop drawings, and a lead form.

**Live:** https://roger-dixon-custom-carpentry.vercel.app

## Tech stack

- Next.js 16 (App Router) + React 19 + TypeScript, Tailwind CSS
- UI primitives generated with shadcn/ui in `components/ui/` (configured by `components.json`) — treat them as vendored; customise in the app files instead
- No server code and no environment variables: the lead form (`app/lead-form.tsx`) opens the visitor's email app with a pre-filled message

## Project layout

```
app/page.tsx              The page
app/project-gallery.tsx   Project photos
app/shop-drawings.tsx     Shop-drawing showcase
app/lead-form.tsx         Lead form (mailto)
components/ui/            shadcn/ui primitives
scripts-import-photos.sh  Helper for importing project photos
```

## Local setup

Requires Node 20+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Deploying

Hosted on Vercel; pushes to `main` deploy to production.
