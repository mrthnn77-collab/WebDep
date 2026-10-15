<!-- CLAUDE.md — {{YYYY-MM-DD}} — owner: {{@you}} -->

# {{PROJECT_NAME}}
{{ONE SENTENCE: what this is and who it's for.}}

## Stack
- {{STACK LINE, or "Design-only project."}}
- Design system: {{PATH or "this file is canonical"}}.
- {{"Codebase linked" or "No codebase"}}.

## Canonical sources
- Tokens: `{{PATH}}` — authoritative. If this file contradicts it, defer to the file.
- Components: `{{PATH}}` — authoritative. Don't recreate existing primitives.
- Voice: {{"this file" or "PATH"}} — authoritative for copy tone.

## Aesthetic direction
{{ONE OR TWO CONCRETE SENTENCES describing the feel.}}

{{INCLUDE THIS BLOCK UNLESS PROJECT IS GENUINELY EDITORIAL:}}
Not this project: warm cream backgrounds, serif display type, terracotta/amber accents, full-bleed photo heroes, editorial/literary layouts. If Claude Design's clarifying questions offer these presets, choose modern/minimal/bold alternatives. If no non-warm preset is offered, type the override into the free-text field.

## Tokens
- `--bg`: `{{VALUE}}`
- `--fg`: `{{VALUE}}`
- `--accent`: `{{VALUE}}` — {{where it's used}}
- Type: {{HEADLINE FONT}} (display), {{BODY FONT}} (body)

## Don'ts
- Never {{SPECIFIC, SCOPED FORBIDDEN PATTERN}}. {{REPLACEMENT IF VALUE-NEGATIVE}}.
- Never {{SPECIFIC, SCOPED FORBIDDEN PATTERN}}. {{REPLACEMENT IF VALUE-NEGATIVE}}.
- Never {{SPECIFIC, SCOPED FORBIDDEN PATTERN}}. {{REPLACEMENT IF VALUE-NEGATIVE}}.

## Commands (for handoff to Claude Code)
- Dev: `{{DEV_COMMAND}}`
- Typecheck: `{{TYPECHECK_COMMAND}}`
- Lint: `{{LINT_COMMAND}}`
- Test: `{{TEST_COMMAND}}`
- Run typecheck + lint before declaring any task done.

<!--
Maintaining this file:
- Edit in place, don't append. Reorganise when sections crowd.
- Aim for ~100 lines. Prune past 200.
- If you edit mid-chat, tell Claude: "CLAUDE.md has changed — re-read
  and treat the new version as canonical." Otherwise it applies to
  new chats only.
- Claude doesn't remember across chats — rules you've "taught" still
  need to live here.
- Bump the date at the top when rules change materially.
-->
