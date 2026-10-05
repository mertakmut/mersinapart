# Mersin Apart Otel — uygulama planı

## Amaç ve kapsam

Mersin Apart Otel için Türkçe, mobil öncelikli ve birbirine bağlı 12 ayrı HTML rotası (ana sayfa, 10 içerik sayfası ve yasal sayfa) hazırlamak. Doğru işletme telefonu kullanıcı tarafından `0533 266 12 88` olarak teyit edildi; site içinde `+90 533 266 12 88`, arama için `tel:+905332661288`, WhatsApp için `wa.me/905332661288` kullanılır. Kullanıcıya ait mevcut canlı site gibi görünen `mersinapartotel.net` ayrı kalır; bu projeden değiştirilmez.

Kullanıcı mevcut `mersinapartotel.net` içerik ve fotoğraflarını oda verileri için kullanma izni verdi: üç oda tipi, kapasite, alan, manzara, başlangıç fiyatları ve olanaklar. Başlangıç fiyatlarının tarihe/oda tipine göre değişebileceği açıklanır; bağımsız doğrulaması olmayan puan ve yorumlar eklenmez. Talep alanları tarayıcıda işlenir ve kullanıcı tıklarsa WhatsApp mesaj taslağı açılır; site sunucusuna form verisi gönderilmez.

## Uygulama yaklaşımı

- Bağımlılıksız statik HTML/CSS/JavaScript; anlamlı sayfa metni ilk HTTP yanıtında bulunur. JavaScript ana sayfadaki talep alanlarını yerel doğrular ve sadece kullanıcı düğmeye bastığında WhatsApp taslağını açar; hiçbir form verisi sunucuya gönderilmez, kalıcı depolama/çerez kullanılmaz.
- Mevcut ana sayfa ve yasal sayfaya **10 ayrı URL sayfası** eklenerek toplam 12 HTML rotası oluşturulur. İçerikler oda genel bakışı/üç oda detayı/fiyatlar/olanaklar/konum/iletişim/SSS/rezervasyon konularında farklı ve yararlı; ince doorway sayfaları yoktur.
- `tel:+905332661288`, `https://wa.me/905332661288?...` ve harita/yol tarifleri çalışır. Talep alanındaki ad, telefon, tarihler, kişi sayısı ve not yalnızca kullanıcı tıklamasıyla mesaja eklenir; kullanıcı mesajı göndermeden önce inceler. Gerçek rezervasyon veya müsaitlik garantisi verilmez.
- Üç oda kartında yayımlı başlangıç fiyatları, alan/kapasite/manzara, gerçek fotoğraflar ve olanak özeti; Cami Şerif çevresine dair yaklaşık yürüyüş süreleri verilir.
- On yeni rota için içeriğe özgü ilk-yanıt HTML'si, title/description/keywords, tek H1, anlamlı H2, Open Graph/Twitter metadata ve görünür breadcrumb bulunur. `manus-routes.json`, ortak sayfa dizini ve production sitemap aynı 12 rotayı gösterir; ana sayfada Hotel/HotelRoom JSON-LD vardır.
- Kullanıcı production domaini `mersinapartotel.xyz` olarak verdi. 5 Ekim 2026 kontrolünde DNS `93.89.226.17` adresine çözülüyor, HTTP 200 dönüyor; HTTPS sertifika doğrulaması başarısız ve domainin bu WebDev projesine bağlı olduğu doğrulanmadı. Preview `noindex, nofollow` kalır. DNS/hosting bağlantısı ve geçerli HTTPS doğrulanana kadar production canonical/sitemap/indeksleme, yayınlama ve Google Ads Final URL’si bekler. Eski `.net` origin’i build betiğinde reddedilir.
- Hero ve oda kartlarında kullanıcının onayladığı eski siteden gerçek lobi/oda fotoğrafları bulunur; temsili görsel gerçek oda gibi sunulmaz.
- Kullanıcının orijinal 720×720 PNG logosu korunur. Sayfa logosu 224×224 WebP (13.5 KB), favicon 192×192 PNG (50.9 KB) türevidir; 471 KB sayfa-logo aktarımı yaklaşık 13.5 KB’a düşürülmüştür.
- Google Ads arama kampanyası kullanıcı tarafından istendi; mevcut oturumda Google Ads bağlayıcısı kapalı, doğru hesap yetkilendirilmedi ve günlük bütçe belirtilmedi. HTTPS landing URL hazır olana kadar canlı kampanya kurulmaz. Hesap, Final URL, reklam metni, anahtar kelimeler/hedefleme ve bütçe netleşince en fazla paused taslak hazırlanır; kullanıcı bunların tam içeriğini gördükten sonra ayrıca açık yayın/harcama onayı gerekir. Analytics/dönüşüm kodu kullanıcı tarafından onaylanmış hesap/ölçüm kimliği olmadan eklenmez.

## Tasarım yönü

