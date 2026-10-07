# Uygulama teslim ölçütleri

## 1. Reklam ve yerel arama niyetlerine uygun ana sayfa
- [x] Türkçe ana sayfada işletme adı **Mersin Merkez Otel**, adres **Cami Şerif, Mücahitler Cd., 33010 Akdeniz/Mersin** ve kullanıcı tarafından doğrulanan telefon **+90 533 266 12 88** görünür; Ara/WhatsApp bağlantıları doğru hedefe gider.
- [x] Başlık ve içerik “Mersin Merkez Otel”, “Cami Şerif/Akdeniz konaklama”, oda/fiyat araştırması ve doğrudan bilgi/müsaitlik iletişimi niyetlerine karşılık verir; oda adı, kapasite, alan, manzara, başlangıç fiyatı ve olanaklar kaynak sitede yayımlı içerikle tutarlıdır.
- [x] Üç oda seçeneği gerçek fotoğraf, temel özellik ve kapasiteyle sunulur: Bahçe Odası (2 kişi, 28 m², bahçe manzarası; ₺2.100’den/gece), Şehir Suiti (3 kişi, 42 m², şehir manzarası; ₺2.900’den/gece), Aile Suiti (4 kişi, 52 m², geniş salon; ₺3.400’den/gece). Başlangıç fiyatlarının tarih ve oda tipine göre değişebileceği belirtilir.
- [x] Eski sitedeki klima, Wi‑Fi, kahvaltı seçeneği, günlük temizlik, 24 saat resepsiyon ve 12:30 giriş / 11:30 çıkış bilgileri yer alır; güncel teyit uyarısı görünür.
- [x] Cami Şerif yakın çevre içeriği, eski sitede yayımlanan kafe/restoran, Atatürk Parkı ve Mersin Marina isimleri ile yaklaşık yürüme sürelerini verir; sürelerin yaklaşık olduğu açıklanır.
- [x] Sayfa mobil öncelikli ve erişilebilirdir; harita, oda, `tel:+905332661288` ve WhatsApp bağlantıları kolay bulunur.
- [x] Talep alanlarındaki ad, telefon, giriş/çıkış, kişi sayısı ve isteğe bağlı not yalnızca kullanıcı düğmeye basınca WhatsApp mesaj taslağına eklenir; site sunucusuna form verisi gönderilmez ve yerel depolama/çerez kullanılmaz. JavaScript kapalıyken GET/POST isteği oluşmaz.
- [x] Üst görsel ve oda kartlarında kullanıcının eski siteden alınmasına izin verdiği gerçek lobi/oda fotoğrafları kullanılır.

## 2. Arama motoru taraması ve sayfa metaverisi
- [x] Ana sayfanın gövde metni ilk HTML yanıtında bulunur; JavaScript olmadan işletme, adres, oda ve hizmet konusu anlaşılır.
- [x] Türkçe title, 50–160 karakterlik meta description, 3–8 meta keywords, tek H1, anlamlı H2’ler, Open Graph/Twitter temel metadata ve Hotel/HotelRoom JSON-LD sağlanır.
- [x] `site/manus-routes.json` ana sayfa ve yasal sayfa rotalarını içerir.
- [x] Önizleme HTML sayfaları `noindex, nofollow` direktifi verir; robots.txt taramaya izin verir ki arama motorları noindex direktifini okuyabilsin. Gerçek üretim alan adı seçilip `PUBLIC_SITE_ORIGIN` ve birebir aynı `PUBLIC_SITE_ORIGIN_CONFIRMED` değerleri sağlanınca derleme betiği indeks izni, mutlak canonical, `og:url`, lobi görseliyle sosyal metadata, sitemap ve izin veren production robots dosyası üretir. Tahmini origin kullanılmaz.

## 3. İletişim, gizlilik ve çerez bilgisi
- [x] Telefon ve WhatsApp tüm sayfalarda aynı, kullanıcı tarafından doğrulanmış `+90 533 266 12 88` numarasını kullanır; harita bağlantısı Google Maps işletme konumunu açar.
- [x] Ayrı yasal/gizlilik sayfası talep alanlarının sadece tarayıcıda kullanıldığını, WhatsApp taslağının kullanıcı tıklamasıyla açıldığını, site tarafında veri saklanmadığını ve önizlemede analitik/reklam çerezi kullanılmadığını açıklar.
- [x] Google Ads/Analytics izleme kodu veya dönüşüm olayı, gerçek hesap ve ölçüm kimliği olmadan eklenmez.

## 4. İndeksleme araştırması ve teslim
- [x] Araştırma, aynı işletmeyle eşleşen mevcut canlı site ve sitemap’i inceledi; mevcut keşfedilebilirlik, garanti edilen Google sıralamasıyla karıştırılmaz.
- [x] Google yerel sonuçlarında alaka, mesafe ve belirginlik; Ads açılış sayfasında sorgu/reklam/başlık/oda içeriği/CTA uyumu açıklanır; gerçek Ads metinlerine ve ölçüm hesabına erişim olmadığı bildirilir.
- [x] Çalışan Preview kullanıcıya verilir; mevcut `mersinapartotel.net` alan adına otomatik değişiklik veya yayın yapılmaz.

