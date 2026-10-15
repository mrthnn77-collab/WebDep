---
name: design-md
description: >
  Use this skill whenever a user wants to create, write, or improve a DESIGN.md file —
  the markdown format used to give AI coding tools (Claude Code, Cursor, Stitch, Windsurf)
  a readable design system. Trigger for any mention of DESIGN.md, "design system for AI",
  "design file for Claude/Cursor", or requests like "write a design system file", "help me
  set up my design tokens for AI", or "create a DESIGN.md for my product". Also trigger
  when a user shares a weak or token-only DESIGN.md and wants it improved. The output is
  always a complete, well-structured DESIGN.md file that AI tools can reason with — not
  just read.
---

# DESIGN.md Skill

A DESIGN.md file is a plain-text design system that AI coding agents can read and reason with. The goal isn't just to describe what a design system looks like — it's to give the model enough context, constraints, and decision logic to make good choices without a designer in the room.

There's a meaningful difference between a file an AI can parse and one it can act on well. This skill produces the latter.

---

## Step 1: Interview before writing

Before generating anything, ask the user 3–4 focused questions. The answers shape every decision in the file. Don't skip this — a DESIGN.md written without product context produces generic output.

Ask:

1. **What is the product?** One or two sentences: what it does, who uses it, in what context (mobile, desktop, time-pressure, etc.).
2. **Do you have existing tokens?** Colors, type scales, spacing — or are we starting from scratch?
3. **What should the UI always do?** The single most important job the interface has (e.g., "communicate status at a glance", "never overwhelm a non-technical user").
4. **What does this system never do?** Any hard rules — no gradients, status colors reserved, one CTA per screen. If they don't know yet, you'll help them get there.

If the user has shared an existing DESIGN.md to improve, read it first and ask only what's missing.

---

## Step 2: Structure of a good DESIGN.md

Build the file in this order. Each section earns its place.

### 1. Product brief (always first)
Two to three sentences before any token. What the product does, who uses it, and what the UI must accomplish for them. This brief shapes every downstream decision the model makes — don't let it infer this from the tokens.

```
Fieldwork is a project and invoice tracker for small creative studios (1–10 people).
Users are designers and photographers — skilled at their craft, not interested in
software complexity. The UI must make financial and project status legible in seconds.
```

### 2. Design principles (3–5, optional but valuable)
Short, opinionated statements about what this system values. Not generic ("accessible, scalable") but specific to this product ("status must be unambiguous", "no decorative complexity").

### 3. Color tokens
Format: **value → intent → boundary**. The boundary is what most files skip — and it's where the constraint lives.

```yaml
primary: "#1B4DFF"
# Main interactive color. CTAs and active states only.
# Never used as a background, never decorative.
# One primary CTA per screen — if you're reaching for two, reconsider the layout.

success: "#16A34A"
# Reserved exclusively for positive states: paid invoices, completed tasks, approvals.
# Using this color decoratively trains users to ignore it as a signal. Do not use elsewhere.
```

Neutral surfaces, text hierarchy, and border colors should all have brief intent notes. They don't need the boundary treatment — but the semantic colors (status, brand, interactive) always do.

### 4. Typography
List the scale, but add **when to reach for each level** — not just size and weight. The decision logic is what prevents Claude from using display type inside a card component.

```yaml
display:
  size: 32px / weight: 700
  usage: Page titles only. One per page. Never inside components, cards, or tables.

label:
  size: 13px / weight: 500
  usage: Input labels, column headers, tags. Never use for actionable text — too small to click comfortably.
```

### 5. Spacing
A simple scale (4px base unit works well). Add one sentence about the philosophy: "When in doubt, add space. Density reads as stress for this audience."

### 6. Components
For each component family, write **decision logic**, not just visual spec. This is the layer that makes a file actually useful.

Don't write:
> Cards have a 12px border radius, 1px border, 16px padding.

Write:
> **When to use cards vs. list rows:** Cards are for browsable content where the user is choosing between items. List rows are for sequential content they move through top to bottom. When unsure — if the user will read every item, use rows. If they're scanning to find one, use cards.

Cover: buttons (hierarchy + when to use each level), cards, list rows, forms (error state handling), status badges, modals/drawers if relevant to the product.

### 7. Explicit don'ts (always last, always present)
This section does the most work per word. Hard stops — things this system never does, written as rules Claude can test against any screen it generates.

Keep them short and unambiguous:

```
- No gradients anywhere — backgrounds, buttons, illustrations. Flat color only.
- Status colors (success green, warning amber, error red) are reserved. Never decorative.
- No more than one primary CTA per screen.
- Error states are always text label + color. Never color alone.
- No tooltips for critical information — if the user needs to hover to understand it, rewrite the label.
- No full-width buttons on desktop. Full-width is a mobile pattern only.
- No motion on data tables or list rows.
```

Eight well-chosen don'ts will prevent more bad output than doubling the length of the token section.

---

## Step 3: Writing principles to hold throughout

**Write for constraint, not description.** Every token entry should answer: what is this for, and where can't it go? If a token definition only says what something looks like, it's incomplete.

**Silence is filled with defaults.** Anything you don't specify, Claude will decide on its own — usually fine, occasionally wrong. The don'ts section closes the most dangerous gaps.

**Semantic names carry context.** `color-purchase-cta` gives Claude more information before it reads a single word than `primary` does. If the user's existing tokens use generic names, suggest semantic alternatives for the most decision-sensitive ones.

**The brief shapes everything downstream.** A product brief that says "non-technical users, time-pressured, mobile-first" changes how Claude weighs density vs. legibility, motion vs. stillness, complexity vs. clarity — on every screen it generates.

---

## Step 4: Diagnostic loop (recommend this to the user)

Once the file is written, suggest this test: drop it into Claude Code or Stitch and ask for three variations of the product's most complex core screen. Look not for whether it looks right, but **where it deviates**. Every deviation is a missing or underspecified constraint. Add it. Run again.

Most files stabilize after two or three loops. Claude's mistakes are diagnostic — they show exactly what the file isn't saying.

---

## Output format

Deliver the complete DESIGN.md as a single file with:
- A clear title (`# DESIGN.md — [Product Name]`)
- A one-line italic subtitle describing the product
- Each section separated by `---`
- Tokens written in fenced YAML blocks with inline comments for rationale
- Component decision logic written as prose, not bullet lists
- Don'ts as a single fenced list at the end

Save the file to the user's workspace folder if available. If not, write it in a code block they can copy.

---

## Reference

See `references/example.md` for a complete, annotated example DESIGN.md you can use as a structural reference when building more complex files.
