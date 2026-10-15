# Antigravity Skill Installer
$targetDir = "$env:USERPROFILE\.gemini\antigravity\skills"
New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$libraryRoot = Split-Path -Parent $scriptRoot

Write-Host ">>> Antigravity skilleri senkronize ediliyor..." -ForegroundColor Cyan

# 1. Design Systems
Copy-Item -Recurse -Force "$libraryRoot\skills\design-systems" "$targetDir\professional-web-design"

# 2. Creative Engine (Genjutsu)
Copy-Item -Recurse -Force "$libraryRoot\skills\creative-engine" "$targetDir\genjutsu"

# 3. 3D WebGL
Copy-Item -Recurse -Force "$libraryRoot\skills\3d-webgl" "$targetDir\webgpu-threejs-tsl"

# 4. Taste Suite (Her bir taste skill bağımsız olarak Antigravity'e eklenir)
$tasteDir = "$libraryRoot\skills\taste-suite"
if (Test-Path $tasteDir) {
    Get-ChildItem -Path $tasteDir -Directory | ForEach-Object {
        $skillName = $_.Name
        Copy-Item -Recurse -Force $_.FullName "$targetDir\$skillName"
        Write-Host "  + Yüklendi: $skillName" -ForegroundColor Gray
    }
}

Write-Host ">>> Tüm skiller Antigravity'e başarıyla yüklendi!" -ForegroundColor Green
