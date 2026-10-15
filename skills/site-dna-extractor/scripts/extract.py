import sys
import re
import urllib.request
import json

def extract_dna(url):
    print(f"[DNA EXTRACTOR] Fetching {url}...")
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            html = response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching URL: {e}")
        return

    # Extract Fonts
    fonts = list(set(re.findall(r'family=([A-Za-z0-9+]+)', html)))
    clean_fonts = [f.replace('+', ' ') for f in fonts]

    # Extract Colors (Hex & RGB/RGBA)
    hex_colors = list(set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', html)))
    rgb_colors = list(set(re.findall(r'rgba?\([0-9\s,.]+\)', html)))

    # Extract Gradients
    gradients = list(set(re.findall(r'(?:radial-gradient|linear-gradient)\([^)]+\)', html)))

    # Extract Title & Meta Description
    title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
    title = title_match.group(1) if title_match else "Unknown"

    report = {
        "title": title,
        "fonts_detected": clean_fonts,
        "primary_colors": hex_colors[:12],
        "rgb_tokens": rgb_colors[:8],
        "gradients": gradients[:5]
    }

    print(json.dumps(report, indent=2))
    return report

if __name__ == '__main__':
    target = sys.argv[1] if len(sys.argv) > 1 else "https://motionsites.ai"
    extract_dna(target)
