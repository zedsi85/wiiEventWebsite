# Wii Event — Design System

A premium, event-tech design system for **Wii Event** (`@wiievent`) — a digital
platform and marketplace for event equipment rental and full event production.
Part of the **EVA Group / Wii Construction** family ("The Event Specialists").

> From equipment rental to full event production, Wii Event gives you the tools,
> people, and technology to bring your event vision to life.

The platform connects hosts, brands, companies, and private customers with event
equipment (lighting, LED screens, stages, sound, tents, décor, furniture) and lets
them choose their level of service:

1. **Rental only** — pick up or get it delivered
2. **Rental + installation** — we deliver and set it up
3. **Full A-to-Z setup** — design, build, staff, run, and dismantle

It also previews a future **3D / AR space preview** feature (upload your venue,
drop in equipment, compare before & after).

## Sources given
- `assets/wii-logo-original.jpg` — the master Wii wordmark (bold geometric black).
- 4 Instagram screenshots from `@wiievent` / `@wiiconstruction` (corporate events,
  festival management, private events, a Tabarka festival build) — copied into
  `assets/ref-*.png`. These set the photographic + poster tone.
- No codebase, Figma, or brand font binaries were provided. **Fonts are Google Fonts
  substitutions** — see "Fonts" below and flag to the user for the real brand faces.

---

## CONTENT FUNDAMENTALS — how Wii Event writes

**Voice:** clear, premium, confident, creative, operationally reliable. Speaks to
the customer as **"you"**; the company is **"we" / "our team"**. Never generic
event-agency fluff.

- **Headlines** are short, bold, often two- or three-word fragments in UPPERCASE,
  poster-style: "PLAN YOUR EVENT", "PRIVATE EVENTS", "FESTIVAL MANAGEMENT". They
  can be evocative ("From vision to collective emotion").
- **Sub-copy** is plain, operational, benefit-led: "Choose your setup, preview your
  space, and let the right team handle the rest."
- **Service lists** use the signature diamond separator: `Stage design ◆ LED screens
  ◆ Lighting ◆ Tents`. This device is core to the brand — reuse it.
- **Eyebrows / labels** are technical and mono-cased: `— THE EVENT SPECIALISTS`,
  `02 / EQUIPMENT`, `AVAILABLE · TUNIS`.
- **Tone examples to emulate:**
  - "Private events, corporate launches, festivals, and branded experiences — all
    powered by one platform."
  - "Choose your setup, preview your space, and let the right team handle the rest."
- **Casing:** Display/headings UPPERCASE or sentence-tight; body sentence case;
  labels/eyebrows UPPERCASE mono.
- **Emoji:** not used in product UI or marketing copy. (Their social captions
  occasionally use a 💪✨ — keep that to social only, never the product.)
- **Numbers / stats** are used sparingly for trust (listings, suppliers, events
  produced) — never slop. Currency shown as `$240 / day`.

---

## VISUAL FOUNDATIONS

**Mood:** modern event-tech meets festival production meets luxury planner. Dark,
cinematic, premium — lit by controlled stage-light accents. Bold posters, clean UI.

- **Color:** deep ink black (`#0B0B0D`) is the brand identity color; warm ivory
  (`#F4F1EA`) is the default light canvas; charcoal (`--ink-600/700`) builds dark
  sections and cards. Accents are used **sparingly**: **Voltage** electric indigo
  (`#5466FF`, primary action/active), **Pulse** neon magenta (`#FF2E9A`, live/
  festival energy + gradients), **Champagne** gold (`#D9B26A`, luxe highlights &
  premium badges). The signature **stage gradient** runs indigo → violet → magenta.
- **Type:** display is a heavy poster-grade grotesque (Archivo 800–900), uppercase,
  tight tracking (−0.02em), line-height ~0.96 — mirrors the event posters. Body is
  clean geometric (Manrope). Eyebrows are mono (Space Mono), wide-tracked, uppercase.
- **Backgrounds:** light sections on warm ivory; **dark premium sections** on ink
  with a subtle top **spotlight** radial and faint stage-light tint. Full-bleed
  event photography in heroes, always under an ink fade for legibility.
