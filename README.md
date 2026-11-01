# Bufi Crafts — Fresh Website Starter

A fresh React + Vite storefront concept with a multi-page experience.

## Pages
- `/` Home
- `/shop` Collection with category filters and search
- `/story` Our Story (a separate page, not an anchor-scroll section)
- `/contact` Contact page
- `/product/:id` Product detail
- `/bag` Shopping bag

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy
Upload the **contents** of the generated `dist/` folder to Netlify, or connect this repository to Netlify with build command `npm run build` and publish directory `dist`.

## Important next steps
This is a fresh frontend starter. Supabase database, real admin authentication, persistent products/orders, image storage, email delivery and payment checkout are intentionally not connected yet. We will connect those after the fresh project is uploaded and verified.
