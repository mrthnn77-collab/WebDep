# 🧠 murathan-skills

> Universal skill library for web design, animation, 3D & generative art.  
> Works with **Antigravity**, **Cursor**, and **OpenAI Codex**.

## 📦 Skills

| Skill | Description |
|-------|-------------|
| [`design-systems`](./skills/design-systems/) | Brand tokens from 80+ world-class brands (Stripe, Apple, Vercel…) |
| [`animation`](./skills/animation/) | GSAP, Framer Motion, CSS Native — 60fps recipes |
| [`3d-webgl`](./skills/3d-webgl/) | Three.js, R3F, WebGPU/TSL, custom shaders |
| [`generative-art`](./skills/generative-art/) | Canvas, particle systems, fluid simulations |

## 🚀 Install

```powershell
# Clone
git clone https://github.com/mrthnn77-collab/murathan-skills.git $HOME\murathan-skills

# Install to Antigravity
.\install\antigravity.ps1

# Install to Cursor
.\install\cursor.ps1
```

## 🔄 Update

```powershell
cd $HOME\murathan-skills
git pull
.\install\antigravity.ps1
```

## 📁 Structure

```
murathan-skills/
├── skills/
│   ├── design-systems/     # Brand tokens, color, typography
│   ├── animation/          # GSAP, Framer, CSS recipes
│   ├── 3d-webgl/           # Three.js, R3F, WebGPU
│   └── generative-art/     # Canvas, particles, fluid
├── install/
│   ├── antigravity.ps1     # Install to Antigravity
│   └── cursor.ps1          # Install to Cursor
└── examples/
    └── pasamandira/        # Example site built with this library
```
