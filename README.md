# Shay Constructions — Astro

This is the Astro refactor of the static HTML in `temp/`. Header, footer, sidebar, and scripts are shared via **BaseLayout** and components.

## Structure

- **`src/layouts/BaseLayout.astro`** — Shared layout: `<head>`, loader, header, mobile menu, sidebar, footer, search popup, scroll-up, cursor, scripts.
- **`src/components/`** — `Header.astro`, `MobileMenu.astro`, `Sidebar.astro`, `Footer.astro`, `SearchPopup.astro`, `ScrollUp.astro`, `Cursor.astro`, `Scripts.astro`.
- **`src/pages/*.astro`** — Each page uses `BaseLayout` and only defines its **main content** (no repeated header/footer).

## Commands

```bash
cd temp/astro
npm install
npm run copy-assets   # Copy temp/assets and temp/venobox into public/
npm run dev           # Dev server (runs copy-assets first)
npm run build         # Production build (runs copy-assets first)
npm run preview       # Preview production build
```

## Migrating more pages from temp/

For each `temp/<page>.html`:

1. Take the **main content** between `<!--End Sidebar Cart Item -->` and `<!-- Start Footer Section  -->`.
2. In that content, replace:
   - `assets/` → `/assets/`
   - `venobox/` → `/venobox/`
   - `index.html` → `/`
   - `about.html` → `/about/`
   - `contact.html` → `/contact/`
   - `service.html` → `/service/`
   - `service-details.html` → `/service-details/`
   - `blog-grid.html` → `/blog-grid/`
   - `blog-details.html` → `/blog-details/`
   - `portfolio.html` → `/portfolio/`
   - `portfolio-2.html` → `/portfolio-2/` (and same for portfolio-3 … portfolio-6)
   - `portfolio-details.html` → `/portfolio-details/`
   - `team.html` → `/team/`
   - `pricing.html` → `/pricing/`
   - `shop.html` → `/shop/` (and shop-2, shop-3, shop-4, shop-details, cart)
3. Create `src/pages/<page>.astro` (or `src/pages/<folder>/index.astro` for nested routes):

   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   ---
   <BaseLayout title="Page Title - Shay Construction">
     <!-- pasted main content here -->
   </BaseLayout>
   ```

Astro’s file-based routing will serve:

- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about/`
- `src/pages/contact.astro` → `/contact/`
- etc.

## Assets

Static files live in `temp/assets/` and `temp/venobox/`. The `copy-assets` script copies them into `public/` before dev/build so they are served at `/assets/` and `/venobox/`. Keep the originals in `temp/` and only edit there if you still use the old HTML; otherwise you can move them under `public/` and drop the copy step.
