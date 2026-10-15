# Rationale

Why the template is shaped the way it is. Every section traces back to either a finding from a structured interrogation of Claude Design, or a documented behaviour of the product. Treat this as observed behaviour, not published specification — Anthropic has not released a spec, and Claude Design's own answers acknowledged uncertainty in several places.

---

## Scope

This template is scoped to **product UI design in Claude Design** — dashboards, apps, admin tools, SaaS interfaces, internal tools, any screen where a person interacts with a product.

Users building marketing sites, editorial brand sites, or long-form content surfaces can still use the template as a starting point, but may need to adjust the Don'ts and add a Voice section for those contexts. The skill that accompanies this pack flags this at output time.

---

## How the template was built

Three inputs:

1. **A first-pass template** built from public sources: Claude Design's onboarding docs, the Anthropic support article on inputs, community CLAUDE.md conventions, and Opus 4.7 prompting guidance.
2. **A structured interrogation of Claude Design** — 12 primary questions covering 42 sub-questions in total, across parsing behaviour, attention budget, section weighting, conflict resolution, multi-project scoping, handoff behaviour, session lifecycle, iteration patterns, reference file handling, failure patterns, and canonical template recommendations.
3. **Empirical replication tests** across four project categories to verify claims about model defaults.

Three of Claude Design's own answers were inconsistent with observed behaviour. Those are flagged below.

---

## Section-by-section justification

### Metadata header (HTML comment)

**Shape:** `<!-- CLAUDE.md — YYYY-MM-DD — owner: @you -->`

**Why:** CLAUDE.md is injected into context at chat start and stays there — it does not refresh mid-chat, and edits do not propagate to already-running chats. A date line lets users tell at a glance whether a running chat is using a stale copy. Claude can quote the line back when asked, so comparison against the file on disk is trivial.

HTML comment rather than YAML frontmatter because no recognised frontmatter schema exists. Invented frontmatter fields give false confidence that structured metadata is being parsed when it isn't.

### Project one-liner

**Shape:** Single sentence naming what the project is and who it's for.

**Why:** Caps scope. Mission statements, persona descriptions, and company background were identified as the lowest-leverage content in a CLAUDE.md — they don't change a single design decision. A one-line project statement is the minimum useful version.

### Stack

**Shape:** Bullets naming the framework (if any), design system location, codebase state.

**Why:** One-line pointers beat architectural descriptions. When a codebase is linked, Claude can read files on demand — prose summaries create drift between the summary and the file.

### Canonical sources

**Shape:** Explicit statement of which files are authoritative per concern.

**Why:** The single highest-leverage section for projects with linked codebases or existing design systems. Without it, CLAUDE.md wins every conflict against design system files by default — which is correct when CLAUDE.md has the right answer, but wrong when the design system is the source of truth and CLAUDE.md is a summary that has drifted.

The pattern `"X is canonical. If this file contradicts it, defer to the file."` explicitly flips precedence in the right direction and means CLAUDE.md doesn't have to be kept in sync with every token change.

### Aesthetic direction (with override block)

**Shape:** One or two concrete sentences describing the feel, plus a standard paragraph flagging the Claude Design editorial bias.

**Why:** The most empirically-grounded section of the template. An earlier draft assumed Opus 4.7 has a warm-cream/serif/terracotta default baked into the model. When interrogated, Claude Design denied the bias, and a blank test generating a B2B landing page produced pure white, Inter, blue accent — confirming the denial at the model-output layer.

Empirical testing across three consumer categories (specialty coffee, journaling app, boutique hotel) revealed a different pattern:

- Claude Design surfaces a clarifying-questions interface before rendering.
- For consumer/editorial-coded categories, the preset options narrow toward warm/editorial aesthetics.
- By the most editorial categories, every aesthetic preset offered was warm/editorial/serif-coded. Non-warm alternatives were eliminated from the menu entirely.
- The Claude Design UI itself renders on a cream background, priming the session visually.

The bias is real, but not where the earlier draft assumed. It operates at the clarifying-questions layer and the product chrome, not the model output layer.

For product UI specifically, this bias is always worth overriding. Product UI almost never wants cream/serif/terracotta defaults, and consumer-category UI projects (which trigger the bias most strongly) are exactly the ones where a user might not realise the override is needed until they see the preset menu.

### Tokens

**Shape:** 5–8 load-bearing token values inlined, with a pointer to the canonical file for the full set.

**Why:** Only CLAUDE.md is auto-loaded at chat start — referenced files are not. A rule like "tokens live in `system/tokens.css`" puts the filename in context but not the values. For a task that doesn't require reading the file, Claude may not open it. Inlining the load-bearing values ensures they're always in context.

Specificity beats volume. 8 well-chosen tokens beat 40 mediocre ones. Full palettes belong in the canonical file.

Anti-pattern: duplicating the full palette in both CLAUDE.md and the token file. They drift. Claude will prefer CLAUDE.md (correctly, per precedence) but the CSS file becomes stale within a sprint.

### Don'ts

