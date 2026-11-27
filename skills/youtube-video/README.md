# 🎬 YouTube Video Kiti

> Kanal için 5 skill: fotoğrafı canlandır, 39 çizim stilinde animasyon yap, tasarım düzeltmelerini kırmızı kalemle anlat, 3D sahne kur, çizilmiş karakterleri hareket ettir. Hepsi kodla, kamera ve stok görüntü gerektirmeden.

Bu klasördeki skill'ler açık kaynak projelerin `murathan-skills` içine eklenmiş kopyalarıdır. Her klasörde orijinal `LICENSE` ve İngilizce `README.md` olduğu gibi duruyor. Kaynaklar ve lisanslar aşağıdaki tabloda.

## 5 skill

| # | Skill | Ne yapar | Kanalda nerede kullanırız |
|---|---|---|---|
| 1 | **lemo-wake** | Durağan bir görseli canlandırır: GIF, WebP, hareketli poster, cinemagraph. | Piksel avatarı ve kapak görsellerini hareketli intro ve Shorts'a çevirmek |
| 2 | **animation-styles** | Remotion ile kodla çizilmiş **39 animasyon stili** (pixel art, chalkboard, newsreel, ukiyo-e, claymation…). Her stilde 5 saniyelik hazır örnek video var. | Haber videolarının ara geçişleri, konu anlatımları, "AI ile yaptım" serisi |
| 3 | **ui-redline-walkthrough** | Önce/sonra ekran görüntülerinden kırmızı kalem notlu, morph geçişli **tasarım düzeltme videosu** (HTML ve MP4). | "Claude ile site yaptım" uzun videolarında önce/sonra anlatımı |
| 4 | **open-3d-skills** | 8 skill: three.js sahneleri, scroll filmleri, şeffaf video, imleci takip eden karakter, patlatılmış ürün görünümü, kare kare kayıt. | 3D sahne ve ürün tanıtımları, kanal intro'ları |
| 5 | **rossark-motion-skill** | Çizilmiş karakter, grafik ve sahnelere sakin ve inandırıcı hareket verir. | Piksel avatarı konuşturmak ve hareket ettirmek, grafik animasyonları |

## Kanal için önerilen akış

1. Fotoğraftan **piksel avatar** üret.
2. `lemo-wake` ve `rossark-motion-skill` ile avatarı canlandır. Kanalın sabit sunucusu bu olur.
3. Haber ve konu videolarında `animation-styles` ile bir **imza stil** seç ve hep onu kullan.
4. Site ve tasarım videolarında `ui-redline-walkthrough` ile önce/sonra anlatımı yap.
5. Intro ve ürün sahneleri için `open-3d-skills`.

## Kurulum (Windows)

```powershell
$src = "$HOME\murathan-skills\skills\youtube-video"
Copy-Item -Recurse "$src\animation-styles", "$src\ui-redline-walkthrough", "$src\rossark-motion-skill" "$HOME\.claude\skills\"
Copy-Item -Recurse "$src\lemo-wake\skills\*", "$src\open-3d-skills\skills\*" "$HOME\.claude\skills\"
```

Notlar:
- `animation-styles` Node.js ister. Klasörde `npm install`, ardından `npm run list` çalıştır. 39 stil listelenmeli.
- `lemo-wake` ilk çalışmada modellerini Hugging Face'ten indirir ve sha256 ile doğrular. Ayrıca Python ve ffmpeg ister.
- MP4 çıktısı veren skill'ler ffmpeg ister.

## ⚠️ Lisans uyarısı: lemo-wake

**lemo-wake'in lisansı CC BY-NC 4.0, yani ticari olmayan kullanım içindir.** Para kazanan (monetize) bir YouTube kanalında kullanmak ticari kullanım sayılabilir. Kanal para kazanmaya başlamadan önce yazarından (Lemomo) izin al ya da avatar animasyonunda MIT lisanslı `rossark-motion-skill`'i kullan. Diğer dört skill MIT lisanslıdır ve ticari kullanıma açıktır.

## Kaynaklar ve lisanslar

| Skill | Orijinal repo | Lisans |
|---|---|---|
| lemo-wake | [lemomo-ai/lemo-wake](https://github.com/lemomo-ai/lemo-wake) | CC BY-NC 4.0 © 2026 Lemomo |
| animation-styles | [deenukhan/animation-styles](https://github.com/deenukhan/animation-styles) | MIT © 2026 Deenu Khan |
| ui-redline-walkthrough | [rjmahesh/ui-redline-walkthrough](https://github.com/rjmahesh/ui-redline-walkthrough) | MIT © 2026 rjmahesh |
| open-3d-skills | [Moh4696/open-3d-skills](https://github.com/Moh4696/open-3d-skills) | MIT © 2026 exploraX |
| rossark-motion-skill | [rossark0/rossark-motion-skill](https://github.com/rossark0/rossark-motion-skill) | MIT © 2026 rossark0 |
