# Claude Design — field notes

Practitioner observations on using Claude Design as a specialist. Not a spec, not a guide — just what I noticed while researching and using the tool, written for product designers who want to understand it beyond the marketing page.

Dated to April 2026 against Opus 4.7. Some of this will go stale as the tool evolves. Treat it as a snapshot.

---

## What Claude Design actually is

Anthropic's design tool, launched 17 April 2026, powered by Opus 4.7. It's a web app with a chat-and-canvas interface. You describe what you want; it produces HTML prototypes, React components, one-pagers, decks, and interactive explainers that render in your browser.

Availability: Pro, Max, Team, Enterprise. Enterprise has it off by default and requires admin enablement. Rolling out gradually — don't assume instant access even on a qualifying plan.

What it outputs: web prototypes. HTML/React-flavoured, not native Figma. For Figma output, you're still running Claude Code + Figma MCP + `generate_figma_design`. For native code handoff, it bundles a folder you pass to Claude Code.

What it's not: multiplayer. No shared cursors, no simultaneous editing. Solo exploration tool. Figma still wins for team work.

What it replaces in your stack: the v0-style exploration lane, early-stage prototyping for stakeholder reactions, high-fidelity mocks from a description. What it doesn't replace: Figma (for design systems, team work, pixel-perfect production) or code (for shippable artefacts).

---

## The five layers you're working with

The thing that's easy to miss about Claude Design is that it's not one system — it's a stack of layers between your prompt and the output. When the tool produces something unexpected, it's usually one of the lower layers, and knowing which one changes how you respond.

From bottom to top:

**1. Opus 4.7 (the raw model).** Produces neutral output on blank prompts. Web-safe sans-serifs, muted neutrals, cool accents. Confirmed by direct testing — a blank B2B prompt produces pure white, Inter, blue accent, no cream, no serif.

**2. The clarifying-question preset layer.** When you send a prompt for a consumer-category project, Claude Design surfaces a clarifying-questions interface before rendering. The presets it offers are not neutral. This is the layer most designers don't realise is there — and it's where most of the "Claude Design output always looks the same" feeling comes from.

**3. Product chrome.** The Claude Design UI itself renders on a cream background. You're picking design decisions against a cream canvas, which primes everything you see.

**4. Project context.** CLAUDE.md, linked codebase, design system, uploaded references. This is the layer you control most directly and the leverage point for consistency across sessions.

**5. Chat instruction.** The current turn's user message. Overrides everything below for that turn.

Precedence for conflicts runs top-to-bottom from layer 5 to layer 1. Chat wins for "this one time." CLAUDE.md wins for "always." Model defaults win only when nothing else has an opinion.

---

## The bias — what it is, how to spot it, what to do about it

Claude Design's preset menu biases toward warm/editorial aesthetics (cream backgrounds, serif display, terracotta/amber accents, editorial layouts) for consumer-coded projects. The effect is category-graduated: the more editorial your project description, the narrower the preset menu gets.

How it actually surfaces:

- **B2B / enterprise / fintech / dev tool prompts** — no preset menu. Output defaults to neutral modern UI. Safe.
- **Consumer-neutral prompts** (fitness, productivity) — preset menu appears, balanced.
- **Consumer-editorial prompts** (coffee, reading, wellness, hospitality) — preset menu appears with warm/editorial options dominant. The more editorial the category, the fewer non-warm options are offered. For the most editorial categories (journaling, boutique hospitality), *every* preset is warm/editorial/serif-coded.

The bias is real enough that if you're designing a consumer product and don't want the warm/editorial direction, you have to actively fight it.

How to spot it: first turn of a new project. The clarifying-questions panel appears. Count the aesthetic options. If they're all warm-coded (earthy, editorial, literary, paper-like, Kinfolk-style, wabi-sabi), you're in the preset narrowing.

How to counter it:

1. State aesthetic direction concretely in your opening prompt, before the preset menu appears. "Design a journaling app with a dense, tech-forward, Linear-style aesthetic" frames the whole session.
2. In the preset menu itself, pick whatever is most neutral. "Modern minimal" if offered. Otherwise the lightest/coolest palette.
3. If no non-warm preset exists, use the free-text field at the bottom of the clarifying questions to write "Override defaults: not editorial, not warm, not cream."
4. Use a CLAUDE.md with an aesthetic override block (the skill in this repo generates one automatically for non-editorial projects).

The bias isn't in the model's raw weights — it's in the preset-menu generation layer that Claude Design itself can't see. Asking Claude Design directly "do you have a warm default bias?" gets a denial. The model answers about the layer it can introspect. The bias lives one layer up, outside its self-knowledge.

