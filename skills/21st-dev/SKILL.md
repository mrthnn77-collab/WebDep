---
name: 21st-dev
description: Discover, install, and generate UI components using 21st.dev ("The npm for Design Engineers"). Access 10,000+ hand-crafted React, Tailwind CSS, and shadcn-compatible components, brand SVG logos, and native 21st MCP Server integration for AI coding agents.
---

# 21st.dev: The npm for Design Engineers & UI Component Marketplace

21st.dev (`21st.dev`) is the premier community registry and component marketplace often described as **"The npm for Design Engineers"** or **"Dribbble for shadcn/ui"**. It houses thousands of production-grade, highly animated components contributed by world-class creators (Aceternity, Magic UI, Cult UI, Kokonut UI, and indie designers).

---

## 🔌 21st MCP Server Integration

21st provides a unified HTTP Model Context Protocol (MCP) server that connects directly to AI coding assistants (Antigravity, Cursor, Claude Code, Codex, Windsurf):

### Endpoint
`https://21st.dev/api/mcp`

### Connecting to Antigravity & AI Clients

```json
{
  "mcpServers": {
    "21st": {
      "url": "https://21st.dev/api/mcp",
      "headers": {
        "x-api-key": "YOUR_21ST_API_KEY"
      }
    }
  }
}
```
*(API keys are free and instant at [21st.dev/mcp](https://21st.dev/mcp)).*

---

## 🛠️ Core 21st MCP Tools & Workflows

| Tool | Action | Example Query |
|:---|:---|:---|
| **`search(query)`** | Search catalog across 10,000+ components, templates, and blocks | `search("pricing table with billing toggle")` |
| **`get_component(name)`** | Pull exact, production-ready TSX source code and dependency manifests | `get_component("animated-bento-grid")` |
| **`search_logo(brand)`** | Retrieve clean, ready-to-paste JSX/TSX SVG logo components | `search_logo("stripe")` |
| **`get_inspiration(topic)`** | Retrieve curated component candidates and visual references | `get_inspiration("luxury watch showcase")` |
| **`generate(prompt)`** | Generate bespoke AI UI components directly into project | `generate("interactive linear fader in dark obsidian")` |

---

## 💻 21st CLI Integration

You can also use the open-source CLI directly in your terminal:

```bash
# Initialize 21st in your project
npx @21st-dev/cli@latest init

# Add a component directly
npx @21st-dev/cli@latest add <component-name>
```

---

## 💡 Best Practices for Design Engineers

1. **Prefer Catalog Components over Reinventing the Wheel:**
   - 21st components come pre-tested for responsive breakpoints, dark-mode tokens, accessibility, and high frame-rate animations.
2. **Match Project Design Systems:**
   - When importing a 21st component, adapt its tailwind classes and CSS variables to match your project's active `DESIGN.md` contract.
3. **Combine Micro-Interactions:**
   - Pair 21st layout blocks with `analog-ui` hardware controls or `kokonut-ui` tactile switches for bespoke craft.
