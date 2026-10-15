# Anti-patterns

Top failure modes when writing CLAUDE.md files. Read during QA pass. If any appear in the draft, fix them.

## 1. Vague adjectives

Adjectives give Claude Design nothing to act on. Replace with measurables.

- ❌ "Modern, clean, human aesthetic."
- ✅ "Max two font weights per viewport. No drop shadows. 4/8/16px spacing only."

## 2. Soft modal verbs for hard rules

"Prefer," "try to," "consider," "aim for" get interpreted as preferences and traded off. Rewrite as imperatives.

- ❌ "Prefer to avoid emoji."
- ✅ "Never use emoji."

## 3. Unscoped rules

Rules without scope get over- or under-applied inconsistently.

- ❌ "Use sentence case."
- ✅ "Sentence case for buttons, form labels, menu items. Title Case for page titles."

## 4. Negative rules without a replacement

Value-negatives without a positive fallback leave Claude Design picking something random.

- ❌ "Don't use blue."
- ✅ "Use `#6B46C1` (purple) instead of blue."

## 5. Restating Claude Design defaults

"Ask clarifying questions," "ensure accessibility," "use placeholders for missing assets" are already defaults. Including them dilutes the rules that actually matter.

Fix: remove entirely. Only include rules that override a default, fill a gap, or encode project-specific information.

## 6. Mission statements, personas, rationale paragraphs

"We're building the future of X for Y." "Our users are busy PMs aged 28–45." "We chose Inter because..."

None of these change a design decision. Cut them. Replace personas with concrete constraints if needed ("design for 13-inch laptop screens, dense information").

## 7. Bare "see also" references

"See `design-system.md`" puts the filename in context but gives no trigger to open it. Rewrite as imperative.

- ❌ "See `design-system.md`."
- ✅ "Before designing any new component, read `design-system.md`."

## Unifying principle

Claude Design doesn't fail by ignoring individual rules — it fails by averaging across a noisy file and producing output that splits the difference. Specificity, brevity, and scope are what push signal up.
