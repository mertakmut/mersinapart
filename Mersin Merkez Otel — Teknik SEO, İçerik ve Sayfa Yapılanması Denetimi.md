# Mersin Merkez Otel — Teknik SEO, İçerik ve Sayfa Yapılanması Denetimi

**İncelenen site:** https://www.mersinmerkezotel.com/  
**Denetim tarihi:** 13 Ekim 2026  
**Kapsam:** Canlı HTML/HTTP yanıtları, sitemap, robots.txt, sayfa başlıkları, meta açıklamalar, H1/H2 hiyerarşisi, canonical, Open Graph/Twitter etiketleri, JSON-LD, görseller, URL standardizasyonu, yerel SEO, içerik kalitesi ve dönüşüm akışı.

> Bu dosya, bir yapay zekâya doğrudan verilerek siteyi düzeltme planı ve uygulama çıktısı üretmesi için hazırlanmıştır. Search Console, Analytics, Google Business Profile, gerçek rezervasyon verileri ve sunucu erişimi olmadığı için trafik, sıralama, Core Web Vitals ve dönüşüm oranı hakkında kesin sonuç iddia edilmemiştir.

## 1. En önemli sonuçlar

Sitenin güçlü tarafı, içeriklerin büyük bölümünün sunucu tarafından oluşturulmuş HTML içinde erişilebilir olmasıdır. Ana sayfa ve oda sayfalarında tek bir H1 bulunuyor, canonical etiketleri mevcut, sitemap ve robots.txt erişilebilir, görsellerde alt metinler kullanılmış ve HTTPS çalışıyor.

Buna rağmen mevcut yapı, arama motoruna ve kullanıcıya aynı işletme hakkında birden fazla ve kısmen çelişkili mesaj veriyor. Öncelik sırasıyla şu işler yapılmalıdır:

1. **Gerçek hizmet envanterini kesinleştirin.** Site kendisini apart otel, günlük kiralık daire, pansiyon, ucuz otel ve günlük otel olarak aynı anda konumlandırıyor. Gerçekte verilmeyen “mutfaklı”, “jakuzili”, “anında onay”, “rezervasyonu garanti altına alma” gibi ifadeler kaldırılmalı veya kanıtlanabilir şekilde düzeltilmelidir.
2. **2024 fiyat başlıklarını ve metinlerini kaldırın.** `/fiyatlar/` sayfasının H1 ve title’ı hâlâ “2024” içeriyor. Denetim tarihi 2026 olduğu için bu ifade güven ve güncellik problemi yaratır.
3. **Benzer hedef sayfalarını birleştirin veya noindex/301 uygulayın.** `/mersin-merkez-otelleri/`, `/mersin-merkez-apart-otel/`, `/mersin-merkez-pansiyon/`, `/mersin-merkez-ucuz-otel/`, `/mersin-merkez-gunluk-otel/` ve `/mersin-merkeze-yakin-oteller/` sayfaları 200–311 kelime civarında, benzer şablon ve aynı CTA ile yayınlanıyor. Her biri gerçekten ayrı arama niyetini karşılayacak özgün içerik taşımıyorsa bu yapı anahtar kelime yamyamlığı ve doorway-page riski oluşturur.
4. **Her indexlenebilir sayfaya eksiksiz paylaşım metası ekleyin.** Oda ve kurumsal sayfalarda `og:image`, çoğu sayfada `og:url` ve Twitter başlık/açıklama/görsel etiketleri eksik. Google’ın önerdiği başlık ve snippet yaklaşımı sayfa bazında özgün, açık ve gerçek içerikle uyumlu olmalıdır [1] [2].
5. **Yapısal veriyi sayfa tipine göre genişletin.** Ana sayfada Hotel JSON-LD var; oda detayları, iletişim/konum ve SSS sayfasında uygun, görünür içerikle uyumlu JSON-LD yok. Yapısal veri görünür içerikte bulunmayan bilgiyi eklemek için kullanılmamalıdır [3].
6. **URL’leri tek biçime getirin.** `/index.html` ana sayfa ile aynı içeriği 200 döndürüyor. `/odalar` ve `/odalar/` gibi varyantlar da aynı içeriği 200 döndürüyor. Canonical tek başına yeterli değildir; mümkün olan yerlerde 301 ile slash’lı kanonik URL’ye yönlendirme yapılmalıdır.
7. **Google Business Profile ve yerel güven sinyallerini güçlendirin.** Adres, telefon, işletme adı, çalışma/giriş bilgileri, gerçek fotoğraflar, yorumlar, lisans/izin bilgileri ve harita bağlantısı tüm kanallarda birebir tutarlı olmalıdır.

## 2. Canlı teknik bulgular

### 2.1 HTTP, tarama ve indeksleme

