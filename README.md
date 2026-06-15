# Wii Event — Website Wireframe

A modern, premium, event-tech homepage wireframe for **Wii Event** — a digital
platform and marketplace for event equipment rental and full event production.
Built from the Claude Design handoff bundle and composed against the **Wii Event
Design System**.

## Running

This is a self-contained static site (React + Babel are loaded in-browser from a
CDN — no build step). Serve the folder over HTTP and open the page:

```bash
python3 -m http.server 8000
# then open: http://localhost:8000/
```

> Opening the file directly with `file://` will not work — the browser blocks the
> in-browser Babel transform and `fetch` of the `.jsx`/asset files. Use a local
> HTTP server.

## Deploying to Vercel

This is a zero-build static site, so it deploys as-is — no framework, no install,
no build command.

**From the dashboard:** import the GitHub repo at
[vercel.com/new](https://vercel.com/new), leave Framework Preset as **Other** and
the Build/Install commands empty, and deploy. `index.html` is served at `/`.

**From the CLI:**

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

`vercel.json` enables clean URLs and serves the `.jsx` files with a `text/babel`
content type so the in-browser Babel transform picks them up.

> Note: React, Babel, and Lucide are loaded from a public CDN at runtime, so the
> deployed page needs the visitor's browser to reach `unpkg.com`. If you'd rather
> vendor those locally or pre-build a bundle for offline/production hardening, that
> can be done as a follow-up.

## What's in it

A single-scroll homepage with all 11 sections plus a live **Tweaks** panel:

1. **Hero** — cinematic media, poster headline, CTAs, floating service cards, trust strip
2. **Service Choice** — the three service levels (rental / + installation / full A-to-Z)
3. **Equipment Marketplace** — search, category tiles, featured listings
4. **Event Types** — private, corporate, festivals, brand activations, …
5. **3D / AR Space Preview** — before / after viewport mock
6. **Wii Agent** — a live AI event-planning chat demo (staggered bubbles, typing
   indicator, recommendation + budget cards)
7. **How It Works** — the customer journey
8. **Featured Setups** — cinematic example builds
9. **Supplier / Partner CTA** — list your equipment
10. **Why Wii Event** — trust & differentiators
11. **Final CTA** — closing cinematic call to action

Every media area is a swap-ready **dynamic-artifact zone** — drop a
`<video autoplay muted loop>` in place of the `<img>` to go fully live. Toggle the
zone markers (and accent color, background energy, hero headline) from the Tweaks
panel.

## Structure

```
index.html                         # entry point (served at / on Vercel)
vercel.json                        # static deploy config (clean URLs, .jsx mime)
css/wireframe.css                  # wireframe layout + animated background system
js/                                # React (Babel) section components
tweaks-panel.jsx                   # the Tweaks shell
assets/                            # event photography + logos
_ds/.../                           # bound Wii Event Design System (tokens, styles, bundle)
```

The design system is loaded via `_ds/<folder>/_ds_bundle.js`; its components are
available on `window.WiiEventDesignSystem_37bcec` (Button, Badge, SearchBar,
CategoryCard, EquipmentCard, SupplierCard, ServiceOptionSelector, …).
