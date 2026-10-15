---
name: watermelon-ui
description: Production-ready open-source React components, animated micro-interactions, full-page blocks, 29 complete dashboards, audio/voice interfaces, and native Watermelon MCP integration for shadcn/ui & Tailwind CSS.
---

# Watermelon UI — Full-Stack Components, Dashboards & Blocks

Watermelon UI (`ui.watermelon.sh`) is an open-source React & Tailwind CSS design system and platform built for developers who need **realistic, production-style interfaces** rather than isolated, toy widgets.

It spans **1000+ registry items**, **29 complete dashboards**, **audio/voice scrubbers**, **Web3 financial dialogs**, **bento marketing blocks**, and a native **zero-auth MCP server** (`mcp.watermelon.sh/mcp`).

---

## 💎 Architectural Highlights

| Pillar | Capabilities |
|:---|:---|
| **29 Production Dashboards** | Full administrative and SaaS layouts (ERP, E-Commerce, Web3, Invoicing, Incident Management, Sales, HR, CRM). |
| **Audio & Voice Suite** | Real waveform scrubbing, live transcription cards, and voice note players with dedicated custom React hooks. |
| **Web3 & FinTech Primitives** | Uniswap-style swap dialogs, currency converter cards, trade summaries, and transactional ledgers. |
| **Interactive Disclosures** | Fluid spring-animated expanders (`task-widget-disclosure`, `switch-disclosure`, `voice-chat-disclosure`). |
| **Bento Marketing Blocks** | Production hero and bento layouts (`bento-01`, `bento-02`, `sprintly`, `pathly`). |
| **Native MCP Server** | Hosted zero-auth Streamable HTTP server for AI agents to search and compose pages on the fly. |

---

## 🗂️ Component Directory Guide

All components are stored locally in `skills/watermelon-ui/components/`:

### 1. Audio & Voice Primitives (`components/watermelon-ui/`)
- `voice-note.tsx` / `voice-note-base.tsx`: Audiowave player with tactile playback scrub.
- `voice-transcribe.tsx` / `transcribe-voice-message.tsx`: Speech-to-text transcript cards with audio synchronization.
- `waveform-scrub.tsx`: Canvas & SVG driven audio waveform scrubber.
- Hooks included in `hooks/`:
  - `use-audio-waveform.ts`: Real-time audio waveform calculation.
  - `use-audio-playback.ts`: Play/pause state and progress tracking.

### 2. FinTech & Web3 Primitives (`components/watermelon-ui/`)
- `uniswap-dialog.tsx`: Full token swap modal with slippage, gas estimate, and token selector.
- `swap-currency-card.tsx`: Real-time currency exchange calculator with tactile switch toggle.
- `trade-summary.tsx`: Order breakdown, fees, price impact, and transaction confirmation.
- `transaction-list.tsx`: Live blockchain or bank ledger list with status indicators.

### 3. Complete Dashboards (`components/dashboards/`)
29 end-to-end, multi-view dashboard applications:
1. `e-commerce-dashboard`: Product metrics, inventory alerts, orders, customer lifetime value.
2. `erp-dashboard`: Enterprise resource planning, supply chain, and department allocations.
3. `web3-dashboard`: Crypto portfolio, wallet balances, token performance charts.
4. `capitalio-dashboard`: Venture capital, angel investments, portfolio valuation.
5. `sales-dashboard`: Pipeline tracking, quota progress, conversion funnel.
6. `payment-operations-dashboard`: Stripe/payment gateway transaction volumes and chargebacks.
7. `invoice-manager-dashboard` & `invoice-generator-dashboard`: Automated billing & tax exports.
8. `incident-management`: PagerDuty/Datadog style outage monitoring and escalation alerts.
9. `issue-tracking`: Linear/Jira style kanban and issue lifecycles.
10. `hrm`: Employee records, payroll, leave tracking, team hierarchy.
11. `meetings-dashboard`: Calendar sync, room reservations, video call agendas.
12. `medesk-dashboard`: Clinic appointments, patient histories, medical charting.
13. `tallie-dashboard`, `gridline-dashboard`, `astrix-dashboard`, `demostack-dashboard`, `bionis-dashboard`, `workflow-management-dashboard`, etc.

### 4. Interactive Micro-Interactions & Disclosures (`components/watermelon-ui/`)
- `status-picker.tsx`: Tactile presence/status selection pill.
- `step-indicator.tsx` / `step-pager.tsx` / `stepper.tsx`: Multi-stage form navigators.
- `subscription-calendar.tsx`: Billing renewal calendar with monthly heatmap.
- `task-widget-disclosure.tsx`: Collapsible floating task widget with spring transitions.
- `wiggling-cards.tsx`: Interactive physics-based dragging cards.
- `user-presence-avatar.tsx`: Real-time live status indicator rings.
- `theme-toggler.tsx`: Multi-variant smooth dark/light switches.
- `timeline.tsx`: Chronological events stream with branching states.
- `x-post.tsx`: Twitter/X embedded card with interactive likes, reposts, and quote layout.

### 5. Hero & Bento Blocks (`components/blocks/`)
- `bento-01` & `bento-02`: Asymmetrical feature grids with glass cards and dynamic badge pills.
- `sfHerodemo`: High-converting SaaS landing hero with CTA groups and dashboard preview.
- `sprintly` & `pathly`: Product feature walkthrough strips.

---

## 🤖 Watermelon MCP Server Integration

Watermelon provides a **free, public Streamable HTTP MCP server** that requires no API key:

### Endpoint
`https://mcp.watermelon.sh/mcp`

### Connecting to AI Assistants
- **Claude Code / Desktop:**
  ```bash
  claude mcp add --transport http watermelon https://mcp.watermelon.sh/mcp
  ```
- **Codex / Cursor:**
  ```bash
  codex mcp add watermelon --url https://mcp.watermelon.sh/mcp
  ```

### Available MCP Tools
- `search(query)`: Search across 800+ source-backed examples.
- `get_component(name)`: Pull exact TSX source code for any component.
- `get_inspiration(topic)`: Retrieve curated design recipes for a specific genre or feature.
- `compose_page(requirements)`: Assemble a cohesive multi-block layout plan.
- `list_categories()`: Browse available domains (dashboards, animated, blocks, templates).

---

## 🛠️ Usage Patterns

### Standard shadcn/ui Import
All components depend on standard `@/lib/utils` and Tailwind CSS:
```tsx
import { UniswapDialog } from "@/components/watermelon-ui/uniswap-dialog";
import { VoiceNote } from "@/components/watermelon-ui/voice-note";
import { EcommerceDashboard } from "@/components/dashboards/e-commerce-dashboard";
```

### Remote shadcn CLI Installation
To install any item directly from the official Watermelon registry:
```bash
npx shadcn add https://ui.watermelon.sh/r/uniswap-dialog.json
```