- Ana sayfa `200 OK` döndürüyor.
- Bilinmeyen URL `/bulunmayan-sayfa/` `404` döndürüyor. Bu olumlu bir bulgudur; soft-404 görünümü tespit edilmedi.
- `https://mersinmerkezotel.com/` ve HTTP sürümleri `https://www.mersinmerkezotel.com/` adresine `308` ile yönleniyor.
- `/index.html` 200 ile ana sayfanın aynı içeriğini sunuyor. Bu URL’nin 301 ile `/` adresine yönlenmesi gerekir.
- `/odalar` ve `/odalar/` aynı içeriği 200 ile sunuyor; `/fiyatlar` ve `/fiyatlar/` için de aynı durum görüldü. Sunucu kuralı tek bir URL biçimi seçmelidir.
- `robots.txt` tüm taramaya izin veriyor ve sitemap’i doğru bildiriyor. GPTBot, ChatGPT-User, Google-Extended, Claude-Web ve PerplexityBot için açık izin verilmiş. Bu bilinçli bir tercihtir; içeriklerin yapay zekâ tarayıcıları tarafından okunması istenmiyorsa ayrıca iş politikası belirlenmelidir.
- Sitemap 19 URL içeriyor. Sitemap’teki URL’lerin tamamı 200 döndürüyor; ancak hepsinin indekslenebilir olması gerektiği henüz kanıtlanmış değildir.
- Sitemap’te `priority` ve `changefreq` değerleri var. Bunlar Google için sıralama garantisi değildir. Gerçek, kanonik ve indekslenmesi istenen URL’ler dışında hiçbir sayfa sitemap’te tutulmamalıdır.

### 2.2 Ana sayfa HTML ve head durumu

Ana sayfanın ham HTML’si içerik taşıyor; bu nedenle yalnızca boş bir JavaScript kabuğu problemi görünmüyor. Ana sayfada:

- `title`: 52 karakter, mevcut ve anlaşılır.
- `meta description`: 142 karakter, mevcut ve konuya uygun.
- `meta keywords`: mevcut. Bu etiket Google sıralamasına anlamlı katkı sağlamaz; kaldırılabilir.
- `robots`: `index, follow`.
- `canonical`: mevcut.
- `og:type`, `og:title`, `og:description`, `og:site_name`: mevcut.
- `og:url` ve `og:image`: eksik.
- Twitter’da `twitter:card`, `twitter:title`, `twitter:description` var; `twitter:image` eksik.
- JSON-LD `Hotel` var; ancak `url`, `@id`, `geo`, `sameAs`, `amenityFeature`, `checkinTime/checkoutTime` bağlamı ve oda detaylarının sayfa bazlı ilişkisi geliştirilebilir.
- Ana sayfada 1 H1 ve 9 H2 bulunuyor. H2 sayısı tek başına sorun değildir; fakat “Rezervasyon & Müsaitlik Sorgulama” gibi bölüm başlıkları içerik hiyerarşisinde daha iyi gruplanabilir.

Google, title link oluştururken yalnızca `<title>` değil, H1, diğer başlıklar, `og:title`, bağlantı metinleri ve görünür metni de değerlendirebilir. Bu nedenle title, H1 ve sayfa metni aynı arama niyetini anlatmalıdır [2].

### 2.3 Görsel ve hız bulguları

Ana sayfada alt metni boş olan görsel tespit edilmedi. Buna karşın görsellerin mevcut teslim biçiminde şu iyileştirmeler yapılmalıdır:

- Logo JPEG olarak 1024×1024 ve yaklaşık 222 KB; arayüzde kullanılacak logo için SVG veya sıkıştırılmış WebP/AVIF tercih edin.
- Lobi görseli yaklaşık 873 KB; ilk ekranda gerekli değilse optimize edin. Gerekliyse doğru boyutta, `preload`/LCP optimizasyonu ile verin.
- Oda görselleri yaklaşık 785–875 KB aralığında ve `srcset` kullanılmıyor. Mobil cihazlara masaüstü boyutlu görsel gönderilmemeli.
- Oda görsellerinde `loading="lazy"` var; bu iyi bir başlangıçtır. İlk ekrandaki ana görsel lazy olmamalı, aşağıdaki görseller lazy kalmalıdır.
- WebP/AVIF dönüşümü, `srcset`/`sizes`, gerçek gösterim boyutuna yakın dosya üretimi, EXIF temizliği ve uzun süreli cache uygulanmalıdır.
- Alt metinler açıklayıcıdır; fakat bazıları anahtar kelime yığınına yaklaşabiliyor. Alt metin ürünün/alanın gerçek görünümünü anlatmalı, aynı ifadeyi tekrar tekrar taşımamalıdır. Google da alt metnin görselin bağlamını açıklamasını önerir [1].
- `width` ve `height` değerleri HTML’de veya CSS aspect-ratio ile sabitlenerek CLS azaltılmalıdır.
- Gerçek Core Web Vitals sonucu için PageSpeed Insights, CrUX veya Search Console verisi gerekir. Bu denetim tek başına LCP/INP/CLS puanı üretmez.

## 3. Mevcut URL envanteri ve önerilen karar

Aşağıdaki kararlar işletmenin gerçek hizmetlerine göre uygulanmalıdır. “Koru” demek sayfayı özgün, doğru ve güncel içerikle güçlendirmek; “birleştir” demek 301 ile daha güçlü sayfaya taşımak; “noindex” demek sayfa kullanıcı için kalacaksa arama sonuçlarına sokmamak anlamına gelir.

