# Antigravity Skill Installer
$targetDir = "$env:USERPROFILE\.gemini\antigravity\skills"
New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$libraryRoot = Split-Path -Parent $scriptRoot

Write-Host ">>> Antigravity skilleri senkronize ediliyor..." -ForegroundColor Cyan

Copy-Item -Recurse -Force "$libraryRoot\skills\design-systems" "$targetDir\professional-web-design"
Copy-Item -Recurse -Force "$libraryRoot\skills\creative-engine" "$targetDir\genjutsu"
Copy-Item -Recurse -Force "$libraryRoot\skills\3d-webgl" "$targetDir\webgpu-threejs-tsl"

Write-Host ">>> Tum skiller Antigravity'e basariyla yuklendi!" -ForegroundColor Green
