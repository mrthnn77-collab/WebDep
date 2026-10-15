# DESIGN.md — Fieldwork
*Project tracking tool for independent creative studios*

---

## Product brief

Fieldwork is a project and invoice tracker for small creative studios (1–10 people). Users are designers, photographers, and consultants — skilled at their craft, not interested in software complexity. The UI must make financial and project status legible in seconds. Cognitive load is the enemy. Every screen should answer "where am I, what's due, what needs my attention" without hunting.

---

## Audience

Primary user: studio owner or lead, checking in between client calls. Often on mobile. Rarely has time to learn UI patterns — the tool must work on instinct. Secondary user: junior team member logging time or updating a task status. Same expectation: obvious, fast, low friction.

---

## Design principles

- **Clarity over completeness.** If a screen is trying to show everything, it's showing nothing. Surface what's actionable; hide what's reference.
- **Status must be unambiguous.** Color, label, and icon must agree. Never use color as the only status signal.
- **No decorative complexity.** Every visual element earns its place by carrying information or guiding action. Flourishes slow people down.

---

## Color tokens

```yaml
colors:
  brand:
    primary: "#1B4DFF"        # Electric blue. CTAs and primary interactive elements only.
                               # Never used as a background. Never decorative.
                               # One primary CTA per screen — if you're tempted to use two, reconsider the layout.

    primary-hover: "#1540D9"  # Darken on hover/active states only.

  surface:
    background: "#F7F8FA"     # Page background. Never use pure white — too much contrast fatigue.
    surface-01: "#FFFFFF"     # Cards, panels, modals.
    surface-02: "#F0F2F5"     # Subtle separation — table rows, input backgrounds, secondary panels.
    border: "#E2E6ED"         # Dividers and outlines. Never use for text.

  text:
    primary: "#111827"        # Body text, headings, labels. Minimum 16px at this weight.
    secondary: "#6B7280"      # Supporting labels, metadata, timestamps. Never used for actionable text.
    disabled: "#9CA3AF"       # Disabled states only. Not for de-emphasis — use secondary instead.
    on-brand: "#FFFFFF"       # Text on primary blue backgrounds only.

  status:
    # STATUS COLORS ARE RESERVED. Do not use these colors for anything other than their named state.
    # Using green decoratively trains users to ignore it as a signal.

    success: "#16A34A"        # Paid invoices, completed projects, approved items. Positive state only.
    warning: "#D97706"        # Overdue items, pending approval, approaching deadline. Caution only.
    error: "#DC2626"          # Failed payments, blocked tasks, form errors. Critical state only.
    info: "#2563EB"           # System messages, neutral notifications. Not interchangeable with primary.

    success-bg: "#F0FDF4"     # Background for success states in banners or inline alerts.
    warning-bg: "#FFFBEB"     # Background for warning states.
    error-bg: "#FEF2F2"       # Background for error states.
```

---

## Typography

**Typeface:** Inter (system fallback: -apple-system, sans-serif)

```yaml
typography:
  display:
    size: 32px
    weight: 700
    line-height: 1.2
    usage: >
      Page titles only. One per page. Never inside components, cards, or tables.
      If you're reaching for display type inside a component, you're solving the wrong problem.

  heading-01:
    size: 24px
    weight: 600
    line-height: 1.3
    usage: >
      Section headers and modal titles. Maximum two per screen.

  heading-02:
    size: 18px
    weight: 600
    line-height: 1.4
    usage: >
      Card titles, panel headers, sidebar section labels.

  body:
    size: 15px
    weight: 400
    line-height: 1.6
    usage: >
      Default for all body text, descriptions, and secondary content.
      Do not go below 15px for any text a user needs to read.

  label:
    size: 13px
    weight: 500
    line-height: 1.4
    usage: >
      Input labels, table column headers, metadata, tags.
      Always pair with adequate contrast — never use label size with text-secondary on a surface-02 background.

  caption:
    size: 12px
    weight: 400
    line-height: 1.4
    usage: >
      Timestamps, helper text, fine print. Absolute minimum size.
      Never use for anything the user needs to act on.
```

