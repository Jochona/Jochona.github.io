---
name: Jochona
description: Local-first game streaming to your own PC
colors:
  navy-000: "#060b16"
  navy-050: "#0a1526"
  navy-100: "#0e1c33"
  navy-150: "#132441"
  navy-200: "#1b2f52"
  brass-050: "#8a713c"
  brass-100: "#caa356"
  brass-200: "#e3c07f"
  trail-100: "#54ead0"
  trail-200: "#9df5e4"
  ink-000: "#f3f0e8"
  ink-100: "#cdd6e2"
  ink-200: "#9aabc0"
  ink-300: "#7b91a8"
  danger-100: "#e2a05c"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.6vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
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
    padding: "0.65em 1.1em"
  button-primary-hover:
    backgroundColor: "{colors.trail-200}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-000}"
    typography: "{typography.label}"
    padding: "0.65em 1.1em"
---

# Design System: Jochona

## Overview

**Creative North Star: "The Night Navigation Chart"**

Jochona's marketing surface reads as a celestial/nautical navigation chart, not a SaaS dashboard. A homelab owner plots one short course — device, network, host — the way a navigator plots a bearing: an instrument bezel with ticks, a plotted line with a hard, single-shot draw-in, and small mono coordinate readouts standing in for data the product can actually prove (capability-aware, LAN or Tailscale) rather than invented metrics. The crescent-and-orbital-trail brand mark is the astrolabe at the center of the hero, not a corner logo.

Confirmed rejections: no floating-laptop dashboard hero, no gradient-text hype, no icon+heading+text card grid, no kicker/eyebrow labels above headings, no fabricated benchmarks or testimonials (the product is pre-release and the copy says so).

**Key Characteristics:**
- Deep navy ground, chosen for the scene (a living-room TV / desk at night, low ambient light — the audience this product serves).
- Brass-gold instrument linework for structure (bezels, dividers, buttons); one cyan "orbital trail" accent reserved for live/active state and primary actions.
- Mono readouts (IBM Plex Mono) used only where they carry real information: platform specs, connection legs, log marks.
- Motion is a single authored moment (the hero plot line draws in once on load), not scattered hover effects.

## Colors

Restrained navy ground with one committed neon accent (cyan "trail") and a secondary warm instrument color (brass) that carries structure, not emphasis.

### Primary
- **Orbital Trail** (`#54ead0`): the one neon accent. Reserved for the primary CTA, the live/active plotted line, waypoint nodes, and links. Never used for body text at length.

### Secondary
- **Instrument Brass** (`#caa356` / hover `#e3c07f` / dim `#8a713c`): all structural linework — bezels, dividers (`--rule`), buttons' default border, section tags, log marks are the exception (those use trail). Brass reads as "the chart's own ink," not a second call-to-action color.

### Neutral
- **Deep Space Navy** (`#060b16` navy-000, `#0a1526` navy-050 page ground, `#0e1c33`–`#1b2f52` panel steps): grounds and panels, darkest to lightest.
- **Parchment White** (`#f3f0e8`): headings.
- **Chart Ink** (`#cdd6e2` ink-100 body, `#9aabc0` ink-200 secondary copy, `#7b91a8` ink-300 captions/mono labels): body text tinted from the navy hue, never pure gray. ink-300 is the contrast floor at 5.6:1 on navy-050.
- **Caution Amber** (`#e2a05c`): the single "HARD STOP" tag on the identity-change callout. Not used elsewhere — its rarity is what marks it as a warning.

### Named Rules
**The One Accent Rule.** Cyan (`trail-100`) is the only saturated, high-chroma color on the page. It marks exactly one thing: what's live, active, or the primary action. Brass never competes with it for that job.

## Typography

**Display Font:** Space Grotesk (with system-ui fallback)
**Body Font:** Inter (with system-ui fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace fallback)

**Character:** Space Grotesk's geometric, slightly technical character carries the instrument-panel voice at display size; Inter stays plain and legible for reading; IBM Plex Mono is reserved for anything that reads as measured data — coordinates, specs, log marks.

