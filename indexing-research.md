

## Güncel domain kararı ve sitemap riski — 5 Ekim 2026

Doğrudan XML okumasında mevcut `https://mersinapartotel.net/sitemap.xml` içinde **43 URL** bulundu; bunlara ana sayfa, `rehber.html`, `site-haritasi.html`, `legal.html` ve `konaklama-rehberi/` altındaki çok sayıda arama-niyeti sayfası dahil. Sitemapte bulunmak, bir URL'nin Google tarafından indekslendiğini kanıtlamaz. Genel web araması mevcut ana sayfa için bir sonuç gösterdi; bunun da tam Search Console kapsam raporu olmadığı özellikle belirtilmelidir.

Kullanıcı yeni proje için **farklı bir alan adı** kullanacağını söyledi; alan adının adı henüz paylaşılmadı. Bu nedenle Preview `noindex` kalır; `mersinapartotel.net` değiştirilmedi, yeni projenin yayın hedefi yapılmadı ve eski URL'lere yönlendirme uygulanmadı. Production derleyicisi de eski `.net` kökünü ve alt alan adlarını açıkça reddeder; onaylı yeni HTTPS origin gelene kadar sitemap/canonical production çıktısı oluşturmaz.

Yeni alan adı gelince önce DNS ve HTTPS bağlantısı doğrulanmalı; üretim origin'i iki ayrı env değişkeninde birebir onaylanmalı, sitemap tüm yeni 12 rotayı içermeli ve Search Console'da yeni domain property'si doğrulanıp gönderilmelidir. Eski `.net` alan adı çevrimiçi kalacaksa onun 43 URL'lik sitemap'i ayrı yaşamaya devam eder; eski alan adını yeni domaine taşıma/301 ile kapatma isteniyorsa, bu ayrı karar ve URL-bazlı geçiş planı gerektirir. Bu proje, 43 eski URL'nin hepsini otomatik olarak ana sayfaya yönlendirmez.

Google Ads bağlantı kataloğunda bir Ads servisi mevcut ancak kapalı; Google Search Console için eşleşen hazır bağlantı bulunmadı. Gerçek reklam metinleriyle birebir sayfa kontrolü için Ads hesabı bağlantı onayı, domain doğrulaması/sitemap gönderimi için ise yeni alan adı ve Search Console sahibi erişimi gerekir.


## Yerel düzeltme notu — 5 Ekim 2026

Kullanıcı doğru telefon numarasını 5 Ekim 2026'da sağladı; tüm sayfalarda arama/WhatsApp hedefleri güncellendi ve istemci tarafında, yalnızca tıklamayla WhatsApp taslağı açan talep alanları yeniden etkinleştirildi. Alanlar sunucuya gönderilmez ve çerez/yerel depolama kullanılmaz. Kullanıcının gönderdiği logo sayfa üstbilgisi, altbilgisi ve favicon'a eklendi; orijinal PNG korunurken sayfa logosu 13.5 KB WebP'ye dönüştürüldü. Kullanıcı production domaini `mersinapartotel.xyz` olarak verdi. DNS `93.89.226.17` adresine çözülüyor, HTTP 200 yanıtlıyor, fakat HTTPS sertifika doğrulaması başarısız; preview noindex kalmalı ve production/Ads final URL'si beklemeli. Google Ads bağlayıcısı mevcut oturumda kapalı; kampanyayı yetkilendirme, günlük bütçe ve son yayına alma onayı olmadan etkinleştirmeyin. Eski `mersinapartotel.net` alan adına dokunulmadı.