| Mevcut URL | Mevcut durum | Önerilen karar |
|---|---|---|
| `/` | Ana ticari sayfa; güçlü içerik ve oda özeti var | Koru, ana hedef sayfa yap |
| `/odalar/` | Oda karşılaştırma sayfası | Koru; ana oda hub’ı yap |
| `/odalar/bahce-odasi/` | Detay sayfası | Koru; Room/Accommodation verisi ekle |
| `/odalar/sehir-suiti/` | Detay sayfası | Koru; Room/Accommodation verisi ekle |
| `/odalar/aile-suiti/` | Detay sayfası | Koru; Room/Accommodation verisi ekle |
| `/fiyatlar/` | H1/title “2024”; fiyatlar doğrulanmalı | Koru; yılı kaldır, güncel fiyat/uyarı modeli oluştur |
| `/olanaklar/` | Olanak iddiaları ana sayfadan farklı olabilir | Koru; yalnızca teyitli olanakları yayınla |
| `/konum/` | Yerel niyet için değerli | Koru; koordinat, harita, mesafe yöntemi ve ulaşım ekle |
| `/iletisim/` | Telefon/WhatsApp/adres var | Koru; LocalBusiness/Hotel kimliğini ekle |
| `/sss/` | SSS var; soru-cevaplar akordeon/HTML görünürlüğü teyit edilmeli | Koru; görünür FAQ ve sınırlı FAQPage verisi ekle |
| `/rezervasyon/` | Site rezervasyonu kesinleştirmiyor | Koru; “talep” olarak adlandır, garanti/anında onay iddialarını kaldır |
| `/yasal.html` | Hukuki bilgilendirme | Koru; sitemap’te kalabilir, gerekiyorsa `noindex, follow` |
| `/mersin-merkez-otelleri/` | Hedef sayfa; genel ve şablonlu | Özgün karşılaştırmalı içerik yoksa `/` veya `/konum/` sayfasına 301 |
| `/mersin-merkez-apart-otel/` | Ana hizmetle örtüşüyor | `/` ile aynı niyetse 301; ayrı tutulacaksa 800+ kelime özgün içerik |
| `/mersin-merkez-pansiyon/` | “Pansiyon” gerçek ürün değilse yanlış niyet | Ürün sunulmuyorsa 301 veya kaldır/noindex |
| `/mersin-merkez-ucuz-otel/` | “2024–2025” ve ucuzluk iddiası | Güncel fiyat karşılaştırması yoksa birleştir; tüketiciye yanıltıcı vaat verme |
| `/mersin-merkez-otel-musaitlik/` | “Anında WhatsApp ile onay” iddiası mevcut | Gerçek süreç talep ise metni düzelt; ayrı değer yoksa `/rezervasyon/` ile birleştir |
| `/mersin-merkez-gunluk-otel/` | Günlük konaklama niyeti | Gerçek ürün ve şartlarla özgün sayfa; değilse birleştir |
| `/mersin-merkeze-yakin-oteller/` | Yerel niyet; mesafe iddiaları var | Gerçek mesafeler ve ulaşım yöntemiyle özgünleştir; aksi halde `/konum/` ile birleştir |

**Önemli:** Sırf farklı anahtar kelimeler için aynı işletmeyi 7–8 kısa sayfaya bölmek yerine, az sayıda fakat güçlü sayfa daha güvenli bir yapıdır. Google’ın önerisi de bağlantıların kullanıcı ve arama motoruna hedef sayfanın içeriğini açıkça anlatmasıdır [1].

## 4. Sayfa bazlı H1, title ve meta description önerileri

Aşağıdaki metinler başlangıç önerisidir. Yayına alınmadan önce gerçek hizmet, fiyat ve kapasite ile karşılaştırılmalıdır. Title ve açıklamalar benzersiz, kısa ve sayfanın gerçek içeriğiyle uyumlu olmalıdır [1] [2].