**Shape:** 3–6 hard rules, imperative and scoped.

**Why:** Highest-leverage section per line of text. Negative constraints are easier to follow reliably than positive ones because they function as tripwires — Claude notices when it's about to violate them. Positive rules ("use good typography") have no discrete trigger.

Three requirements for every don't:

1. **Imperative verbs.** "Never" / "must never" — not "prefer to avoid" or "try not to." Soft modal verbs get interpreted as preferences and traded off against other pressures.
2. **Scope per rule.** "Never use emoji" is weak. "Never use emoji in UI copy, icons, or section headers" is strong. Unscoped rules get over-applied or under-applied inconsistently.
3. **Positive replacement for negative rules about values.** "Don't use blue" fails — Claude doesn't know what to use instead. "Use purple `#6B46C1` instead of the system's blue" works.

### Commands

**Shape:** Bash commands for dev, typecheck, lint, test.

**Why:** Dead weight in a pure design context, but critical at handoff. CLAUDE.md is a shared convention between Claude Design and Claude Code — same filename, same parsing, same auto-load at project root. A well-written CLAUDE.md travels to the downstream engineer's repo whether or not the handoff bundle copies it explicitly.

Including commands preemptively means the same file serves both audiences without needing to be rewritten.

Note: Claude Design's own answer on the handoff bundle contents was "I don't know — haven't inspected what it ships." Whether CLAUDE.md is included in the bundle is worth empirically verifying.

### Maintenance footer (HTML comment)

**Shape:** HTML comment covering: edit-in-place discipline, length targets, mid-chat refresh instructions, cross-chat memory note.

**Why:** CLAUDE.md behaviours that surprise users need to be documented in the file itself. The three that bite hardest:

1. **Edits don't propagate to live chats.** Users assume live-config behaviour; they get session-pinned behaviour. The refresh workaround ("CLAUDE.md has changed — re-read and treat the new version as canonical") is buried in observed behaviour, so the template surfaces it.
2. **Claude doesn't remember across chats.** Counterintuitive but critical — a rule followed flawlessly in 10 chats will only be followed in chat 11 if it's still in the file. The evidence of the rule working is the rule working, not redundancy.
3. **Append drift.** Over time, CLAUDE.md files accumulate rules at the bottom rather than being reorganised. The later-in-file recency bias starts silently deciding conflicts. Reorganise instead of appending.

---

## Anti-patterns worth knowing

Seven failure modes surfaced by the interrogation and validated against the composed template:

1. Vague adjectives instead of concrete constraints
2. Soft modal verbs for hard rules
3. Rules without scope
4. Negative rules without a positive replacement
5. Restating Claude Design defaults
6. Mission statements, personas, rationale paragraphs
7. Bare "see also" references (without an imperative trigger)

The unifying principle:

> Claude Design doesn't fail by ignoring individual rules — it fails by averaging across a noisy file and producing output that splits the difference. Specificity, brevity, and scope are the three levers that push signal up.

---

## Findings that contradict Claude Design's self-report

Three cases where Claude Design's own answers were inconsistent with observed behaviour:

**1. The warm-cream bias denial.** Claude Design denied having a warm-cream/serif/terracotta default. A blank B2B test supported the denial. But preset menus across three consumer-category projects funnelled toward exactly this aesthetic, with alternatives eliminated at the more editorial end. Most likely explanation: Claude Design can't see its own clarifying-question preset menu or UI chrome — those are generated by surrounding product systems it doesn't introspect. When asked about defaults, it answered about the layer it can see. The bias exists, one layer up.

**2. Handoff bundle contents.** Claude Design couldn't state whether CLAUDE.md is included in the Claude Code handoff bundle. Worth empirically verifying before treating as canonical.

**3. Other instruction-file conventions.** Claude Design was uncertain whether filenames like `.claude/`, `AGENTS.md`, or `.cursorrules` receive special treatment. If those conventions are recognised, the template should mention them as cross-references.

---

## Optimal length

Sweet spot: 60–120 lines, approximately 400–1,000 words.

Upper bound before diminishing returns: approximately 200 lines.

Hard ceiling: 500 lines. Past this, rules dilute each other and the file actively hurts output quality more than it helps.

The worked example in this pack sits at approximately 50 lines. The template with all placeholders filled typically lands at 60–90 lines for product UI projects.

---

## Limits

Five things this template cannot do:

1. **Override live chat instructions.** The current turn's user message wins over CLAUDE.md for that turn.
2. **Refresh mid-chat.** Edits apply to new chats only. Mid-chat updates require an explicit re-read instruction.
3. **Handle multi-brand logic in a single file.** Separate Claude Design projects are the correct scoping mechanism.
4. **Import or include other files.** No @include, no symlinks, no inheritance. Referenced files are hints that can be opened on demand, not imports.
5. **Cross-project context.** Each project has its own CLAUDE.md. No org-level mechanism exists for shared rules.

---

*Template + rationale prepared against Claude Design behaviour observed April 2026. Behaviour may evolve. Date-stamp any republication.*
