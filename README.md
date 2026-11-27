# 🌐 WebDep

**An AI web team in one command.** WebDep asks you a few multiple-choice questions, picks a committed design direction, builds the site, adds motion, polishes it, tests it in a real browser, audits accessibility, SEO and performance, and helps you deploy.

Built for Claude Code; also works with Cursor, Codex and Antigravity. **120+ skills, one director: `/webdep`.**

[🇹🇷 Türkçe açıklama aşağıda](#-türkçe)

---

## ✨ What it does

```
/webdep
```

or just say *"build me a website for my café"*, *"make my site look better"*, *"make a site inspired by X, but mine"*.

| Step | What happens | Skills used |
|---|---|---|
| 0. Mode | Quick site · Guided build · Redesign · Inspired-by | `webdep` |
| 1. Brief | Site type, goal, content, style, motion level, stack → `SITE-BRIEF.md` | `webdep` |
| 2. Design system | Colors, type, spacing and an explicit "don'ts" list → `DESIGN.md` | `design-md`, `design-genres/*`, `ui-ux-pro-max`, `extract-design`, `site-dna-extractor`, `theme-factory` |
| 3. Build | Single HTML, React, or Next.js + Tailwind + shadcn/ui | `frontend-design`, `impeccable`, `saas-blocks`, `craft-interactions`, `web-artifacts-builder`, `shadcn`, `react-best-practices`… |
| 4. Motion | Calm, rich, scroll film or 3D | `animate`, `motion-principles`, `scroll-craft`, `3d-webgl`, `taste-gsap`, `react-view-transitions` |
| 5. Polish | Critique, polish, edge-case stress tests | `impeccable`, `review-animations`, `break-ui`, `taste-design-review` |
| 6. Test & audit | Screenshots at 3 widths; accessibility, SEO, performance | `webapp-testing`, `web-design-guidelines`, `web-quality-audit`, `accessibility`, `seo`, `core-web-vitals` |
| 7. Ship | Vercel, Netlify, GitHub Pages or a zip | `deploy-to-vercel` |

**10 genre packs:** editorial minimal · quiet luxury · dark tech · corporate trust · playful color · neo-brutalism · brutalist industrial · cinematic motion · japanese minimal · retro print — plus taste-suite, Claude Design remixes and 60+ searchable styles.

**House rules:** no lorem ipsum, no default purple gradients or generic card grids. Every site gets a named aesthetic and one memorable signature element. "Inspired by" means learning structure and feel — never copying code, copy, logos or images.

## 🧩 Our own component packs

| Pack | What's inside |
|---|---|
| `saas-blocks` | 10 landing-page sections (navbar, hero, logo marquee, bento, stats, testimonials, pricing, FAQ with SEO schema, CTA, footer). One set of CSS variables restyles everything from your `DESIGN.md`. |
| `craft-interactions` | Progressive blur, smooth caret input, 3D coverflow, squircle, animated links, swipe card stack, edge-aware scroll fade, magnetic hover, text scramble. |
| `tactile-hardware-ui` | Studio-hardware controls: rotary knobs with detents, faders, VU needle meter with real ballistics, LED meter with peak hold, rocker switch, brushed-metal rack panel with a shared light source. |

All React 18+, zero animation-library dependencies, keyboard and screen-reader accessible, reduced-motion safe.

## 🚀 Install

**As a Claude Code plugin (recommended):**

```
/plugin marketplace add mrthnn77-collab/WebDep
/plugin install webdep@webdep
```

Then run `/webdep:webdep`, or just describe the site you want.

**Manual copy (Windows):**

```powershell
git clone https://github.com/mrthnn77-collab/WebDep.git "$HOME\WebDep"
Copy-Item -Recurse "$HOME\WebDep\skills\*" "$env:USERPROFILE\.claude\skills\"
```

**macOS / Linux:**

```bash
git clone https://github.com/mrthnn77-collab/WebDep.git ~/WebDep
cp -r ~/WebDep/skills/* ~/.claude/skills/
```

**Antigravity / Cursor:**

```powershell
.\install\antigravity.ps1
.\install\cursor.ps1 -targetProject "C:\path\to\your\site"
```

**Requirements** (only for the step that needs them): Node.js 20+ (Next.js, shadcn, `extract-design`), Python 3 + Playwright (`webapp-testing`), ffmpeg (`scroll-craft` videos).

## 📚 All skills

Full list: [`skills/webdep/references/catalog.md`](skills/webdep/references/catalog.md) · Style picker: [`style-router.md`](skills/webdep/references/style-router.md) · Stack recipes: [`build-recipes.md`](skills/webdep/references/build-recipes.md)

## 🙏 Credits

WebDep brings together great open-source work in one flow: Anthropic, Paul Bakaus (Impeccable), Vercel, Emil Kowalski, Addy Osmani, shadcn, Nate Herk, Manav Arya Singh, Jake Schincariol and others. Sources and licenses: [THIRD_PARTY.md](THIRD_PARTY.md).

## License

The `webdep` director skill, `saas-blocks`, `craft-interactions`, `tactile-hardware-ui` and the docs: MIT © 2026 mrthnn77-collab. Other skills keep their own licenses — see [THIRD_PARTY.md](THIRD_PARTY.md).

---

## 🇹🇷 Türkçe

**Tek komutla site yapan yapay zekâ ekibi.** Ne istediğinizi birkaç seçenekli soruyla öğrenir, tasarım yönünü belirler, siteyi kurar, animasyonları ekler, cilalar, gerçek tarayıcıda test eder, kalite denetiminden geçirir ve yayına almanıza yardım eder.

Claude Code için yapıldı; Cursor, Codex ve Antigravity ile de çalışır. **120+ skill**, tek yönetmen: `/webdep`.

## ✨ Ne yapar?

```
/webdep
```

ya da *"bana bir kafe sitesi yap"*, *"sitemi güzelleştir"*, *"şu siteye benzeyen ama bana ait bir site yap"* deyin.

| Adım | Ne olur | Kullanılan skill'ler |
|---|---|---|
| 0. Mod | Hızlı site · Rehberli kurulum · Yeniden tasarım · "Şuna benzesin" | `webdep` |
| 1. Brief | Site türü, hedef, içerik, stil, hareket seviyesi, teknoloji → `SITE-BRIEF.md` | `webdep` |
| 2. Tasarım sistemi | Renk, yazı tipi, boşluk ve "yapılmayacaklar" listesi → `DESIGN.md` | `design-md`, `design-genres/*`, `ui-ux-pro-max`, `extract-design`, `site-dna-extractor`, `theme-factory` |
| 3. Kurulum | Tek HTML, React veya Next.js + Tailwind + shadcn/ui | `frontend-design`, `impeccable`, `web-artifacts-builder`, `shadcn`, `react-best-practices`, `saas-blocks`, `craft-interactions`, `21st-dev`, `motion-primitives`… |
| 4. Hareket | Sakin, zengin, scroll filmi ya da 3D | `animate`, `motion-principles`, `scroll-craft`, `3d-webgl`, `taste-gsap`, `react-view-transitions` |
| 5. Cila | Eleştiri, cila, uç durum testleri | `impeccable`, `review-animations`, `break-ui`, `taste-design-review` |
| 6. Test ve denetim | 3 ekran genişliğinde ekran görüntüsü; erişilebilirlik, SEO, performans | `webapp-testing`, `web-design-guidelines`, `web-quality-audit`, `accessibility`, `seo`, `core-web-vitals` |
| 7. Yayın | Vercel, Netlify, GitHub Pages ya da zip | `deploy-to-vercel` |

**10 hazır tasarım türü:** editorial minimal · quiet luxury · dark tech · corporate trust · playful color · neo-brutalism · brutalist industrial · cinematic motion · japanese minimal · retro print. Bunlara ek olarak taste-suite, Claude Design remix'leri ve 60'tan fazla stil arama seçeneği var.

**Kurallar:** Lorem ipsum yok; varsayılan mor gradyan ve sıradan kart ızgaraları yok. Her sitenin adı konmuş bir tarzı ve akılda kalan bir imza öğesi olur. "Şuna benzesin" isteklerinde yapı ve his öğrenilir; kod, metin, logo ve görsel asla kopyalanmaz.

## 🚀 Kurulum

**Claude Code eklentisi olarak (önerilen):**

```
/plugin marketplace add mrthnn77-collab/WebDep
/plugin install webdep@webdep
```

Sonra `/webdep:webdep` komutunu çalıştırın ya da sadece ne istediğinizi yazın.

**Elle kopyalama (Windows):**

```powershell
git clone https://github.com/mrthnn77-collab/WebDep.git "$HOME\WebDep"
Copy-Item -Recurse "$HOME\WebDep\skills\*" "$env:USERPROFILE\.claude\skills\"
```

**macOS / Linux:**

```bash
git clone https://github.com/mrthnn77-collab/WebDep.git ~/WebDep
cp -r ~/WebDep/skills/* ~/.claude/skills/
```

**Antigravity / Cursor:**

```powershell
.\install\antigravity.ps1
.\install\cursor.ps1 -targetProject "C:\path\to\your\site"
```

**Gereksinimler** (yalnızca ilgili adım için): Node.js 20+ (Next.js, shadcn, `extract-design`), Python 3 ve Playwright (`webapp-testing`), ffmpeg (`scroll-craft` videoları).

## 📚 Tüm skill'ler

Tam liste: [`skills/webdep/references/catalog.md`](skills/webdep/references/catalog.md) · Stil seçici: [`style-router.md`](skills/webdep/references/style-router.md) · Teknoloji tarifleri: [`build-recipes.md`](skills/webdep/references/build-recipes.md)

| Grup | Skill'ler |
|---|---|
| 🎯 Yönetmen | `webdep` |
| 🎨 Tasarım yönü | `frontend-design`, `impeccable`, `design-genres/*` (24), `taste-suite/*`, `claude-design`, `ui-ux-pro-max/*`, `design-systems`, `theme-factory`, `learn-taste`, `apple-design` |
| 🧬 Tasarım dili çıkarma | `extract-design`, `site-dna-extractor`, `design-md`, `replica-recon` |
| 🧱 Kurulum ve bileşenler | `shadcn`, `web-artifacts-builder`, `react-best-practices`, `composition-patterns`, `pick-ui-library`, `prototype`, `saas-blocks`, `craft-interactions`, `tactile-hardware-ui`, `21st-dev`, `motion-primitives`, `fancy-components`, `kokonut-ui`, `watermelon-ui`, `haikei-svg` |
| 🎬 Hareket | `animate`, `choreograph`, `gestures`, `emil-design-eng`, `motion-principles`, `animation`, `react-view-transitions`, `scroll-craft`, `sitereel-vibe`, `motionsites-engine`, `creative-engine`, `3d-webgl`, `animation-vocabulary` |
| ✅ Kalite | `webapp-testing`, `web-design-guidelines`, `web-quality-audit`, `accessibility`, `seo`, `performance`, `core-web-vitals`, `best-practices`, `review-animations`, `improve-animations`, `animation-performance`, `find-animation-opportunities`, `break-ui` |
| 🚢 Yayın ve ürün | `deploy-to-vercel`, `replica-*` (mimari, backend, test, marka, lansman, deploy) |

## 🙏 Teşekkürler

WebDep, açık kaynak topluluğunun en iyi işlerini tek bir akışta birleştirir: Anthropic, Paul Bakaus (Impeccable), Vercel, Emil Kowalski, Addy Osmani, shadcn, Nate Herk, Manav Arya Singh, Jake Schincariol ve diğerleri. Kaynaklar ve lisanslar [THIRD_PARTY.md](THIRD_PARTY.md) dosyasında.

## Lisans

`webdep` yönetmen skill'i ve dokümantasyon: MIT © 2026 mrthnn77-collab. Diğer skill'ler kendi lisanslarıyla gelir; bkz. [THIRD_PARTY.md](THIRD_PARTY.md).