---

## Working patterns

Observations from using the tool seriously, written as opinions because that's what they are.

### Memory model: treat it like a senior designer with zero cross-chat memory

Within a chat, Claude Design accumulates context and gets better. Between chats in the same project, it starts fresh. A rule you taught it in chat 10 is gone by chat 11 unless it's written down.

Practical consequence: you have two choices.

1. **Burn context re-explaining every chat.** Fine for one-off work. Painful for ongoing projects.
2. **Codify rules in CLAUDE.md once.** 30 minutes of setup that pays back every session afterward. This is what the skill in this repo is for.

The halfway path — "I'll just remind it each time" — is the worst of both. You still do the work; you just do it incrementally and inconsistently.

### When to write a CLAUDE.md, and when not to

Write one when:
- The project has multiple sessions ahead
- Multiple people will use the project
- You're seeing the same drift get corrected repeatedly in chat
- There's a linked codebase or design system you want respected

Don't bother when:
- Single-use exploration
- The brief is "whatever feels right"
- You're in the first hour of a new project and still figuring out what "good" looks like

### What Claude Design is good at

- Fast visual exploration from a description
- Generating variations of a layout or component
- Translating a prompt into something stakeholders can react to in 60 seconds
- High-fidelity HTML prototypes for interaction feel
- Bridging a design idea to a Claude Code handoff

### What it's not good at

- Pixel-perfect production work (use Figma)
- Complex multi-screen state (gets lost across screens)
- Edge cases at scale (error, empty, loading states across 40 screens — prepare for drift)
- Team collaboration (solo tool)
- Brand-critical work without strict rules (defaults will leak through)

### What to do when it goes off track

Don't wrestle in chat. Every bad turn narrows the attention budget for good turns. If the output is off and one quick correction doesn't fix it:

1. **Start a new chat in the same project.** Fresh context, CLAUDE.md still applies, tokens you saved from the old chat are yours to spend.
2. **Sharpen CLAUDE.md first if the rule that was broken was meant to be pinned.**
3. **State what's wrong and what to do instead.** Not "this isn't right" — "the padding is too generous; tighten to 8px/16px/24px only." Specificity recovers direction faster than frustration.

### Token consumption is real

Claude Design burns through weekly allotments fast for serious iterative work. Reports of 50% of a Pro weekly quota on one design system setup plus a single prototype with tweaks. Max plan is the practical minimum if you're using it daily; Pro is for dabbling.

### Where it slots in your workflow

Best positioned as the **exploration and refinement lane**, sitting between "brief" and "production design." Rough sequence that works:

1. **Brief → Claude Design** — fast visual direction, three to five variants
2. **Claude Design → Figma** — whichever direction wins gets rebuilt natively for design system work, team review, pixel-perfect polish
3. **Figma → Claude Code** — implementation, with the Claude Design handoff bundle providing code-level context if used

Treating Claude Design as "the thing that replaces Figma" will disappoint. Treating it as "the thing that gives me ten hours of exploration in one" is closer to the truth.

---

## Things I don't know

Honest list — things a specialist would want to know but I couldn't verify in the research.

- **Handoff bundle contents.** What exactly ships when you "Hand off to Claude Code"? Claude Design itself couldn't answer. Unverified.
- **Other filename conventions.** Whether `.claude/`, `AGENTS.md`, `.cursorrules`, or similar files get any special treatment. Worth testing before relying on them.
- **Category boundary for the bias.** Tested coffee, journaling, hospitality, B2B fintech. Unclear where the line sits for categories like fitness, meditation, compliance SaaS. Probably a gradient rather than a binary.
- **How the bias evolves.** The preset menu is generated by some system that could change without notice. The observation here is a snapshot.
- **Game and installation projects.** Everything tested here was a conventional web/product project. Unclear how Claude Design handles unusual surface types.
- **Long-session drift.** After 20+ turns in one chat, does quality degrade? Haven't tested systematically.

If you poke at any of these, let me know — would be useful to fold into the next version of these notes.

---

## Closing

Claude Design is still new, and it's moving. These notes reflect April 2026. The five-layer model holds even as individual layers change. The bias will probably soften as Anthropic notices it. Token budgets will probably expand. Handoff will probably improve.

What likely won't change soon: the memory model (fresh chat, no persistence without a context file), the precedence stack (chat wins, then CLAUDE.md, then everything else), and the fact that you're designing in the same session as the model — which means everything you do early in a chat primes everything after.

Design accordingly.

---

*Observations current as of April 2026. Additions and corrections welcome.*
