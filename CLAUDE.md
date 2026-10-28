# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"KC The Royal Karan's Collection": a static, build-less, black-and-gold storefront (watches, perfumes, volleyball shirts) that sends orders to WhatsApp. No package.json, bundler, tests or linter. The parent directory (`KcWebProject`) holds the original WhatsApp media exports and zips; the site only uses the optimised copies in `images/` and `media/`.

## Running

Open `index.html` in a browser, or serve the folder (e.g. `python3 -m http.server`). The only external dependency is Google Fonts. Headless Chrome (`--headless=new --screenshot`) works for visual checks; it has a ~500px minimum window width, so narrower captures look clipped.

## Architecture

- `js/products.js` (loaded first): globals `STORE` (WhatsApp number, display phone, currency symbol), `PRODUCTS` (`id`, `category`, `title`, `tag`, `image`, optional `price`) and `FILTERS`. The catalog is edited only here.
- `js/app.js`: renders filter chips and the product grid from `PRODUCTS`, runs the lightbox (prev/next, arrow keys, ESC), mobile menu, and builds every `wa.me` link via `waUrl()`. Elements with `data-wa="general|shirts"` in `index.html` get their href from `GENERAL_MESSAGES`; per-product links use `productMessage()`.
- `index.html`: static sections (hero, assurances, collection, store video, banner, shirts, contact); `css/style.css`: theme tokens in `:root`, masonry grid via CSS `columns` so photos keep their natural proportions.

Details that matter:
- `category` must match a `FILTERS` key (`men`, `ladies`, `digital`, `perfumes`) or the product only shows under "All".
- Images are referenced by filename only (`image: "kc-25.jpg"`), resolved to `images/`. Files are named `kc-NN.jpg` by sorted order of the original WhatsApp export; `kc-03` (logo), `kc-04` (banner) and `kc-06` (Karan poster) are used directly in `index.html`.
- Without `price`, cards show "Price on WhatsApp". Product names are descriptive placeholders based on the photos, not official model names.
