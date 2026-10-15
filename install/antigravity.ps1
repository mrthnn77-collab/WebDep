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

Write-Host ">>> Tüm skiller Antigravity'e başarıyla yüklendi!" -ForegroundColor Green
