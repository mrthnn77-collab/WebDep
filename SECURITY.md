# Security Policy

## What this repository contains

Only instructions (`SKILL.md`, references) and small helper scripts for AI coding agents. It contains **no API keys, tokens, passwords or personal data**, and nothing in it runs automatically when you clone it.

## Using these skills safely

- **Read before you run.** Skills can ask your agent to run scripts (Python, Node, shell). They run on *your* machine with *your* permissions. Skim a skill's `scripts/` folder before first use.
- **Keep your agent's permission prompts on.** Approve commands one by one, especially anything that installs packages, deletes files or uses the network.
- **Never paste secrets into skill files.** Put API keys in environment variables or a local `.env` file (already ignored by `.gitignore`).
- **Install from this repository only** (or a fork you control). Copies on other sites may be modified.

## Reporting a vulnerability

Please open a [private security advisory](../../security/advisories/new) instead of a public issue. Include the file, what could go wrong and how to reproduce it. We aim to reply within 7 days.

---

## 🇹🇷 Güvenlik

Bu repo yalnızca yapay zekâ ajanları için talimatlar ve küçük yardımcı betikler içerir. İçinde **API anahtarı, şifre ya da kişisel veri yoktur** ve indirildiğinde kendiliğinden hiçbir şey çalışmaz. Skill'lerin çalıştırdığı betikler sizin bilgisayarınızda, sizin izinlerinizle çalışır; ilk kullanımdan önce `scripts/` klasörüne göz atın ve ajanınızın onay sorularını açık tutun. Bir güvenlik sorunu bulursanız lütfen herkese açık issue yerine GitHub'daki **Security → Report a vulnerability** bölümünü kullanın.