| URL | Önerilen title | Önerilen meta description | Önerilen H1 |
|---|---|---|---|
| `/` | `Mersin Merkez Otel | Apart Otel ve Günlük Konaklama` | `Mersin Cami Şerif’te apart otel konaklaması. Bahçe Odası, Şehir Suiti ve Aile Suiti için güncel fiyat ve müsaitliği telefon veya WhatsApp’tan sorun.` | `Mersin Merkez Otel — Apart Konaklama ve Oda Seçenekleri` |
| `/odalar/` | `Mersin Apart Otel Odaları | 3 Konaklama Seçeneği` | `Mersin Merkez Otel’de Bahçe Odası, Şehir Suiti ve Aile Suiti seçeneklerini alan, kapasite ve özellikleriyle karşılaştırın.` | `Mersin Apart Otel Odaları ve Suitler` |
| `/odalar/bahce-odasi/` | `Bahçe Odası | 28 m² Mersin Apart Otel` | `28 m², 2 kişi kapasiteli Bahçe Odası; zemin kat, bahçe manzarası ve çalışma köşesi. Güncel fiyat ve müsaitliği sorun.` | `Bahçe Odası — 2 Kişilik, 28 m²` |
| `/odalar/sehir-suiti/` | `Şehir Suiti | 42 m² Mersin Apart Otel` | `42 m² ve 3 kişi kapasiteli Şehir Suiti; oturma alanı ve şehir manzarası. Tarihiniz için fiyat ve müsaitliği teyit edin.` | `Şehir Suiti — 3 Kişilik, 42 m²` |
| `/odalar/aile-suiti/` | `Aile Suiti | 52 m² Mersin Apart Otel` | `52 m² ve 4 kişi kapasiteli Aile Suiti; geniş yaşam alanı ve salon. Güncel oda şartlarını ve fiyatı işletmeden öğrenin.` | `Aile Suiti — 4 Kişilik, 52 m²` |
| `/fiyatlar/` | `Mersin Apart Otel Fiyatları | Güncel Başlangıç Ücretleri` | `Mersin Merkez Otel oda fiyatlarını ve başlangıç ücretlerini inceleyin. Tarih, kişi sayısı ve müsaitliğe göre güncel tutarı teyit edin.` | `Mersin Apart Otel Fiyatları ve Başlangıç Ücretleri` |
| `/olanaklar/` | `Mersin Apart Otel Olanakları | Tesis Bilgileri` | `Mersin Merkez Otel’in teyitli oda ve ortak alan olanaklarını, giriş-çıkış saatlerini ve konaklama öncesi önemli bilgileri inceleyin.` | `Mersin Merkez Otel Olanakları` |
| `/konum/` | `Mersin Merkez Otel Konumu | Cami Şerif Yol Tarifi` | `Mersin Merkez Otel’in Cami Şerif, Akdeniz adresini ve yol tarifini inceleyin. Yakın çevreye ulaşım ve konum bilgilerini görün.` | `Mersin Merkez Otel Konumu ve Yol Tarifi` |
| `/iletisim/` | `Mersin Merkez Otel İletişim | Telefon ve WhatsApp` | `Oda, fiyat ve müsaitlik bilgisi için Mersin Merkez Otel’e telefon veya WhatsApp’tan ulaşın. Adres ve yol tarifini görüntüleyin.` | `Mersin Merkez Otel İletişim ve Rezervasyon Talebi` |
| `/sss/` | `Mersin Apart Otel SSS | Fiyat, Giriş ve Konaklama` | `Mersin apart otel konaklaması hakkında oda seçimi, fiyat, giriş-çıkış, temizlik ve rezervasyon süreciyle ilgili sık sorulan soruların yanıtları.` | `Mersin Apart Otel Hakkında Sık Sorulan Sorular` |
| `/rezervasyon/` | `Mersin Apart Otel Rezervasyon Talebi | WhatsApp` | `Tarih, kişi sayısı ve oda tercihinizi ileterek Mersin Merkez Otel’den fiyat ve müsaitlik talep edin. Site üzerinden ödeme alınmaz.` | `Mersin Apart Otel Rezervasyon Talebi` |
| `/mersin-merkez-apart-otel/` | `Mersin Merkez Apart Otel | Oda ve Konaklama` | `Mersin merkezde apart otel arayanlar için oda seçenekleri, konum, konaklama şartları ve güncel fiyat talep adımlarını inceleyin.` | `Mersin Merkez Apart Otel` |

Birleştirilecek sayfalar için ayrı title/H1 üretmek yerine 301 hedefinin title ve içeriği kullanılmalıdır. `/pansiyon/`, `/ucuz-otel/`, `/otel-musaitlik/`, `/gunluk-otel/` ve `/merkeze-yakin-oteller/` sayfalarının gelecekte tutulup tutulmayacağı, işletmenin gerçekten bu hizmet/niyetleri karşılayıp karşılamadığına göre kararlaştırılmalıdır.

## 5. H2 ve içerik mimarisi

### Ana sayfa `/`

Önerilen yapı:

- H1: Mersin Merkez Otel — Apart Konaklama ve Oda Seçenekleri
  - H2: Mersin Cami Şerif’te Konaklama
    - H3: Adres, telefon ve konum
  - H2: Oda ve Suit Seçenekleri
    - H3: Bahçe Odası
    - H3: Şehir Suiti
    - H3: Aile Suiti
  - H2: Olanaklar ve Konaklama Bilgileri
    - H3: Teyitli olanaklar
    - H3: Giriş ve çıkış saatleri
  - H2: Fiyat ve Müsaitlik Nasıl Öğrenilir?
  - H2: Mersin Merkez Otel’e Nasıl Ulaşılır?
  - H2: Sık Sorulan Sorular
  - H2: Rezervasyon Talebi Oluşturun

Ana sayfada H2 olarak kullanılan “Detaylarda sakinlik” ve “Güncel bilgiyi doğrudan alın” gibi marka cümleleri, arama niyetini açıkça anlatan başlıkların yerine geçmemelidir. Marka dili alt başlık veya görsel metni olarak kalabilir.

