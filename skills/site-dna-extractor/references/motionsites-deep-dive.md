# 🕵️ MotionSites.ai (Anchor AI & 3D Engine) — Deep Dive & Reverse-Engineering

Bu analiz, `https://motionsites.ai/?prompt=anchor-ai` adresi ve MotionSites.ai'nin kurucusu **Viktor Odainyi (`@vikod3`)** tarafından geliştirilen mimarinin **tam tersine mühendislik (reverse-engineering)** dökümüdür.

---

## 🎯 1. Anchor AI'ın Tam Formülü ve Anatomisi

Ekran görüntüsündeki **Anchor AI (Portfolio)** tasarımı iki temel eksende inşa edilmiştir:

### A. Görsel & Tipografik Katman
* **Zemin:** `#0c0d0e` ile `#000208` arası sonsuz derin kozmik siyah.
* **Ağaç & Enerji Sütunu:** 
  * 30.000+ parçacıklı luminescent parçacık hacmi (`THREE.AdditiveBlending`, `THREE.PointsMaterial`).
  * Renk geçişi: Tabanda derin lacivert `#1d3557` → Gövdede canlı elektrik mavi `#0077b6` → Taç kısmında camgöbeği `#00d2ff` ve beyaz ışıltı parçacıkları `#ffffff`.
  * Dalgalanma Fiziği: `y` eksenine bağlı sinüzoidal nefes alma dalgası:
    $$\Delta x = x \cdot \sin(2.5t + 3.0y) \cdot 0.04$$
* **Konsantrik Sıvı Dalgalar (Floor Ripples):**
  * Siyah ayna zemin üzerinde merkezden dışa doğru genişleyip sönen 6 adet çember (`THREE.RingGeometry`), dalga fazı $\phi \in [0, 1]$ ile genişleyerek opaklığı $0.45 \cdot \sin(\pi \phi)$ şeklinde söner.

---

## 🚀 2. MotionSites'ın Gizli 3D Kaynak Mimarisi (Viktor Odainyi / `@vikod3`)

MotionSites.ai'nin 3D web sitelerinin arkasındaki açık kaynaklı motoru keşfettik (`github.com/vikod3`):

1. **`munforge-golden-apple`:** Ekran görüntüsünde Anchor AI'ın hemen sağında duran *"Golden..."* projesinin asıl kaynak kodudur:
   * **Three.js Scroll-Driven Yolculuk:** 
     * `0.0 - 2.1 vh`: Kullanıcı scroll ettikçe 3D el modele doğru yaklaşır ve kamera %28 zoom yapar.
     * `2.1 - 2.98 vh`: Model merkezden dışarı giden bir **"Center-out noise burn"** shader'ı ile çözülür.
     * `3.30 vh`: 3 adet tez kartı 0.10 ekran aralığıyla (stagger) perspektif dönüşüyle sahneye fırlar.
2. **`verdant-meadow`:** Üç boyutlu çim vadisi ve buzlu cam (frosted glass) logo geçişi.
3. **`Planetary-Pulsewebgpu`:** WebGPU tabanlı gezegen nabzı parçacık simülasyonu.

---

## 🎨 3. MotionSites AI'ın Kullandığı Özel Tipografi Eşleşmeleri
* **Serif & Başlık:** `Jeju Myeongjo` + `Monsieur La Doulaise` (el yazısı italik vurgular) + `Lora Medium`
* **Modern Display:** `Syne` (Bold 800) + `Plus Jakarta Sans`
* **Mono Detaylar:** `JetBrains Mono`

---

## 📋 4. Bu Tarz Siteleri Klonlamak İçin Prompt Şablonu

Kütüphanemizin oluşturduğu hazır prompt formülü:

```markdown
Create an interactive 3D WebGL hero section using Three.js:
1. Deep space background (#0c0d0e) with ambient fog.
2. Centerpiece: A luminescent 3D particle tree (30,000+ points) in electric cyan (#00d2ff) 
   and deep ocean blue with additive blending, breathing with harmonic sine waves.
3. Liquid floor ripples: 6 concentric rings expanding outward on a dark reflective plane.
4. Smooth mouse orbit controls with damping and inertial spring settling.
5. High-contrast typography: Ultra-bold display font with negative letter-spacing (-0.035em),
   accompanied by pill category chips (Ai, Fintech, Technology) with 1px iridescent borders.
```
