# 🌐 WebDep

**Tek komutla site yapan yapay zekâ ekibi.** Ne istediğinizi birkaç seçenekli soruyla öğrenir, tasarım yönünü belirler, siteyi kurar, animasyonları ekler, cilalar, gerçek tarayıcıda test eder, kalite denetiminden geçirir ve yayına almanıza yardım eder.

Claude Code için yapıldı; Cursor, Codex ve Antigravity ile de çalışır. **120+ skill**, tek yönetmen: `/webdep`.

[🇬🇧 English below](#-english)

---

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
| 3. Kurulum | Tek HTML, React veya Next.js + Tailwind + shadcn/ui | `frontend-design`, `impeccable`, `web-artifacts-builder`, `shadcn`, `react-best-practices`, `21st-dev`, `skiper-ui`, `motion-primitives`… |
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
| 🧱 Kurulum ve bileşenler | `shadcn`, `web-artifacts-builder`, `react-best-practices`, `composition-patterns`, `pick-ui-library`, `prototype`, `21st-dev`, `skiper-ui`, `motion-primitives`, `fancy-components`, `kokonut-ui`, `analog-ui`, `watermelon-ui`, `style-ui`, `haikei-svg` |
| 🎬 Hareket | `animate`, `choreograph`, `gestures`, `emil-design-eng`, `motion-principles`, `animation`, `react-view-transitions`, `scroll-craft`, `sitereel-vibe`, `motionsites-engine`, `creative-engine`, `3d-webgl`, `animation-vocabulary` |
| ✅ Kalite | `webapp-testing`, `web-design-guidelines`, `web-quality-audit`, `accessibility`, `seo`, `performance`, `core-web-vitals`, `best-practices`, `review-animations`, `improve-animations`, `animation-performance`, `find-animation-opportunities`, `break-ui` |
| 🚢 Yayın ve ürün | `deploy-to-vercel`, `replica-*` (mimari, backend, test, marka, lansman, deploy) |

## 🙏 Teşekkürler

WebDep, açık kaynak topluluğunun en iyi işlerini tek bir akışta birleştirir: Anthropic, Paul Bakaus (Impeccable), Vercel, Emil Kowalski, Addy Osmani, shadcn, Nate Herk, Manav Arya Singh, Jake Schincariol ve diğerleri. Kaynaklar ve lisanslar [THIRD_PARTY.md](THIRD_PARTY.md) dosyasında.

## Lisans

`webdep` yönetmen skill'i ve dokümantasyon: MIT © 2026 mrthnn77-collab. Diğer skill'ler kendi lisanslarıyla gelir; bkz. [THIRD_PARTY.md](THIRD_PARTY.md).

---

## 🇬🇧 English

**WebDep is a one-command website builder for AI coding agents.** Run `/webdep` (or just say *"build me a landing page for my café"*). It asks a few multiple-choice questions, writes `SITE-BRIEF.md` and `DESIGN.md`, picks a committed design direction from 10 genre packs and 60+ searchable styles, builds the site (single HTML, React, Next.js + Tailwind + shadcn/ui, or Astro), adds motion (calm → scroll film → 3D), polishes it with Impeccable, tests it with Playwright at three widths, audits accessibility, SEO and performance, and helps you deploy.

Modes: **Quick site** · **Guided build** · **Redesign** an existing site · **Inspired by** a site you like (clean-room: learns structure and feel, never copies code, copy, logos or images).

```
/plugin marketplace add mrthnn77-collab/WebDep
/plugin install webdep@webdep
```

Or copy `skills/*` into `~/.claude/skills/`. Credits and licenses: [THIRD_PARTY.md](THIRD_PARTY.md).