- **Tasarım hareketi:** Akdeniz modernizmi ve şehir içi butik-konaklama editoryal estetiği; plaj/tatil köyü vaadi değil, Cami Şerif’te şehir-konaklama kimliği.
- **Temel ilkeler:** gerçek oda fotoğrafları; kişi/alan/fiyatı karşılaştırılabilir sunmak; doğrulanmış iletişim; tüm rotalarda klavyeyle erişilebilir gezinme.
- **Renk yaklaşımı:** kireçtaşı beyazı ferahlık, derin körfez yeşili okunurluk/güven, deniz-camı tonu konum hissi, kiremit eylem odağı.
- **Yerleşim:** fotoğraf ağırlıklı asimetrik hero; üç oda kartı; kısa bilgi şeridi; değişen açık/renkli bölüm ritmi; alt sayfalarda içerik odaklı başlık ve breadcrumb.
- **İmza öğeleri:** kullanıcı logosundaki dairesel deniz dalgaları, güneş ve palmiyeler; harita iğnesi grafik halkaları; koyu-teal bilgi panelleri.
- **Etkileşim:** masaüstünde tam navigasyon, mobilde JS gerektirmeyen `details` menüsü ve sabit Ara/Odalar/WhatsApp çubuğu. Başlangıç fiyatı ve WhatsApp’ın rezervasyon onayı olmadığı açıkça belirtilir.
- **Animasyon:** kısa hover/focus geri bildirimi; `prefers-reduced-motion` desteği; animasyon olmadan da tüm işlevler.
- **Tipografi:** Georgia/Palatino sistem serif başlık; sistem sans metin; harici font zorunlu değil.
- **Marka özü:** Mersin Cami Şerif’te apart otel arayanlara oda/fiyat bilgisi ve doğrudan teyit yolu sağlayan şehir içi işletme. Kişilik: net, sıcak, güvenilir.
- **Marka sesi:** konuma ve teyit edilebilir bilgiye dayalı. Örnekler: “Mersin Apart Otel — Cami Şerif, Akdeniz.” / “Tarih ve ücret için doğrudan arayın; güncel bilgiyi birlikte netleştirelim.”
- **Logo:** kullanıcının dairesel “Mersin Apart Otel” görseli header, footer ve favicon’da; web için optimize edilmiş türevleri kullanılır.
- **İmza rengi:** derin körfez teal `#123B42`, kiremit `#A54831`.

## Proje yapısı

- `site/index.html` — ilk yanıtta SEO metadata, telefon bilgili Hotel/HotelRoom JSON-LD, lobi hero’su, oda/fiyat kartları, olanaklar, yakın çevre, iletişim CTA’ları ve WhatsApp taslak talep alanı.
- `site/odalar/index.html`, `site/odalar/{bahce-odasi,sehir-suiti,aile-suiti}/index.html`, `site/{fiyatlar,olanaklar,konum,iletisim,sss,rezervasyon}/index.html` — 10 ayrı, crawler-visible içerik sayfası.
- `site/styles.css` — mobil öncelikli tasarım, ortak gezinme/menü, görsel ve oda kartları, erişilebilir focus, iletişim/form stilleri ve reduced-motion.
- `site/app.js` — alanları yerel doğrular; kullanıcı tıklamasında `wa.me/905332661288` taslağı açar; sunucu isteği veya kalıcı depolama yoktur.
- `site/assets/mersin-apart-otel-logo.png` — değiştirilmemiş kullanıcı orijinali; `mersin-apart-otel-logo-optimized.webp` (224 px) ve `mersin-apart-otel-favicon-192.png` küçük türevleridir. Sayfalar WebDev Managed Storage’da sabit URL kullanır.
- `site/yasal.html` — talep alanlarının tarayıcıda işlenmesini, WhatsApp taslağının kullanıcı tıklamasıyla açılmasını ve çerez/analitik davranışını açıklar.
- `site/robots.txt` — Preview’da noindex yönergesini taramaya izin verir; gerçek origin ile production robots sitemap’i bildirir.
- `site/manus-routes.json` — ana sayfa, 10 yeni rota ve `/yasal.html` dahil 12 statik URL; `scripts/generate-pages.mjs` ile eşzamanlanır.
- `scripts/generate-pages.mjs` — içerik sayfalarını, route manifestini ve ortak marka/iletişim şablonlarını üretir.
- `scripts/build-site.mjs` — manifest rotalarından `dist/` oluşturur; yalnızca kullanıcı tarafından seçilip birebir onaylanan HTTPS origin ile canonical/OG metadata ve XML sitemap’i üretir.
- `TODO.md` — tamamlanan ürün ölçütleri ile DNS/HTTPS, Search Console ve Ads adımlarını izler.

## Kaynaklar ve sınırlar

- İşletme bilgisi kullanıcıdan: “Mersin Apart Otel”, “Cami Şerif, Mücahitler Cd., 33010 Akdeniz/Mersin”, doğru telefon `+90 533 266 12 88`.
- Kullanıcı `https://mersinapartotel.net/` oda içeriği ve fotoğraflarını kullanma izni verdi. Bu mevcut alan adı olduğu gibi kalır; üretim hedefi değildir.
- Google Ads bağlayıcısı oturumda kapalıdır; kullanıcı günlük bütçesi ve hesap yetkisi eksiktir. Kampanya hesabı/bütçesi hazır olana kadar canlı yayın ve harcama yapılmaz.

## Güncel yayın alanı kararı

Kullanıcı yeni domain olarak `mersinapartotel.xyz`’i verdi. DNS `93.89.226.17` adresine çözülüyor, HTTP 200 yanıtlıyor; ancak HTTPS sertifika doğrulaması başarısız ve bu projenin bu domaini servis ettiği doğrulanmış değil. Kullanıcının DNS/hosting tarafında yönlendirme ve SSL tamamlanana kadar Preview noindex kalır, production build/indexing ve Ads Final URL bekler. Eski `mersinapartotel.net` değiştirilmez.
