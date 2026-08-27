# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS, zero build. This is a single marketing page hosted
on GitHub Pages; a build pipeline would add cost with no benefit at this
scale.

## Users

- Prospective users evaluating Jochona before installing: home gaming-cloud
  owners who self-host a Sunshine/Apollo/Vibepollo PC and want the nicest
  client to stream from it.
- Existing/early testers looking for the repo, releases, or docs.
- Technically literate visitors (this audience reads GitHub, cares about
  licensing, and can tell marketing hype from a real feature list).

## Product Purpose

Jochona Client is a rebranded, actively-developed fork of Moonlight Qt: the
nicest way to game-stream to a self-hosted PC. This site is the public-facing
introduction — it explains what the client is, who it's for, and where to get
it, without overstating its maturity.

## Positioning

Capability-driven, local-first streaming: no accounts, no cloud dependency,
secrets held in the OS credential vault, host features surfaced only when the
connected host actually supports them (Sunshine baseline, Apollo probe
fields, Vibepollo's declarative capability endpoint).

## Operating Context

The product is in active development — there is no general-availability
release yet. The site must not claim otherwise: no fabricated testimonials,
benchmarks, or user counts. Builds are currently available via CI on the
client repository; GitHub Releases will host stable builds once they exist.

## Capabilities and Constraints

- Windows 11 x64, macOS 14+ Apple Silicon, Linux x86-64 (AppImage/Flatpak),
  Steam Deck.
- Controller-first navigation; every ordinary workflow is completable without
  a keyboard or mouse.
- Wake-on-LAN, including recovery from a stale cached MAC address.
- Multi-host support with capability-awareness across Sunshine, Apollo, and
  Vibepollo.
- No accounts, no cloud relay; secrets live only in the OS credential store
  (Keychain / DPAPI / libsecret), never on disk in plaintext.
- Host identity change hard-blocks streaming until the user deliberately
  re-pairs — no silent continue.
- GPL-3.0, derived from Moonlight Qt with full upstream history preserved;
  this must be attributed on the site.
- Undecided: exact release date, pricing (there is none — it's free/open
  source), first stable version number.

## Brand Commitments

Name: Jochona (jochona.com; client repo at
github.com/Jochona/jochona-client). Identity: neon-on-navy — crescent +
play-mark + orbital trail motif; Space Grotesk display, Inter UI. Voice: plain,
direct, names the action.

## Evidence on Hand

- `assets/brand/`: app-icon.png, hero-wide.png, logo-mark.png,
  logo-mark-light.png — real tracked brand assets, copied from the client
  repo.
- Client repo `PRODUCT.md` and `proposal.md` — source of truth for feature
  claims used on this page.
- Absences: no telemetry data, no user testimonials, no benchmark numbers, no
  release builds yet — never fabricate any of these.

## Product Principles

1. Say only what's true today; the product is pre-release, not finished.
2. Local ownership: no account, no cloud dependency, secrets in the OS vault.
3. Controller-first, not controller-only.
4. Capability-driven, never product-name-driven.
5. Attribute upstream honestly and visibly (GPL-3.0, Moonlight Qt).

## Accessibility & Inclusion

Page must be fully keyboard-navigable, respect prefers-reduced-motion, and
maintain WCAG AA contrast throughout.