---

## Spacing

Base unit: 4px. All spacing values are multiples of 4.

```yaml
spacing:
  xs:  4px    # Icon padding, tight inline gaps
  sm:  8px    # Internal component padding (compact)
  md:  16px   # Default internal padding — cards, inputs, list items
  lg:  24px   # Between related components
  xl:  32px   # Between sections
  2xl: 48px   # Page-level separation
  3xl: 64px   # Hero sections only
```

Breathing room is a feature. When in doubt, add space rather than compress. A crowded screen reads as stressful for this audience.

---

## Components

### Buttons

```yaml
button-primary:
  background: colors.brand.primary
  text: colors.text.on-brand
  height: 40px
  padding: "0 20px"
  border-radius: 8px
  font: label (13px / 500)
  usage: >
    One per screen. The single most important action. If a screen has two
    primary buttons, one of them is wrong.

button-secondary:
  background: transparent
    border: "1.5px solid colors.border"
  text: colors.text.primary
  usage: >
    Supporting actions alongside a primary. Cancel, Back, Export.
    Never use secondary buttons alone without a primary in context.

button-ghost:
  background: transparent
  text: colors.brand.primary
  usage: >
    Tertiary actions, inline text links, destructive actions (using error color).
    Destructive ghost buttons (Delete, Remove) use error color, never primary.
```

### Cards

```yaml
card:
  background: colors.surface.surface-01
  border: "1px solid colors.border"
  border-radius: 12px
  padding: md (16px)
  usage: >
    Use cards when the user is choosing between items — project list,
    client list, invoice overview. Cards imply "pick one of these."
    Do not use cards for sequential content the user moves through top-to-bottom.
    That's a list-row pattern.

card-status-indicator:
  usage: >
    Every card that represents a project or invoice must include a status badge.
    Status badge sits top-right of card. Uses status color + label — never color alone.
```

### List rows

```yaml
list-row:
  height: 56px (default), 72px (with supporting text)
  padding: "0 md"
  divider: "1px solid colors.surface.surface-02"
  usage: >
    Use list rows for sequential content the user moves through:
    activity feed, time entries, notification list, task checklist.
    List rows imply order and progression. Cards imply selection.
    When you're unsure: if the user will read every item, use rows.
    If the user will scan to find one item, use cards.
```

### Status badges

```yaml
status-badge:
  usage: >
    Always text + background color from status token pairs.
    Never color alone. Never icon alone.
    Labels are short and unambiguous: "Paid", "Overdue", "In progress", "Blocked".
    Avoid hedging language: "Possibly due", "Might be late" — if you can't confirm the state, don't show a badge.
```

### Forms

```yaml
input:
  height: 40px
  border: "1.5px solid colors.border"
  border-radius: 8px
  background: colors.surface.surface-01
  font: body (15px)
  focus-border: colors.brand.primary
  error-border: colors.status.error
  usage: >
    Error states show inline below the field in error color text.
    Never use a toast or modal for inline form errors — the user needs
    to see the error and the field at the same time.
    Required fields are marked with a label asterisk (*), not placeholder text.
```

---

## Explicit don'ts

These are the constraints that matter most. When in doubt, check this list first.

- **No gradients.** Backgrounds, buttons, cards, illustrations — none. Flat color only.
- **No shadows on interactive elements.** Cards may have a subtle border. Buttons do not use drop shadows.
- **No motion on data tables or list rows.** Status changes update in place without animation.
- **Status colors are reserved.** Success green, warning amber, and error red appear only in status contexts. Never used for branding, decoration, or emphasis.
- **No more than one primary CTA per screen.** If you have two primary actions, one is actually secondary.
- **Error states are always text + color.** Never color alone, never icon alone.
- **No tooltips for critical information.** If the user needs to hover to understand something, rewrite the label.
- **No full-width buttons on desktop.** Full-width is a mobile pattern only. On desktop, buttons are content-width with minimum 120px.
