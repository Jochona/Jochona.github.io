---
name: Jochona
description: Game streaming over hardware and services you own end to end
colors:
  navy-000: "#030710"
  navy-025: "#060b16"
  navy-050: "#081426"
  navy-100: "#0d1d35"
  navy-150: "#132b4c"
  navy-200: "#1b3b61"
  brass-050: "#8a713c"
  brass-100: "#caa356"
  brass-200: "#e3c07f"
  trail-100: "#54ead0"
  trail-200: "#9df5e4"
  ink-000: "#f6f4ed"
  ink-100: "#d6e0ec"
  ink-200: "#a8b9cb"
  ink-300: "#8399af"
  danger-100: "#e2a05c"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 5.2vw, 4.7rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.4vw, 4.2rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.84rem"
    letterSpacing: "0.02em"
rounded:
  none: "0px"
spacing:
  sm: "0.8rem"
  md: "1.6rem"
  lg: "3rem"
  xl: "5.5rem"
components:
  button-primary:
    backgroundColor: "{colors.trail-100}"
    textColor: "{colors.navy-000}"
    typography: "{typography.label}"
    padding: "0.78rem 1.15rem"
  button-primary-hover:
    backgroundColor: "{colors.trail-200}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-000}"
    typography: "{typography.label}"
    padding: "0.78rem 1.15rem"
---

# Design System: Jochona

## Overview

**Creative North Star: "The Direct Signal"**

One straight cyan beam crossing a night sky is the whole idea: your device on
one end, your PC on the other, nothing in between. The hero draws that beam
once — literally, as the page's single authored motion — and every later
section is a station along the same signal: the connect track's plotted line,
the glowing line arriving into the downloads panel. The visual world is the
scene the product lives in (a dark living room, a homelab at night), rendered
as night-sky imagery, drifting starfield, and hard-edged instrument furniture.

Voice is **warm and direct** — a person explaining the product to a friend.
Sentences carry a subject and a verb; no fragment-fragment punchline cadence,
no invented metrics, no testimonials. The product is pre-release and the copy
says so plainly.

Confirmed rejections: no floating-laptop dashboard hero, no gradient text, no
icon+heading+text card grid, no kicker/eyebrow labels above headings, no
fabricated benchmarks or user counts.

**Key Characteristics:**
- Deep navy night ground, chosen for the use scene (TV or desk at night, low
  ambient light).
- One committed accent: cyan "trail" is the signal itself and the primary
  action, nothing else.
- Brass carries quiet structure: hairline dividers, meta labels, platform
  icon strokes. It never competes with cyan for attention.
- Motion is the beam drawing in once, plus a quiet ambient layer (star
  twinkle, signal particles riding the beam, endpoint pulses breathing).

## Colors

### Primary
- **Signal Trail** (`#54ead0` / bright `#9df5e4`): the beam, its particles and
  endpoint rings, the route label, the primary CTA, focus outlines, and the
  live status dot. Never headline decoration, never body text.

### Secondary
- **Instrument Brass** (`#caa356` / bright `#e3c07f` / dim `#8a713c`): the
  page's structural ink — hairline rules (`--rule` at 24% opacity), mono meta
  labels, secondary-button hover, platform icon strokes. Structure, not
  emphasis.

### Neutral
- **Night Navy** (`#030710` panels, `#060b16` page ground, `#081426`–`#1b3b61`
  raised steps): all grounds.
- **Parchment White** (`#f6f4ed`): headings and high-emphasis labels.
- **Signal Ink** (`#d6e0ec` body, `#a8b9cb` secondary, `#8399af` captions):
  body text tinted from the navy hue, never pure gray.
- **Caution Amber** (`#e2a05c`): reserved for the single host-identity
  warning panel. Its rarity is what marks it as a warning.

### Named Rules
**The Signal Rule.** Cyan means exactly two things: the live signal (beam,
particles, pulses, status) and the primary action. If an element is neither,
it does not get cyan. Headline emphasis, list values, and decorative
gradients are all violations.

## Typography

**Display Font:** Space Grotesk (self-hosted, system-ui fallback)
**Body Font:** Inter (self-hosted, system-ui fallback)
**Label/Mono Font:** IBM Plex Mono (self-hosted, ui-monospace fallback)

### Hierarchy
- **Display** (600, `clamp(3.1rem, 5.2vw, 4.7rem)`, 0.98): hero h1 only.
- **Headline** (600, `clamp(2.4rem, 4.4vw, 4.2rem)`, 1.0): section `h2`.
  Band sections use a compact h2 (`clamp(1.5rem, 2.4vw, 2.1rem)`).
- **Title** (600, 1.05–1.75rem): `h3` in stops, lists, and panels.
- **Body** (400, 1rem, 1.6, max ~60ch): paragraph copy.
- **Label** (mono, 0.7–0.84rem, +0.02–0.06em tracking): buttons, meta
  readouts, diagram labels, vault entries.

### Named Rules
**The Diegetic Label Rule.** Every mono label belongs to the signal scene — a
platform spec, a route readout, a vault name, a warning tag. A mono label
placed above a heading as a page-wide kicker is refused outright.

**The Human Sentence Rule.** Headings and body copy are written the way a
person talks: subject, verb, and a reason to care. Two consecutive verbless
fragments are a rewrite trigger.

## Layout

