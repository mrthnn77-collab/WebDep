# Antigravity Skill Installer
$targetDir = "$env:USERPROFILE\.gemini\antigravity\skills"
New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$libraryRoot = Split-Path -Parent $scriptRoot

Write-Host ">>> Antigravity skilleri senkronize ediliyor..." -ForegroundColor Cyan

# 1. Site DNA Extractor
Copy-Item -Recurse -Force "$libraryRoot\skills\site-dna-extractor" "$targetDir\site-dna-extractor"
Write-Host "  + [site-dna-extractor] Reverse-engineering & motion extractor" -ForegroundColor Red

# 2. DESIGN.md Contract Architect
Copy-Item -Recurse -Force "$libraryRoot\skills\design-md" "$targetDir\design-md"
Write-Host "  + [design-md] DESIGN.md & CLAUDE.md contract architect" -ForegroundColor White

# 3. Design Motion Principles (Emil Kowalski, Jakub Krehel, Jhey Tompkins)
Copy-Item -Recurse -Force "$libraryRoot\skills\motion-principles" "$targetDir\design-motion-principles"
Write-Host "  + [motion-principles] Emil Kowalski, Krehel, Jhey" -ForegroundColor Green

# 4. Claude Design & Remixes
Copy-Item -Recurse -Force "$libraryRoot\skills\claude-design" "$targetDir\claude-design"
Write-Host "  + [claude-design] aesthetic families & remixes" -ForegroundColor Yellow

# 5. Design Systems
Copy-Item -Recurse -Force "$libraryRoot\skills\design-systems" "$targetDir\professional-web-design"

# 6. Creative Engine (Genjutsu)
Copy-Item -Recurse -Force "$libraryRoot\skills\creative-engine" "$targetDir\genjutsu"

# 7. 3D WebGL
Copy-Item -Recurse -Force "$libraryRoot\skills\3d-webgl" "$targetDir\webgpu-threejs-tsl"

# 8. Taste Suite (Leonxlnx)
$tasteDir = "$libraryRoot\skills\taste-suite"
if (Test-Path $tasteDir) {
    Get-ChildItem -Path $tasteDir -Directory | ForEach-Object {
        $skillName = $_.Name
        Copy-Item -Recurse -Force $_.FullName "$targetDir\$skillName"
        Write-Host "  + [taste-suite] $skillName" -ForegroundColor Gray
    }
}

# 9. Design Genres & Craft (madebymustafa)
$genreDir = "$libraryRoot\skills\design-genres"
if (Test-Path $genreDir) {
    Get-ChildItem -Path $genreDir -Directory | ForEach-Object {
        $skillName = $_.Name
        Copy-Item -Recurse -Force $_.FullName "$targetDir\$skillName"
        Write-Host "  + [design-genre] $skillName" -ForegroundColor DarkCyan
    }
}

# 10. UI/UX Pro Max Suite (nextlevelbuilder)
$promaxDir = "$libraryRoot\skills\ui-ux-pro-max"
if (Test-Path $promaxDir) {
    Get-ChildItem -Path $promaxDir -Directory | ForEach-Object {
        $skillName = $_.Name
        Copy-Item -Recurse -Force $_.FullName "$targetDir\$skillName"
        Write-Host "  + [ui-ux-pro-max] $skillName" -ForegroundColor Magenta
    }
}

# 11. Skiper UI Un-common Components
Copy-Item -Recurse -Force "$libraryRoot\skills\skiper-ui" "$targetDir\skiper-ui"
Write-Host "  + [skiper-ui] Un-common components (carousels, smooth caret, progressive blur, squircle)" -ForegroundColor Cyan

# 12. Watermelon UI Full-Stack Platform Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\watermelon-ui" "$targetDir\watermelon-ui"
Write-Host "  + [watermelon-ui] Full-stack suite (29 dashboards, audio waveforms, Web3, MCP)" -ForegroundColor Red

# 13. StyleUI Handmade Templates Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\style-ui" "$targetDir\style-ui"
Write-Host "  + [style-ui] Handmade templates (React 19, Next 16, Tailwind v4, Base UI)" -ForegroundColor Yellow

# 14. Analog UI Studio Hyper-Skeuomorphism Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\analog-ui" "$targetDir\analog-ui"
Write-Host "  + [analog-ui] Studio Hyper-Skeuomorphic hardware controls (dials, faders, meters, lighting engine)" -ForegroundColor Green

# 15. Kokonut UI Tactile Hardware Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\kokonut-ui" "$targetDir\kokonut-ui"
Write-Host "  + [kokonut-ui] Tactile hardware (pull-cords, switch buttons, detent dials, tear tickets, hold latches)" -ForegroundColor Cyan

# 16. Fancy Components Physics & Kinetic Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\fancy-components" "$targetDir\fancy-components"
Write-Host "  + [fancy-components] Physics & kinetic mechanics (gravity, attractors, elastic lines, number ticker)" -ForegroundColor Magenta

# 17. Motion Primitives Layout Morphing & Gestures Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\motion-primitives" "$targetDir\motion-primitives"
Write-Host "  + [motion-primitives] Motion Primitives (33 components, morphing-dialog, dock, sliding-number)" -ForegroundColor Yellow

# 18. Manus Autonomous Agent Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\manus-agent" "$targetDir\manus-agent"
Write-Host "  + [manus-agent] Manus Autonomous Agent Suite (9 agency roles, execution loops, telemetry UI)" -ForegroundColor Cyan

# 19. Haikei Procedural SVG & Organic Wave Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\haikei-svg" "$targetDir\haikei-svg"
Write-Host "  + [haikei-svg] Haikei Procedural SVG Suite (organic blobs, layered waves, grain filters)" -ForegroundColor Green

# 20. SiteReel Vibe Coding Engine
Copy-Item -Recurse -Force "$libraryRoot\skills\sitereel-vibe" "$targetDir\sitereel-vibe"
Write-Host "  + [sitereel-vibe] SiteReel Vibe Coding Engine (5-layer aesthetic prompt contracts)" -ForegroundColor Yellow

# 21. 21st.dev Design Engineer Suite
Copy-Item -Recurse -Force "$libraryRoot\skills\21st-dev" "$targetDir\21st-dev"
Write-Host "  + [21st-dev] 21st.dev Design Engineer Suite (10,000+ components, CLI, MCP Server)" -ForegroundColor DarkCyan

Write-Host ">>> Tüm skiller Antigravity'e başarıyla yüklendi!" -ForegroundColor Green