### Oda listeleme `/odalar/`

- H1: Mersin Apart Otel Odaları ve Suitler
  - H2: Oda Seçimini Kişi Sayısına Göre Yapın
  - H2: Bahçe Odası — 2 Kişi
  - H2: Şehir Suiti — 3 Kişi
  - H2: Aile Suiti — 4 Kişi
  - H2: Fiyat ve Müsaitlik Bilgisi
  - H2: Rezervasyon Talebi Nasıl İletilir?

Her kartta oda adı, gerçek kapasite, m², yatak tipi, banyo, manzara, olanaklar, fotoğraf ve detay sayfasına açıklayıcı bağlantı olmalıdır. “Oda detayları” yerine “Bahçe Odası detaylarını inceleyin” gibi bağlantı metinleri daha açıklayıcıdır.

### Oda detay sayfaları

- H1: Oda adı — kapasite ve alan
  - H2: Odanın Kısa Özeti
  - H2: Oda Özellikleri ve Olanaklar
  - H2: Kimler İçin Uygun?
  - H2: Fiyat ve Müsaitlik
  - H2: Konum ve Ulaşım
  - H2: Benzer Oda Seçenekleri
  - H2: Rezervasyon Talebi

Oda detay sayfalarında “eski işletme sayfasında” ifadesi kullanıcı güvenini zayıflatıyor. Bilgi güncelse doğrudan ve güvenli bir dille yazılmalı; güncel değilse yayınlanmamalıdır. “Kaynak işletme sayfası” gibi içerik içi notlar yerine sayfanın sahibi ve güncellenme tarihi açıkça gösterilmelidir.

### Fiyatlar `/fiyatlar/`

- H1: Mersin Apart Otel Fiyatları ve Başlangıç Ücretleri
  - H2: Oda Tipine Göre Başlangıç Fiyatları
  - H2: Fiyatı Değiştiren Unsurlar
  - H2: Fiyat ve Müsaitlik Nasıl Teyit Edilir?
  - H2: İptal, giriş ve ödeme koşulları
  - H2: Oda Seçeneklerini Karşılaştırın

Fiyat tablosunda para birimi, kişi sayısı, gecelik/gece başına mı olduğu, geçerlilik tarihi ve dahil olmayan kalemler açıkça belirtilmelidir. Gerçek fiyat sürekli değişiyorsa “güncel fiyat için arayın” denmeli; eski yıl başlıkları tutulmamalıdır.

### Konum `/konum/`

- H1: Mersin Merkez Otel Konumu ve Yol Tarifi
  - H2: Cami Şerif, Akdeniz Adresi
  - H2: Otelimize Nasıl Gelinir?
  - H2: Yakın Çevre ve Gerçek Mesafeler
  - H2: Otopark, toplu taşıma ve giriş bilgileri
  - H2: Haritada Yol Tarifi Alın

“1 dk” ve “5 dk” gibi süreler yürüyüş mü araç mı olduğu belirtilerek, mümkünse harita rotasıyla desteklenmelidir. Yakındaki işletmeler değişebileceği için güncelleme tarihi veya “yaklaşık” ibaresi korunmalıdır.

## 6. Yapısal veri ve head önerileri

### 6.1 Site geneli head şablonu

Her indexlenebilir sayfada, sayfaya göre değerleri değişen şu alanlar bulunmalıdır:

```html
<title>Sayfaya özgü, açık ve kısa title</title>
<meta name="description" content="Sayfaya özgü gerçek içerik özeti.">
<link rel="canonical" href="https://www.mersinmerkezotel.com/ornek-sayfa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Sayfaya özgü sosyal başlık">
<meta property="og:description" content="Sayfaya özgü sosyal açıklama">
<meta property="og:url" content="https://www.mersinmerkezotel.com/ornek-sayfa/">
<meta property="og:site_name" content="Mersin Merkez Otel">
<meta property="og:image" content="https://www.mersinmerkezotel.com/assets/og/mersin-merkez-otel.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sayfaya özgü sosyal başlık">
<meta name="twitter:description" content="Sayfaya özgü sosyal açıklama">
<meta name="twitter:image" content="https://www.mersinmerkezotel.com/assets/og/mersin-merkez-otel.jpg">
```

Sosyal görsel en az 1200×630 oranına yakın hazırlanmalı; oda sayfalarında mümkünse ilgili odanın gerçek fotoğrafı kullanılmalıdır. `og:image` ve canonical URL mutlaka gerçek, herkese açık ve kanonik origin’i kullanmalıdır.

### 6.2 Ana sayfa için Hotel/LocalBusiness JSON-LD

Mevcut `Hotel` verisi korunabilir, ancak yalnızca kullanıcıya görünür ve teyit edilmiş bilgiler eklenmelidir. Aşağıdaki şablon örnektir; koordinat, URL ve `sameAs` alanları gerçek verilerle doldurulmalıdır:

```json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": "https://www.mersinmerkezotel.com/#hotel",
  "name": "Mersin Merkez Otel",
  "url": "https://www.mersinmerkezotel.com/",
  "image": [
    "https://www.mersinmerkezotel.com/assets/mersin-merkez-otel-lobi-resepsiyon.jpg"
  ],
  "telephone": "+90 531 315 24 90",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mücahitler Cd. 38/1A",
    "addressLocality": "Akdeniz",
    "addressRegion": "Mersin",
    "postalCode": "33010",
    "addressCountry": "TR"
  },
  "checkinTime": "12:30",
  "checkoutTime": "11:30",
  "containsPlace": [
    {
      "@type": "HotelRoom",
      "name": "Bahçe Odası",
      "occupancy": { "@type": "QuantitativeValue", "maxValue": 2 },
      "floorSize": { "@type": "QuantitativeValue", "value": 28, "unitCode": "MTK" }
    }
  ]
}
```

Oda detay sayfalarında yalnızca sayfada görünür ve doğrulanmış bilgileri taşıyan `HotelRoom` veya uygun `Accommodation` nesnesi kullanılmalıdır. Fotoğraf sayısı, kapasite, yatak, banyo, olanak ve koordinat gibi alanlarda eksik bilgi uydurulmamalıdır. Google, yapılandırılmış verinin sayfada kullanıcıya görünmeyen bilgileri işaretlemek için kullanılmaması gerektiğini açıkça belirtir [3].

Google’ın Vacation Rental dokümanında `containsPlace`, occupancy, identifier, görsel, latitude/longitude ve konaklama ayrıntıları gibi alanlar tanımlanır; ancak bu işaretleme yalnızca gerçekten ilgili konaklama ürünü ve şartlar karşılanıyorsa kullanılmalıdır [4].

### 6.3 SSS verisi

SSS soruları sayfada gerçekten görünür olmalı. Her soru-cevap için `FAQPage` işaretlemesi yapılacaksa sadece gerçek ve eksiksiz cevaplar kullanılmalıdır. Aynı SSS cevapları sitenin her sayfasına kopyalanmamalı; ana SSS sayfasında toplanmalıdır. Rich result görünümü garanti değildir.

### 6.4 Breadcrumb ve WebSite

Oda detayları için `BreadcrumbList`, site adı için uygun `WebSite` verisi eklenebilir. Bunlar görünür gezinme ve sayfa başlığı ile aynı bilgiyi temsil etmelidir.

## 7. İç bağlantı ve menü yapısı

Önerilen ana menü:

- Ana Sayfa
- Odalar
- Fiyatlar
- Olanaklar
- Konum
- SSS
- İletişim
- Belirgin CTA: “Fiyat ve Müsaitlik Sor”

Önerilen bağlantı akışı:

- Ana sayfa → Oda hub’ı → her oda detay sayfası → Fiyatlar → Rezervasyon/İletişim.
- Oda detayları → diğer iki oda → Konum → İletişim.
- Konum → İletişim ve yol tarifi.
- SSS → Fiyatlar, Olanaklar, Konum ve Rezervasyon.
- Her ticari sayfada tek ana CTA ve ikinci bir telefon/WhatsApp alternatifi.

“Buraya tıklayın”, “Oda detayları” ve yalnızca ok işareti kullanan bağlantılar yerine hedefi açıklayan metinler kullanılmalıdır. Google, açıklayıcı bağlantı metninin kullanıcıya ve arama motoruna hedef sayfanın içeriğini anlattığını belirtir [1].

## 8. İçerik doğruluğu ve güven sorunları

Aşağıdaki ifadeler yayına alınmadan önce işletme tarafından yazılı olarak doğrulanmalıdır:

- “Mutfaklı günlük kiralık ev” — mevcut ana sayfada mutfak görünür biçimde doğrulanmıyor.
- “Jakuzili apart otel” — Şehir Suiti görsel alt metninde geçiyor, fakat sayfa metninde jakuzi hizmeti doğrulanmıyor.
- “Anında WhatsApp ile onay” — ana sayfa ve iletişim sayfası site üzerinden anında rezervasyon/onay olmadığını söylüyor.
- “Yerimizi garanti altına alın” — müsaitlik ve rezervasyon onayı işletme tarafından ayrıca teyit ediliyorsa garanti anlamı taşıyan ifade kullanılmamalı.
- “24 saat resepsiyon”, “kahvaltı”, “günlük temizlik”, “Wi‑Fi” — güncel olanaklar sayfası ve işletme ile eşleştirilmeli.
- “Güvenilir”, “temiz”, “en ucuz”, “mükemmel konum” — ölçülebilir kanıt, yorum veya açıklama olmadan kesin üstünlük iddiası olarak kullanılmamalı.
- “Pansiyon” — işletme gerçekten pansiyon hizmeti sunmuyorsa bu arama niyetine sayfa açılmamalı.

İçerik, işletme tarafından bir kez doğrulanıp içerik envanterine alınmalıdır. Her sayfada “Son güncelleme” tarihi yalnızca içerik gerçekten güncelleniyorsa gösterilmelidir.

## 9. Yerel SEO ve dönüşüm yapılacakları

