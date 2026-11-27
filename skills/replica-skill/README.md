# 🧬 Replica Skill — Uygulama Klonlama Hattı

> İstediğin bir uygulamanın **ne yaptığını** çöz, kendi markanla yeniden kur, test et, eksiklerini düzelt ve yayına al. 11 skill, baştan sona tek hat.

Bu klasör, **Jake Schincariol**'ın açık kaynak [Replica Skill](https://github.com/Jakeschincariol/replica-skill) paketinin `murathan-skills` içine eklenmiş kopyasıdır. Orijinal MIT lisansıyla dağıtılır; lisans metni `LICENSE` dosyasındadır, orijinal İngilizce açıklama `README.original.md` içindedir.

## Kural: Ne yaptığını kopyala, neye sahip olduğunu değil

Replica bir uygulamanın **özelliklerini ve akışlarını** "temiz oda" yöntemiyle yeniden kurar. Orijinalin **kodunu, logosunu, metinlerini ve içeriğini kopyalamaz** — skill'ler bu kuralı kendileri uygular. Klonun kendi adı, kendi markası ve kendi görselleri olur.

## 11 skill

| Komut | Ne yapar |
|---|---|
| `/replica-recon` | Uygulamayı çözer: ekranlar, akışlar, bileşenler, veri modeli. Herkese açık sayfalardan, ekran görüntülerinden ve mağaza sayfalarından. |
| `/replica-architect` | Klon için teknoloji yığınını, veritabanı şemasını ve API'yi planlar. |
| `/replica-design` | Tasarım sistemini (renk, yazı tipi, boşluk, bileşenler) senin varlıklarınla token olarak yeniden kurar. |
| `/replica-build` | Recon haritasından ekran ekran uygulamayı inşa eder. |
| `/replica-backend` | Giriş, veritabanı, ödeme ve entegrasyonlar. |
| `/replica-test` | Hata avı ve uçtan uca test planı. |
| `/replica-diff` | Klonu orijinalle karşılaştırıp puanlar (görsel ve özellik eşleşmesi). |
| `/replica-brand` | Klona kendi adını ve markasını verir, orijinalden kalan izleri tarar. |
| `/replica-entrepreneur` | Orijinalin kullanıcılarının şikâyet ettiği şeyleri bulur ve senin sürümünde düzeltir — satılabilir fark burada. |
| `/replica-launch` | Açılış sayfası ve App Store / Google Play mağaza metinleri. |
| `/replica-deploy` | Kendi alan adında yayına alma ve yayın öncesi kontrol listesi. |

## Kurulum

Tüm repo kuruluysa ek bir şey gerekmez. Sadece bu paketi Claude Code'a eklemek için:

```powershell
# Windows
Copy-Item -Recurse murathan-skills\skills\replica-skill\replica-* $HOME\.claude\skills\
```

```bash
# macOS / Linux
cp -r murathan-skills/skills/replica-skill/replica-* ~/.claude/skills/
```

Python araçları için Python 3.8+ yeterli, ek paket kurmaya gerek yok. Claude Code yoksa herhangi bir `SKILL.md` dosyasını sohbetin başına yapıştırıp mod olarak kullanabilirsin.

## Önerilen sıra

`recon → architect → design → build → backend → test → diff → brand → entrepreneur → launch → deploy`

## Kaynak ve lisans

- Orijinal: [github.com/Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill)
- Lisans: MIT © 2026 Jake Schincariol — bkz. `LICENSE`