- **Imagery:** real event photography — stages, festivals, lighting, luxury setups.
  Warm + neon (magenta/violet/gold lighting), cinematic, slightly moody. Always
  apply `--grad-ink-fade` (bottom) or a stage-light tint overlay. Corner radius on
  media: `--radius-xl`/`--radius-2xl`.
- **Cards:** smooth-rounded (`--radius-lg/xl`), white on light or `--ink-600` on
  dark, 1px hairline border (`--border-subtle`), soft layered shadow (`--shadow-sm`
  → `--shadow-lg` on hover). No colored left-border accent cards. No heavy gradients
  as card fills.
- **Borders:** 1px hairline neutral on light; `rgba(255,255,255,0.10)` on dark.
  Selected/active states get a 2px voltage ring.
- **Shadows:** soft, layered, low-opacity ink on light surfaces. On accents, a
  tinted **glow** (`--glow-voltage` / `--glow-champagne`) — used only on primary CTAs.
- **Radius:** inputs/chips 14px, cards 20–28px, hero panels 36px, buttons/tags pill.
- **Motion:** smooth and confident. `--ease-out` reveals, hover lifts cards/buttons
  `-3px`, press settles to `scale(0.97)`. No bounce on UI (spring reserved for
  toggles). Respects `prefers-reduced-motion`.
- **Hover states:** cards lift + shadow grows + image scales 1.05; the arrow
  affordance fills with voltage. Buttons darken/lift. **Press:** scale down slightly.
- **Transparency & blur:** the sticky nav and floating overlays use
  `backdrop-filter: blur()` over translucent ink. Category badges over photos use
  translucent ink + blur.
- **Layout:** 12-col mental model, `--content-max` 1280px, generous section padding
  (`--section-pad-y` up to 120px). Sticky translucent header.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) (CDN: `https://unpkg.com/lucide@latest`).
  Clean, geometric, ~1.75px stroke — matches the modern event-tech tone. This is a
  **substitution** (no brand icon set was provided) but a deliberate, consistent one.
  Flag to the user if they have a bespoke set.
- **Usage:** inline `<i data-lucide="name"></i>`, sized 14–24px, then
  `lucide.createIcons()`. Stroke icons inherit `currentColor`; the star uses
  `fill: var(--champagne-500)` for ratings.
- **Common icons:** `arrow-right`, `arrow-up-right`, `search`, `map-pin`, `star`,
  `badge-check` (verified supplier), `package` / `wrench` / `sparkles` (the three
  service levels), `scan-line` / `move-3d` (3D preview), `sliders-horizontal`,
  `calendar`, plus service glyphs (`drama`, `lightbulb`, `music`, `tent`, `monitor-play`).
- **Diamond bullet `◆`** is a brand *typographic* device (not an icon) — used to
  separate service lists, tinted voltage or champagne.
- **No emoji** as iconography in product UI. No hand-drawn SVG illustration.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (imports all tokens + fonts). Consumers link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `spacing.css`, `radius.css`, `motion.css`, `typography.css`.
- `assets/` — logos (`wii-logo-black.png`, `wii-logo-white.png`, original jpg), event
  photography (`event-*.png`), reference screenshots (`ref-*.png`).
- `readme.md` (this file), `SKILL.md`.

**Foundation cards** — `guidelines/foundations/*.card.html` (Design System tab):
Colors (ink, neutral, accents, gradients, status), Type (display, headings, body,
eyebrow), Spacing (scale, radius, elevation), Brand (logo, motif, imagery).

**Components** — `components/`
- `core/` — `Button`, `Badge`, `Input`, `SearchBar`
- `marketplace/` — `EquipmentCard`, `CategoryCard`, `ServiceCard`, `SupplierCard`,
  `ServiceOptionSelector`, `RentalDurationSelector`
- Use via `const { Button } = window.WiiEventDesignSystem_37bcec` after loading
  `_ds_bundle.js`.

**UI kit** — `ui_kits/website/` — `index.html` (interactive: Home · Marketplace ·
Equipment Detail · Services), composed from `Nav`, `Footer`, `Home`, `Marketplace`,
`EquipmentDetail`, `Services` + `data.js`.