1. Google Business Profile adı, kategori, telefon, adres, çalışma saatleri, web sitesi ve fotoğrafları siteyle birebir eşleştirin.
2. Google Haritalar bağlantısında doğrudan işletme kaydına giden kalıcı URL kullanın; kısaltılmış veya geçici paylaşım linki varsa kalıcı bağlantıyla değiştirin.
3. Sayfada adresi tek bir biçimde kullanın: `Mücahitler Caddesi 38/1A, Cami Şerif, Akdeniz/Mersin, 33010`.
4. Telefonu görünür metinde ve `tel:` bağlantısında aynı uluslararası biçimde verin.
5. Gerçek oda, banyo, resepsiyon, bina girişi ve çevre fotoğrafları yayınlayın; stok veya yanıltıcı fotoğraf kullanmayın.
6. Konaklama koşulları, yaş/kimlik, evcil hayvan, sigara, otopark, ödeme, iptal, depozito, giriş-çıkış ve çocuk/ek yatak bilgilerini açıkça yazın. Bilinmiyorsa “işletmeye sorun” deyin.
7. Form kişisel veri işlemiyorsa bunu açıklayan metni koruyun; WhatsApp’a hangi bilgilerin aktarılacağını açıkça belirtin. KVKK metninin işletmenin gerçek veri işleme süreciyle uyumlu hukuk danışmanı tarafından kontrol edilmesi gerekir.
8. Telefon tıklaması, WhatsApp tıklaması, harita tıklaması ve rezervasyon talebi için analitik olayları kurun. Bu olaylar kurulmadan SEO iyileştirmesinin ticari etkisi ölçülemez.

## 10. Uygulama sırası

### P0 — İlk 1–3 gün

- Gerçek hizmet, fiyat, oda kapasitesi ve olanak listesini işletmeden teyit et.
- 2024/2025 ifadelerini kaldır.
- Anında onay, garanti ve doğrulanmamış özellikleri düzelt.
- `/index.html` ve slash varyantlarını kanonik URL’ye 301 yap.
- Her sayfaya `og:url`, `og:image`, Twitter görselleri ekle.
- Sitemap’ten birleştirilecek veya noindex olacak URL’leri çıkar.

### P1 — İlk hafta

- H1/title/meta önerilerini uygula.
- `/odalar/` ve oda detaylarını güçlendir.
- Fiyatlar, koşullar, giriş-çıkış ve olanaklar sayfalarını güncelle.
- Ana sayfa ve iletişim/konum sayfalarında Hotel/LocalBusiness kimliğini tutarlı hale getir.
- İç link metinlerini hedefi açıklayacak şekilde düzenle.

### P2 — 2–4 hafta

- Gerçek ve özgün yerel içerik oluştur; düşük değerli hedef sayfalarını birleştir.
- Görselleri WebP/AVIF, responsive image ve doğru boyutlarla yeniden üret.
- Search Console ve Analytics olaylarını kur.
- Rich Results Test ve schema.org doğrulaması yap.
- PageSpeed Insights mobil/masaüstü testlerini gerçek URL’lerde çalıştır.

### P3 — Aylık bakım

- Fiyat, müsaitlik, olanak ve çalışma bilgilerini kontrol et.
- 404, yönlendirme, sitemap ve Search Console kapsam raporlarını incele.
- Google Business Profile fotoğraf ve yorumlarını güncelle.
- Arama sorgularına göre yeni içerik üret; yalnızca anahtar kelime varyasyonu için kopya sayfa açma.

## 11. Yayın öncesi kontrol listesi

- [ ] Her indexlenebilir URL’nin tek bir 200 kanonik adresi var.
- [ ] Birleştirilen URL’ler 301 ile doğru hedefe gidiyor.
- [ ] 404 sayfası gerçek 404 döndürüyor.
- [ ] Her sayfada tek, açıklayıcı H1 var.
- [ ] H2’ler sayfanın gerçek bölümlerini anlatıyor.
- [ ] Her sayfada benzersiz title ve meta description var.
- [ ] Title ve H1 birbirini çelişkisiz biçimde destekliyor.
- [ ] `og:title`, `og:description`, `og:url`, `og:image` mevcut.
- [ ] Twitter kartı mevcut.
- [ ] Canonical, sitemap ve internal linkler aynı URL biçimini kullanıyor.
- [ ] Sadece gerçek ve teyitli bilgiler yapılandırılmış veriye giriyor.
- [ ] Oda sayfalarında oda adı, kapasite, alan, fotoğraf, özellik, fiyat koşulu ve CTA var.
- [ ] Görseller sıkıştırılmış, responsive ve anlamlı alt metinli.
- [ ] Telefon, WhatsApp ve harita linkleri mobilde çalışıyor.
- [ ] Fiyat, iptal, ödeme, giriş-çıkış ve rezervasyonun kesinleşme durumu açık.
- [ ] Search Console URL Inspection ve Rich Results Test ile kontrol yapıldı.

## 12. Yapay zekâya verilecek uygulama talimatı

