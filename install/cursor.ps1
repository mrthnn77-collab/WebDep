# Cursor Rules Generator
param([string]$targetProject = ".")

$cursorFile = Join-Path $targetProject ".cursorrules"

$rules = @"
# UNIVERSAL SKILL LIBRARY - DESIGN & ANIMATION ENGINE
- NEVER generate generic AI-looking designs (no default #3b82f6 blue, no flat blurry drop-shadows, no unstyled 400-weight headings).
- 60 FPS performance rule: Animate ONLY GPU properties (transform, opacity).
- Typography: Use negative letter-spacing on display headlines (-0.02em to -0.04em), high contrast hierarchy.
- Elevations: Multi-layered micro-shadows with 1px inset hairline borders.
- Brands: Reference exact tokens from 80+ brands (Stripe, Apple, Vercel, Linear, Supabase).
- Motion: Leverage GSAP scroll triggers, magnetic buttons, liquid surfaces, and Three.js / WebGL.
"@

Set-Content -Path $cursorFile -Value $rules -Encoding UTF8
Write-Host ">>> .cursorrules dosyasi olusturuldu: $cursorFile" -ForegroundColor Green
