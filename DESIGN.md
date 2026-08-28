---
name: Jochona — Nightboard
description: The site is a one-line BBS at 2 a.m.; the visitor is the only caller, because it's their hardware.
---

# World

Self-hosting is the BBS tradition. The page is a dial-up bulletin board:
ANSI colors on terminal black, CP437 box chrome, a numbered menu as the
navigation, a file area as the download call to action. The argument lives in
one line: "1 CALLER ONLINE: YOU — there is no central server to be online
on."

# Color

Sixteen-color ANSI registers, used by role, never decoratively:

- ink/ground: `--blk #0a0a0c`, panel fill `--blk-2 #101014`
- frame chrome: `--cyn #00aaaa`, dim frame `--cyn-dim #036c6c`
- content accent / links: `--bcyn #55ffff`
- labels: `--mag #aa00aa`, tagline `--bmag #ff55ff`
- body: `--wht #b4b4b4`, emphasis `--bwht #ffffff`, de-emphasis `#7c7c84`
- hotkeys and focus: `--yel #ffff55`
- reversed-video bars and buttons: `--blu #0000aa` (+ border `#4444ff`, bar
  mid-text `#8888ff`)
- status-good: `--grn #55ff55`; alert: `--red #ff5555`
- table hairline: `#26262c`

Yellow marks what a key does. Green is live status. Red is the system
message. Blue backgrounds mean chrome (status bars) or an action (buttons).

# Type

One voice: IBM Plex Mono 400/500 (self-hosted woff2), system mono fallback.
Body `clamp(13px, 1.15vw, 16px)`. No display face: the title is CP437 block
art in a `pre`. Panel headers are bracketed mono caps (`[ 1 · WHAT IT IS ]`)
sitting on the panel border. The 8px `■` is panel corner chrome, not type.

# Components

- **Status bars** (`.bar`): reversed blue/white, top bar sticky; yellow brand.
- **Panels** (`.panel`): 1px `--cyn-dim` border on `--blk-2`, `■` corner
  marks, `.phead` label knocked out over the border.
- **Menu**: numbered `[N]` yellow hotkeys, dot leaders, `»` tails; hover/focus
  reverses the label (cyan background, black text).
- **Buttons** (`.btn`): `[ LABEL ]` reversed blue; hover flips to bright cyan.
- **KV lists** (`.kv`): magenta label, colon in dim cyan, value in body white.
- **Tables**: magenta header row over a cyan-dim rule; dashed row hairlines.
- **System message** (`.sysmsg`): red-bordered sub-panel, `▓▒░` header.
- **ASCII diagrams**: box-drawn, 80-column and 40-column variants.

# Layout

Single terminal column `min(100ch, 100% - 2.4rem)`. Hero: title art pours in,
CONNECT block, MAIN MENU + SYSTEM INFO panel pair, caller line, SELECT prompt.
Screens 1–6 are framed panels: what it is, platforms, controller, local-first,
builds, coming up; then the attribution line and the bottom bar.

Breakpoints: 900px stacks the hero panel pair and roadmap posts. 640px enters
**40-column mode**: `.w80` pres swap for `.w40` variants, the column snaps to
42ch, and `font-size: min(16px, calc((100vw - 1.6rem) / 24))` sizes the cell
so 40 columns exactly fill the width. Reflow, never clip.

# Motion

BBS motion only: the hero pours in line by line (60ms opacity steps at 90ms
intervals via `--d`), below-fold panels flick on in one beat
(`steps(2)`, triggered by IntersectionObserver), and the SELECT cursor blinks
at 1.06s. No easing curves, no parallax, no hover transforms.
`prefers-reduced-motion` shows everything instantly.

# Interaction

Number keys 1–6 jump to screens; Escape returns to top (app.js). Menu links
are the same targets. Focus is always visible: yellow 2px outline.

# Voice

Terminal-warm: short declaratives, board vocabulary (node, caller, file
area, system message), zero hype. Honesty rules are invariant: claims are
Jochona-scoped ("no Jochona account/cloud/relay"), LAN is direct, overlays
are end-to-end encrypted, 4K 120 Hz HDR/AV1 is stated as the certification
target, dev builds are labeled as such.

# Rules

- **One grammar.** Every element is something a BBS could draw: text, box
  glyphs, reversed video. No gradients, no glow, no rounded corners, no
  shadows, no imagery outside CP437 art.
- **Exact-width art.** `pre` art rows are code-point counted (74/40 columns),
  generated, not eyeballed; glyphs outside Plex Mono's coverage (e.g. `☾`)
  are banned from art because fallback advances break the frame.
- **40-column mode is a variant, not a squeeze.** Long lines get rewritten
  for 40 columns; horizontal clipping is a defect.
- **Cache-busted assets.** `style.css` and `app.js` ship with `?v=` — GitHub
  Pages caches CSS for 4 hours and stale-CSS/new-HTML mismatches double the
  variant markup.