Aşağıdaki metni ayrı bir talimat olarak kullanabilirsin:

```text
Sen deneyimli bir teknik SEO uzmanı, yerel SEO danışmanı ve konaklama sitesi içerik editörüsün.

Hedef site: https://www.mersinmerkezotel.com/
İşletme: Mersin Merkez Otel
Konum: Cami Şerif, Mücahitler Caddesi 38/1A, Akdeniz/Mersin
Ana dönüşüm: Telefon ve WhatsApp üzerinden oda, fiyat ve müsaitlik talebi.
Önemli iş kuralı: Site kendi başına rezervasyon onayı ve ödeme almıyor. İşletme teyit etmeden “anında onay”, “garanti”, “kesin rezervasyon” yazma.

Bu denetim dosyasındaki bütün tespitleri dikkate alarak şu sırayla çalış:

1. Önce işletmenin gerçek hizmet envanterini çıkar. Mutfak, jakuzi, kahvaltı, 24 saat resepsiyon, günlük temizlik, Wi-Fi, otopark, çocuk/ek yatak, evcil hayvan, sigara, ödeme ve iptal bilgileri doğrulanmadan bunları kesin gerçek gibi yazma.
2. Ana sayfa, oda hub’ı, üç oda detay sayfası, fiyatlar, olanaklar, konum, iletişim, SSS ve rezervasyon sayfaları için özgün title, meta description, H1, H2 ve içerik brief’i oluştur.
3. 2024/2025 tarihlerini kaldır. Fiyatlar değişkense başlangıç fiyatı, geçerlilik tarihi, kişi/gece birimi ve teyit gerekliliğini açıkça belirt.
4. /mersin-merkez-otelleri/, /mersin-merkez-apart-otel/, /mersin-merkez-pansiyon/, /mersin-merkez-ucuz-otel/, /mersin-merkez-otel-musaitlik/, /mersin-merkez-gunluk-otel/ ve /mersin-merkeze-yakin-oteller/ URL’lerini tek tek incele. Gerçekten farklı arama niyeti ve özgün değer yoksa 301 ile uygun güçlü sayfaya birleştir veya kullanıcı için kalması gerekiyorsa noindex, follow uygula. Aynı anahtar kelimenin varyasyonlarını sırf SEO için çoğaltma.
5. /index.html, slash’siz ve slash’lı varyantları tek kanonik URL’ye yönlendir. Canonical, internal link ve sitemap aynı biçimde olsun.
6. Her indexlenebilir URL’ye sayfaya özgü title, meta description, canonical, og:type, og:title, og:description, og:url, og:site_name, og:image, twitter:card, twitter:title, twitter:description ve twitter:image ekle.
7. Ana sayfada yalnızca görünür ve teyitli bilgilerle Hotel JSON-LD kullan. İletişim/konum için Hotel/LocalBusiness kimliğini, oda detayları için uygun HotelRoom veya Accommodation işaretlemesini, gezinme için BreadcrumbList’i değerlendir. SSS verisini yalnızca görünür soru-cevaplar için kullan. Veri uydurma.
8. Oda detay sayfalarında kapasite, m², kat, manzara, yatak, banyo, gerçek olanaklar, fotoğraflar, fiyatın kapsamı, müsaitlik uyarısı, konum, benzer odalar ve telefon/WhatsApp CTA’sı bulunmasını sağla.
9. İç bağlantı metinlerini “buraya tıklayın” veya yalnızca “oda detayları” yerine hedefi açıklayacak şekilde yaz.
10. Görselleri WebP/AVIF’e dönüştür, responsive srcset/sizes ekle, doğru alt metin ver, ilk ekran görselini optimize et, aşağıdaki görselleri lazy-load et, width/height ile layout shift’i azalt.
11. Yerel SEO için NAP tutarlılığı, Google Business Profile, doğrudan harita URL’si, gerçek fotoğraflar, yorumlar ve konum/ulaşım içeriğini iyileştir.
12. Uygulama sonunda her değişikliği şu formatta raporla: URL, eski durum, yeni durum, neden, doğrulama adımı.
13. Yayın öncesi robots.txt, sitemap.xml, canonical, 301, 404, mobil görünüm, JSON-LD ve sosyal paylaşım önizlemesini test et.

Çıktı formatın:
- Önce kritik sorunlar ve riskler.
- Sonra dosya/şablon bazında uygulanacak değişiklikler.
- Sonra sayfa bazlı title/meta/H1/H2 ve içerik metinleri.
- Sonra teknik kod örnekleri.
- Sonra test ve yayın kontrol listesi.
- Kesin olmayan hiçbir bilgiyi kesin gerçek olarak yazma.
```

## Referanslar

[1]: https://developers.google.com/search/docs/fundamentals/seo-starter-guide "Google Search Engine Optimization Starter Guide"
[2]: https://developers.google.com/search/docs/appearance/title-link "Google Search — Influencing your title links"
[3]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data "Google Search — Introduction to structured data markup"
[4]: https://developers.google.com/search/docs/appearance/structured-data/vacation-rental "Google Search — Vacation rental structured data"
