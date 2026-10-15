# Antigravity Skill Installer
$targetDir = "$env:USERPROFILE\.gemini\antigravity\skills"
New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$libraryRoot = Split-Path -Parent $scriptRoot

Write-Host ">>> Antigravity skilleri senkronize ediliyor..." -ForegroundColor Cyan

# 1. Claude Design & Remixes
Copy-Item -Recurse -Force "$libraryRoot\skills\claude-design" "$targetDir\claude-design"
Write-Host "  + [claude-design] aesthetic families & remixes" -ForegroundColor Yellow

# 2. Design Systems
Copy-Item -Recurse -Force "$libraryRoot\skills\design-systems" "$targetDir\professional-web-design"

# 3. Creative Engine (Genjutsu)
Copy-Item -Recurse -Force "$libraryRoot\skills\creative-engine" "$targetDir\genjutsu"

# 4. 3D WebGL
Copy-Item -Recurse -Force "$libraryRoot\skills\3d-webgl" "$targetDir\webgpu-threejs-tsl"

# 5. Taste Suite (Leonxlnx)
$tasteDir = "$libraryRoot\skills\taste-suite"
if (Test-Path $tasteDir) {
    Get-ChildItem -Path $tasteDir -Directory | ForEach-Object {
        $skillName = $_.Name
        Copy-Item -Recurse -Force $_.FullName "$targetDir\$skillName"
        Write-Host "  + [taste-suite] $skillName" -ForegroundColor Gray
    }
}

# 6. Design Genres & Craft (madebymustafa)
$genreDir = "$libraryRoot\skills\design-genres"
if (Test-Path $genreDir) {
    Get-ChildItem -Path $genreDir -Directory | ForEach-Object {
        $skillName = $_.Name
        Copy-Item -Recurse -Force $_.FullName "$targetDir\$skillName"
        Write-Host "  + [design-genre] $skillName" -ForegroundColor DarkCyan
    }
}

# 7. UI/UX Pro Max Suite (nextlevelbuilder)
$promaxDir = "$libraryRoot\skills\ui-ux-pro-max"
if (Test-Path $promaxDir) {
    Get-ChildItem -Path $promaxDir -Directory | ForEach-Object {
        $skillName = $_.Name
        Copy-Item -Recurse -Force $_.FullName "$targetDir\$skillName"
        Write-Host "  + [ui-ux-pro-max] $skillName" -ForegroundColor Magenta
    }
}

Write-Host ">>> Tüm skiller Antigravity'e başarıyla yüklendi!" -ForegroundColor Green