### Hierarchy
- **Display** (600, `clamp(2.4rem, 4.6vw, 3.6rem)`, 1.06): the hero h1 only.
- **Headline** (600, `clamp(1.6rem, 2.6vw, 2.1rem)`, tight): section `h2`.
- **Title** (600, 1.05–1.2rem): waypoint/log/component `h3`.
- **Body** (400, 1rem, 1.55, max 68ch): paragraph copy.
- **Label** (mono, 0.72–0.86rem, +0.02em tracking, uppercase only for the single `HARD STOP` tag): specs, coordinates, section tags, button text.

### Named Rules
**The Diegetic Label Rule.** Every mono readout must belong to the chart's own instrument (a bearing, a spec, a log mark). A mono label placed above a heading as a page-wide kicker is the one construction this system refuses outright.

## Layout

Single centered column, `min(1180px, 100% - 3rem)`. Sections stack with 5.5rem vertical padding and a 1px brass divider between them (never a card boundary). Two breakpoints: 900px collapses the hero to one column and the platform strip to two, 720px collapses the top nav into a slide-down disclosure and the platform strip to one column. Spacing rhythm holds throughout: more space above a heading than below it; the course/log/vault lists all share the same divided-list pattern rather than each inventing its own.

## Elevation & Depth

Flat by design — the chart metaphor is a 2D plotted surface, not a stack of lifted panels. Depth reads through line weight and opacity (bezel rings at 32–55% opacity, dividers at 28%), not shadow. The one exception is a soft `drop-shadow` glow behind the hero brand mark, which reads as instrument backlight, not card elevation.

### Named Rules
**The No-Card Rule.** No component gets a background box, radius, or shadow to read as a "card." Grouping is done with shared bezels, dividers, and continued plotted lines instead.

## Shapes

No border radius anywhere in the system (`rounded: none`) — every edge is a hard instrument line, consistent with an engraved chart/bezel material. Circles exist only as chart furniture (waypoint nodes, bezel rings, platform-icon primitives), never as a UI chrome device (no pill buttons, no rounded cards).

## Components

### Buttons
- **Shape:** square corners, 1px border, mono label type, `0.65em 1.1em` padding.
- **Primary (`btn--trail`):** filled cyan background, navy-000 text, 600 weight. The only filled button in the system — reserved for the single primary action per view.
- **Ghost (`btn--ghost`):** transparent, dim ink border, ink-100 text; the default secondary action.
- **Hover:** brass buttons tint their border/background toward `brass-200`; the trail button brightens toward `trail-200`. No transform, no shadow.

### Navigation
Sticky top bar, translucent navy with a functional (not decorative) blur for legibility while scrolling, 1px brass-tinted bottom rule. Links are plain text with a brass underline on hover/focus. Below 720px the links collapse into a slide-down disclosure toggled by a bordered "Menu" button with `aria-expanded`/`aria-controls`.

### Chart Figure (signature component)
The hero's astrolabe: an SVG instrument (tick ring, two bezel circles, two cubic-bezier "plot lines" in trail color, two waypoint node circles, mono coordinate labels) layered over the brand mark image. The plot lines draw in once via `stroke-dashoffset` on load (`prefers-reduced-motion` shows the end state immediately, no animation). This pattern — a plotted line connecting two labeled nodes — repeats as the vertical divider in the "course" section's waypoint list.

### Instrument Panels
Full 1px brass border on all sides (never a colored left/right accent border), used for the security "HARD STOP" callout and the downloads panel. Internal padding 1.8–2.6rem.

## Do's and Don'ts

### Do:
- **Do** reserve cyan (`trail-100`) for exactly one job per view: the live/active state or the primary action.
- **Do** keep every mono label diegetic to the chart (a real spec, coordinate, or log mark) — never decorative.
- **Do** use full 1px borders for panels; never a colored `border-left`/`border-right` heavier than 1px.
- **Do** keep motion to one authored moment per view; respect `prefers-reduced-motion` by showing the end state.

### Don't:
- **Don't** add a kicker/eyebrow label above any heading — the heading carries its own weight.
- **Don't** put icon+heading+text into an elevated "card" shell; use the divided-list or divided-strip pattern instead.
- **Don't** round any corner — the system's edges are all hard instrument lines.
- **Don't** introduce a second saturated accent color; brass is structural, not a second call-to-action color.