## 5. Çok sayfalı site yapısı
- [x] “site uzantıları olsun sayfalar oluştur en az 10 adet sayfa oluştur”: ana sayfa ve yasal sayfaya **10 ayrı, içerik taşıyan HTML sayfası** eklendi; toplam 12 sayfa/URL: `/odalar/`, `/odalar/bahce-odasi/`, `/odalar/sehir-suiti/`, `/odalar/aile-suiti/`, `/fiyatlar/`, `/olanaklar/`, `/konum/`, `/iletisim/`, `/sss/`, `/rezervasyon/`.
- [x] Her yeni URL kendi ilk HTTP HTML yanıtında kendine özgü title, 50–160 karakter description, 3–8 keywords, tek H1, faydalı ve birbirinden ayrı metin, breadcrumb ve gerekli sayfaya özgü CTA içerir; Preview noindex kalır, üretim origin alan adı tahmin edilmez.
- [x] Ana menü, oda karşılaştırma/detay bağlantıları, ilgili içerik ve ortak sayfa dizini 10 yeni sayfayı birbirine ve ana sayfaya bağlar; hiçbir sayfa orphan değildir.
- [x] `GET /manus-routes.json` title’larıyla 12 gerçek sayfa rotasını beyan eder.
- [x] Production build rotaları aynı manifestten okur, bütün rotalara canonical ve OG/Twitter URL/görsel metadata üretir ve 12 URL’yi production `sitemap.xml` içine alır. Build, onaylı HTTPS origin env değişkenleri yokken—komut satırı argümanları dahil—çalışmaz.

## 6. Kapsamlı UI/UX yenilemesi
- [x] Tüm 12 sayfada marka renkleri, tipografi, başlık/oda kartları, CTA ve sayfa dizini tek tasarım sistemiyle tutarlı hale gelir.
- [x] Kullanıcının orijinal 720×720 PNG logosu korunur; sayfada 224×224, 13.5 KB WebP logo ve 192×192 favicon kullanılarak 471 KB'lık sayfa-logo aktarımı yaklaşık 13.5 KB'a indirilir.
- [x] Masaüstü navigasyonu ve 10 sayfaya çapraz bağlantılar her rotada görünür; tablet/mobilde JavaScript gerektirmeyen açılır menü ve Ara/Odalar/WhatsApp hızlı erişim çubuğu çalışır.
- [x] Oda/fiyat bilgisi, fiyat değişkenliği ve gerçek fotoğraf alt metinleri anlaşılır; klavye odağı, 44px dokunma hedefleri, reduced-motion ve taşmayan mobil tablolar korunur.
- [x] Güncel telefon ve kullanıcı logosu masaüstü Preview'da; logo, hero görseli, çağrı butonları, menü ve sabit iletişim çubuğu 390×844 mobil render'da görsel olarak incelenir.

## 7. Üretim indeksleme için kullanıcı girdisine bağlı adımlar
- [x] Kullanıcı yeni üretim domaini olarak `mersinapartotel.xyz` verdi; eski `mersinapartotel.net` domaininden farklıdır.
- [ ] Kullanıcı domain DNS kayıtlarını WebDev hostingine yönlendirir ve `https://mersinapartotel.xyz` için geçerli SSL sertifikası/HTTPS erişimi hazır olur. 5 Ekim 2026 kontrolünde DNS `93.89.226.17` döndü, HTTP 200 yanıtladı ancak HTTPS sertifika doğrulaması başarısız oldu; domain henüz bu projeye bağlı kabul edilmez.
- [ ] Yeni domain `mersinapartotel.net`’ten ayrı tutulur; eski sitedeki URL’ler değiştirilmez. Alan adı taşıma ayrıca istenirse Search Console verisi ve URL-bazlı yönlendirme planı hazırlanır; alakasız URL’ler ana sayfaya yönlendirilmez.
- [ ] HTTPS/domain sahipliği doğrulandıktan sonra production build, Search Console sahiplik doğrulaması, canonical/robots/sitemap ve sitemap gönderimi tamamlanır; Preview noindex yalnızca doğru origin için üretim build'i onaylanınca kaldırılır.
- [ ] Google Ads bağlayıcısı yetkilendirilir ve doğru hesap seçilir; kullanıcı günlük bütçeyi belirtir. HTTPS Final URL hazır olunca arama kampanyası önce paused taslak olarak oluşturulur.
- [ ] Kampanya etkinleştirilmeden önce kullanıcıya tam Final URL, reklam metni, anahtar kelime/hedefleme ve günlük bütçe gösterilir; reklamların yayına alınması ve potansiyel harcama için kullanıcıdan açık son onay alınır.
- [ ] Analytics/dönüşüm kodu yalnızca kullanıcı tarafından onaylanan hesap ve ölçüm kimliğiyle eklenir.