Single centered column, `min(1280px, 100% - gutters)`. Eight sections: hero
(beam diagram + truth strip), connect (three stops on a plotted line), paths
(a route-capability table: LAN / Tailscale·NetBird / ZeroTier / direct
internet against streaming, discovery, and wake), constellation (a
hairline-divided roster of the five services: Client, Host, Companion,
Beacon, Relay, each with a mono status readout), local-first (copy + vault +
habits beside the identity panel), platforms (a slim band with a controller
rail note), roadmap (a slim two-column band: by 1.0 / planned for later),
builds (framed panel). Sections divide with 1px brass hairlines.
Breakpoints: 1120px trims the hero grid, 900px stacks hero/course/local/svc
grids and collapses the nav into a disclosure (the paths table scrolls
horizontally instead of stacking), 640px tightens everything to one column.

## Elevation & Depth

The scene is deep, the interface is flat. Depth comes from the night imagery,
the starfield canvas, and layered dark gradients inside the two framed panels
(hero figure, downloads). UI chrome itself uses hairlines, not shadows — the
only box-shadows are large, soft, offset ambient shadows under the two framed
panels and the primary button.

### Named Rules
**The Two-Frames Rule.** Exactly two components get a full border and a
backdrop: the hero's connection figure and the downloads panel (plus the
amber identity warning, which earns its border as a warning). Everything else
groups with hairline dividers on the open page — no card grids.

## Shapes

No border radius on any UI element — buttons, panels, strips, and rules are
hard-edged. Rounded corners exist only inside diagram/icon drawings where the
depicted object is itself rounded (a handheld's shell, a monitor's bezel).
Circles are diagram furniture: endpoint rings, pulses, node dots.

## Components

### Buttons
Square corners, 1px border, mono label, min-height 48px (40px in the nav).
- **Primary:** filled cyan, navy text, the only filled button; one per view
  region.
- **Secondary:** transparent with dim ink border; hover tints toward brass.

### Navigation
Fixed top bar, transparent until scroll, then translucent navy with
functional blur and a brass hairline. Link hover/focus draws a 1px brass
underline. Below 900px links collapse into a slide-down disclosure with
`aria-expanded`.

### Connection Figure (signature component)
The hero's framed night scene: brand night-sky art, a starfield/particle
canvas, and an SVG diagram — one straight beam between two labeled endpoint
rings, with a route label plate rotated to the beam's exact angle. Geometry
lives in one viewBox (1000×620); the canvas derives its particle path from
the beam element's rendered rect so the two can never drift apart. The beam
draws in once via `stroke-dashoffset` when the figure enters view;
`prefers-reduced-motion` shows the finished state.
Small screens swap in compact label variants (a shorter route tag, host
labels moved above the ring) sized in larger user units, because SVG text
scales with the viewBox and desktop sizes become illegible below ~640px.

### Stops and Strips
The repeated grouping pattern: items separated by brass hairlines on the open
page — truth strip, course track (with the cyan plotted line threading the
icons), vault list, habit list, platform rail. Icons are 1.25–1.6px stroke
line drawings, cyan-ringed only when they sit on the signal line.

### Instrument Panels
Full 1px border on all sides. The downloads panel frames the night art with
the beam arriving from the right; the identity warning uses the amber border
and is the page's only warning surface.

### Route Table
The paths section's instrument: a plain `<table>` with brass hairline row
rules, uppercase mono column heads, Space Grotesk row heads, and bold
parchment verdict words ("Yes.", "No.", "Manual entry.") leading each cell.
No color coding — the words carry the verdict, so it survives color
blindness and stays inside the Signal Rule. On small screens it scrolls
horizontally inside `.table-scroll`; it never stacks.

### Constellation List
The service roster: a hairline-divided two-column list (name + status on the
left, one honest paragraph on the right). Status readouts are diegetic mono
labels — brass for IN DEVELOPMENT, caption ink for PLANNED. Claims about
planned services stay in the future tense and sit under a lede that says
plainly only the client exists today.

## Motion

One authored moment: the hero beam draws in on first view. One quiet ambient
layer, always subordinate: star twinkle, six particles riding the beam,
endpoint pulses breathing on a 6.5s cycle. Hover feedback is color/underline
only — no transforms, no lifts, no tilt. `prefers-reduced-motion` collapses
all of it to the finished state.

## Do's and Don'ts

### Do:
- **Do** keep cyan for the signal and the primary action, and nothing else.
- **Do** write headings a person would say out loud.
- **Do** derive any canvas/JS geometry from the SVG beam's rendered position
  rather than duplicating coordinates.
- **Do** keep every mono label diegetic: specs, routes, vault names, tags.

### Don't:
- **Don't** color headline words with the accent — emphasis comes from the
  sentence, not a tint.
- **Don't** add a kicker/eyebrow above any heading.
- **Don't** introduce new bordered boxes; group with hairlines instead.
- **Don't** round a corner on any UI chrome.
- **Don't** add hover transforms, parallax tilt, or scroll-driven effects;
  the motion budget is spent.

## Deployment

- **Cache-busted assets.** `style.css` and `app.js` ship with
  `?v=<first 8 hex of the file's md5>`, restamped in index.html on EVERY
  asset edit (`md5sum style.css app.js`). GitHub Pages caches CSS for 4
  hours; a stale-CSS/new-HTML mismatch renders broken hybrids.
- **Deploy-gated verification.** After pushing, NEVER request the new `?v=`
  URL until the "pages build and deployment" run for that commit reports
  success — a pre-deploy request primes the CDN key with old bytes and
  poisons it for the full TTL.
