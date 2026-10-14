# MASTER IMPLEMENTATION BRIEF
## GEO / AIO / Local SEO / Google Maps / Technical SEO / CRO
### Production-Grade Digital Presence Optimization & Website Engineering Specification

## 0. ANA GÖREV VE ÇALIŞMA PRENSİPLERİ

Sen; kıdemli bir Technical SEO Architect, GEO/AIO Specialist, Local SEO Consultant, Full-Stack Software Engineer, UX/UI Designer, Web Performance Engineer ve Conversion Rate Optimization (CRO) uzmanı olarak hareket edeceksin.

**Ana hedefin:** İşletmenin Google Haritalar ve yerel arama görünürlüğünü güçlendirmek, web sitesini geleneksel arama motorları ve yapay zekâ destekli arama deneyimleri için optimize etmek, güvenilir bir dijital varlık (entity) oluşturmak ve ziyaretçileri ölçülebilir ticari dönüşümlere yönlendirmektir.

Bu görev yalnızca SEO tavsiyesi veya bir denetim raporu hazırlamak değildir. Mevcut projeyi analiz etmen, tespit ettiğin eksikleri kod düzeyinde gidermen, gerekli tasarım ve altyapı değişikliklerini uygulaman, test etmen ve doğrulanabilir sonuçları raporlaman gerekiyor.

### 0.1. Değiştirilemez çalışma kuralları

1. Geliştirmeye başlamadan önce mevcut repository'yi, teknoloji yığınını, sayfa mimarisini, yönlendirmeleri, bileşenleri, SEO altyapısını, analitik kurulumlarını ve deployment yapısını incele.
2. Mevcut çalışan özellikleri, tasarımı, marka kimliğini ve iş mantığını gereksiz yere değiştirme.
3. Mevcut SEO uygulamalarını yeniden yazmadan önce denetle. Doğru çalışan bileşenleri koru; eksikleri tamamla ve hatalı uygulamaları düzelt.
4. Gerçek işletme bilgilerini, mevcut sayfa içeriklerini, iletişim bilgilerini ve tesis özelliklerini doğrulamadan değiştirme.
5. Bilinmeyen adres, telefon, koordinat, fiyat, çalışma saati, müşteri yorumu, puan, oda kapasitesi veya hizmet özelliği uydurma.
6. Eksik bilgiler için açık bir yapılandırma ve veri toplama listesi oluştur. Gerçek bilgiler olmadan ilgili alanları sahte değerlerle doldurma.
7. Yalnızca kodun mevcut olmasını başarı olarak kabul etme. Uygulamanın üretimde nasıl çalıştığını, sayfa kaynağını, HTTP yanıtlarını, yapılandırılmış verileri ve kullanıcı akışlarını doğrula.
8. Gereksiz paket, framework, eklenti veya ücretli servis ekleme. Önce mevcut teknolojilerle çözüm üret.
9. Güvenlik, erişilebilirlik, gizlilik, performans ve arama motoru politikalarını birlikte değerlendir.
10. Değişiklikleri küçük ve kontrollü adımlarla uygula. Her aşamada test et; mevcut özellikleri bozma.
11. Dış servis kimlik bilgilerini, API anahtarlarını ve gizli değişkenleri istemci tarafında yayımlama.
12. Erişimin olmayan Google Business Profile, Search Console, Analytics, hosting veya DNS ayarlarında işlem yapılmış gibi davranma.
13. Her görev maddesini aşağıdaki durumlardan biriyle raporla: `TAMAMLANDI`, `KISMEN TAMAMLANDI`, `ENGELLENDİ` veya `UYGULANMADI`.
14. Herhangi bir teknik veya harici erişim engeli varsa bunu açıkça belirt ve gereken işlemi kullanıcıya bildir.

### 0.2. Başlangıçta oluşturulacak envanter

İlk olarak aşağıdaki envanteri çıkar:

- Kullanılan framework, programlama dili, paket yöneticisi ve sürümler.
- Hosting, CDN, DNS, SSL ve sunucu altyapısı.
- SSR, SSG, ISR veya CSR render stratejisi.
- Mevcut URL yapısı, dil sürümleri ve yönlendirme sistemi.
- `robots.txt`, XML sitemap dosyaları, canonical ve hreflang etiketleri.
- Mevcut JSON-LD / Schema.org uygulamaları.
- Google Analytics 4, Google Tag Manager ve Search Console bağlantıları.
- Google Business Profile ve diğer dijital platformlardaki mevcut işletme bilgileri.
- Mobil kullanılabilirlik, Core Web Vitals ve performans durumu.
- Kırık bağlantılar, yinelenen sayfalar, 404/5xx hataları ve yönlendirme zincirleri.
- Mevcut iletişim ve rezervasyon dönüşüm akışları.
- Eksik içerikler, eksik işletme verileri ve dış erişim gerektiren işlemler.

Denetim sonucunda önceliklendirilmiş bir uygulama planı oluştur ve ardından uygulamaya geç.

---

# BÖLÜM I — GOOGLE BUSINESS PROFILE VE GOOGLE MAPS OPTİMİZASYONU

## 1. İşletme bilgilerinin doğruluğu ve NAP tutarlılığı

İşletmenin Name, Address, Phone (NAP) bilgilerini incele.

- İşletme adını gerçek hayatta kullanılan resmi/ticari adla eşleştir.
- İşletme adına lokasyon, hizmet veya anahtar kelime ekleyerek yapay biçimde sıralama artırmaya çalışma.
- Adres, telefon, web sitesi, çalışma saatleri ve harita pini bilgilerini doğrula.
- Web sitesindeki iletişim sayfası, footer, yapılandırılmış veriler ve Google Business Profile arasında tutarlılık sağla.
- İşletmenin hizmet bölgesi modeli ile fiziksel ziyaret kabul eden işletme modeli arasındaki farkı gözet.
- İşletme müşterileri fiziksel adreste kabul etmiyorsa adresi herkese açık göstermeye yönelik yanlış bir yapı kurma.
- İşletme birden fazla şubeye sahipse her şubenin gerçek adresini ve telefonunu ayrı doğrula.
- Yanlış, eski veya artık kullanılmayan telefon ve adres bilgilerini tespit et.
- Adresin Google Haritalar'daki konumunu ve koordinatlarını kontrol et.

**Çıktı:** Doğrulanmış NAP tablosu, uyuşmazlıklar ve düzeltilmesi gereken kayıtlar.

## 2. Kategori, hizmet ve işletme özellikleri

- En uygun birincil Google Business Profile kategorisini belirle.
- Gerçekten uygun olan ikincil kategorileri incele.
- İşletme türüne uygun hizmetleri, ürünleri ve özellikleri eksiksiz doldur.
- Apart otel/konaklama işletmesi ise Wi-Fi, klima, otopark, mutfak, resepsiyon, evcil hayvan politikası, erişilebilirlik ve benzeri özellikleri yalnızca gerçekten mevcut olduklarında işaretle.
- Hizmetlerin ve olanakların web sitesindeki görünür içerikle tutarlı olmasını sağla.
- İşletme açıklamasını doğal, bilgilendirici ve müşteri odaklı biçimde hazırla.
- Profilin doğrulanma ve işletme sahipliği durumunu kontrol et.

Kategori seçimini yalnızca arama hacmine göre değil, işletmenin gerçek faaliyet alanına göre yap.

## 3. Gerçek fotoğraf ve video stratejisi

İşletmenin fiziksel varlığını doğrulayan, özgün ve güncel medya içeriklerinin kullanılmasını planla.

Gerekli içerikler:

- Dış cephe ve giriş.
- Resepsiyon veya karşılama alanı.
- Gerçek oda ve ortak alanlar.
- İşletme hizmetlerini gösteren detay fotoğrafları.
- Gerçek olanaklar ve varsa erişilebilirlik alanları.
- İşletme tanıtım videosu.
- Uygun olduğunda 360 derece çekimler.

Kurallar:

- Stok görselleri işletmenin gerçek mekânıymış gibi kullanma.
- Yapay zekâyla oluşturulan oda veya tesis görüntülerini gerçek fotoğraf olarak sunma.
- Görsellerin çözünürlüğünü, kırpılmasını, dosya boyutunu ve mobil görüntülenmesini optimize et.
- Logo ve kapak görselinin doğru marka kimliğini yansıtmasını sağla.
- Eksik çekimleri yapılması gereken işler listesine ekle.

## 4. Yorum yönetimi ve itibar sistemi

- Gerçek müşterilerin yorum bırakmasını kolaylaştıran bir süreç tasarla.
- Konaklama veya hizmet tamamlandıktan sonra paylaşılabilecek bir Google yorum bağlantısı ve QR kodu oluşturulmasını planla.
- Tüm müşterilere tarafsız biçimde yorum bırakma fırsatı sun.
- Yalnızca olumlu yorumları seçerek yönlendirme yapma.
- Yorum karşılığında ödül, indirim veya maddi teşvik verme.
- Sahte yorum, satın alınmış değerlendirme veya otomatik yorum üretimi yapma.
- Gerçek yorumlara özgün, profesyonel ve bağlama uygun yanıtlar hazırlanmasını sağla.
- Olumsuz yorumlara savunmacı olmayan, çözüm odaklı cevaplar ver.
- Yanıtlarda müşterinin özel bilgilerini açıklama.
- Her yanıta aynı metni yapıştırma ve anahtar kelimeleri yapay biçimde tekrar etme.
- Yorum yanıtlarını mümkün olduğunda ilgili hizmet ve lokasyon bağlamında doğal şekilde yaz.

Yorum yönetimi için yanıt taslakları üretilebilir; gerçek müşteri deneyimiyle ilgili iddialar doğrulanmadan otomatik olarak yayımlanmamalıdır.

## 5. Google Business Profile içerik planı

İşletmenin faaliyet alanına uygun, sürdürülebilir bir paylaşım takvimi hazırla.

İçerik türleri:

- Gerçek hizmet ve tesis tanıtımları.
- Yeni olanaklar veya gerçek işletme güncellemeleri.
- Mevsimsel bilgilendirmeler.
- Yerel etkinlik ve ulaşım rehberleri.
- Gerçek kampanya ve teklif duyuruları.
- Müşterilerin sık sorduğu sorulara yönelik açıklamalar.

Her içerik için amaç, hedef kitle, görsel ihtiyacı, yayın tarihi ve ölçülecek sonuçları belirt.

Google Business Profile gönderilerinin sıralamayı doğrudan artıracağını varsayma; bunları güncellik, bilgilendirme ve dönüşüm amaçlarıyla kullan.

## 6. İşletme soru-cevap ve bilgi doğruluğu

- Müşterilerin sık sorduğu soruları gerçek destek kayıtlarından, görüşmelerden ve mevcut hizmet bilgilerinden çıkar.
- Web sitesinde açık bir SSS alanı oluştur.
- Google Business Profile üzerinde mevcut soru-cevap özelliklerini ve güncel kullanım koşullarını kontrol et.
- Mümkünse platformun izin verdiği resmî yöntemlerle bilgi ekle.
- Sahte müşteri hesabı, yapay soru veya gerçek olmayan müşteri etkileşimi oluşturma.
- Otopark, evcil hayvan, giriş-çıkış saatleri, rezervasyon, ödeme, iptal ve ulaşım sorularını doğru bilgilerle cevapla.

---

# BÖLÜM II — TEKNİK SEO VE TARANABİLİRLİK

## 7. Sayfa mimarisi ve HTTP davranışları

Her önemli sayfanın arama motorları tarafından erişilebilir ve anlaşılabilir olmasını sağla.

- Ana sayfalar için HTTP 200 yanıtını doğrula.
- Olmayan sayfalar gerçek 404 yanıtı vermeli; hatalı URL'ler ana sayfaya yönlendirilmemeli.
- Kalıcı URL değişikliklerinde uygun 301 yönlendirmeleri uygula.
- Yönlendirme zincirlerini ve döngülerini kaldır.
- HTTPS kullanımını standartlaştır.
- Tek bir tercih edilen domain belirle: `www` veya `www` olmayan sürüm.
- HTTP ve alternatif domain sürümlerini doğru biçimde yönlendir.
- Gereksiz URL parametrelerinin yinelenen içerik oluşturmasını önle.
- Boş, hata veren, yalnızca şablondan oluşan veya değersiz sayfaları tespit et.
- Arama motorlarının ana içeriği görebilmesi için JavaScript render işlemini kontrol et.
- Önemli içerikleri yalnızca kullanıcı etkileşiminden sonra yüklenen bileşenlere hapsetme.

## 8. Semantik HTML ve erişilebilirlik

Sayfa bileşenlerini anlamlı bir HTML yapısıyla düzenle.

- Uygun olduğunda `header`, `nav`, `main`, `article`, `section`, `aside` ve `footer` kullan.
- Her sayfada tek ve belirgin bir ana başlık (`h1`) bulundur.
- Başlık seviyelerini mantıksal sırada kullan.
- Görseller için içerikle uyumlu `alt` metinleri yaz.
- Dekoratif görseller için uygun boş `alt` değeri kullan.
- Form alanlarında erişilebilir etiketler, hata mesajları ve gerekli ARIA niteliklerini uygula.
- Klavye ile gezinmeyi ve görünür odak durumlarını test et.
- Renk kontrastını ve dokunmatik hedef boyutlarını iyileştir.
- Gereksiz ARIA niteliklerinden ve HTML etiketlerinin yanlış kullanımından kaçın.

## 9. Meta etiketleri ve sayfa içi SEO

Her indekslenebilir sayfa için:

- Benzersiz ve açıklayıcı `title`.
- Benzersiz, doğru ve kullanıcı odaklı `meta description`.
- Doğru `canonical`.
- Uygun `robots` yönergeleri.
- Tek ve anlamlı `h1`.
- Mantıklı H2/H3 başlık hiyerarşisi.
- Görseller için açıklayıcı dosya adları ve alt metinleri.
- Uygun Open Graph ve sosyal paylaşım meta etiketleri.
- Doğru dil ve karakter kodlaması.

Meta açıklamalarının doğrudan sıralama faktörü olduğu varsayılmamalıdır; tıklama kararını destekleyecek şekilde yazılmalıdır.

Başlıkları anahtar kelime yığınlarına dönüştürme. Her sayfanın gerçek arama amacı ve kullanıcı ihtiyacıyla uyumunu denetle.

## 10. XML sitemap sistemi

- Canonical ve indekslenebilir URL'leri içeren XML sitemap oluştur.
- Gereksiz yönlendirme, 404, `noindex` ve canonical olmayan URL'leri sitemap dışında tut.
- Sitemap içindeki URL'lerin gerçekten erişilebilir olduğunu doğrula.
- `lastmod` değerini yalnızca anlamlı içerik değişikliklerinde güncelle.
- Büyük sitelerde sitemap index ve uygun alt sitemap yapısı kullan.
- Dil sürümleri varsa hreflang ilişkilerini doğru şekilde uygula.
- Görsel veya video sitemap'lerini yalnızca gerçekten fayda sağlayacaksa ekle.
- Sitemap dosyasını `robots.txt` içerisinde belirt.
- Search Console üzerinden sitemap gönderimi ve hata kontrolü yapılmasını planla.

Sitemap'in gönderilmiş olması, sayfaların indeksleneceği anlamına gelmez. İndekslenme durumu ayrıca izlenmelidir.

## 11. Robots.txt ve yapay zekâ tarayıcıları

Mevcut `robots.txt` dosyasını incele ve site için açık, güvenli bir tarama politikası oluştur.

- Googlebot ve gerekli arama motoru tarayıcılarının önemli içeriklere erişimini koru.
- CSS, JavaScript ve gerekli kaynakları yanlışlıkla engelleme.
- Yönetim alanları, özel API'ler ve hassas kaynaklar için uygun erişim kontrolleri uygula.
- `GPTBot`, `OAI-SearchBot`, `ClaudeBot` ve diğer ilgili tarayıcıların güncel resmî belgelerini kontrol et.
- Her botun kullanım amacını ve mevcut yönergelerini birbirinden ayır.
- Google-Extended gibi kontrollerin Google Search taramasından farklı anlamlar taşıyabileceğini dikkate al.
- Bot izinlerini işletmenin içerik kullanımı ve gizlilik tercihleri doğrultusunda yapılandır.
- İzin verilen bir botun tüm içeriği kesinlikle kullanacağını veya atıf vereceğini iddia etme.
- Robots.txt'nin bir güvenlik duvarı olmadığını unutma; gizli verileri yalnızca robots.txt ile korumaya çalışma.
- CDN, WAF, hosting ve sunucu tarafındaki bot engellemelerini de kontrol et.

Yalnızca gerçekten gerekli izin ve engellemeleri uygula. Bütün botları koşulsuz olarak açma.

## 12. JavaScript SEO ve render doğrulaması

Proje React, Vue, Next.js veya başka bir JavaScript framework'ü kullanıyorsa:

- İlk HTML yanıtında önemli SEO içeriğinin bulunup bulunmadığını incele.
- Kritik sayfalarda SSR, SSG veya uygun ön render yöntemlerini değerlendir.
- Meta etiketlerinin URL değiştiğinde güncellendiğini doğrula.
- Her sayfanın kaynak kodunda veya render edilmiş HTML'sinde doğru canonical ve başlıkları kontrol et.
- JavaScript hatalarını, hydration sorunlarını ve boş içerik yanıtlarını tespit et.
- Google'ın render edilmiş sayfayı nasıl gördüğünü URL Inspection ile doğrula.
- Client-side yönlendirmelerin gerçek URL ve HTTP davranışlarını kontrol et.

Sırf SEO amacıyla bütün uygulamayı yeniden yazma. Önce mevcut mimarideki en az riskli çözümü belirle.

---

# BÖLÜM III — SCHEMA.ORG VE ENTITY SEO

## 13. JSON-LD mimarisi

Yapılandırılmış verileri JSON-LD formatında uygula.

İşletmenin gerçek türüne göre doğru şema seçilmelidir. Apart otel için uygun `LodgingBusiness` alt türü; otel için uygun `Hotel` türü değerlendirilebilir. Bunları yalnızca gerçekten uygun olduklarında kullan.

Gerekli olabilecek şemalar:

- `Organization` veya uygun işletme şeması.
- `WebSite`.
- `WebPage`.
- `BreadcrumbList`.
- Uygun konaklama türü.
- Gerçek ve görünür SSS içeriği için `FAQPage`.
- Makale ve rehber sayfaları için `Article` veya `BlogPosting`.
- Gerçek görsel/video içerikleri için uygun medya şemaları.
- Rezervasyon veya fiyat bilgileri için yalnızca içerik ve desteklenen kullanım senaryosu gerçekten uygunsa ilgili şemalar.

### 13.1. İşletme şemasının alanları

Mevcut ve doğrulanabilir bilgilere göre:

- `@context`
- `@type`
- `@id`
- `name`
- `url`
- `logo`
- `image`
- `description`
- `telephone`
- `address`
- `geo`
- `openingHoursSpecification`
- `sameAs`
- `priceRange`
- Uygun olduğunda `hasMap`
- Uygun olduğunda gerçek hizmet veya olanak bilgileri.

Konaklama tesislerinde uygun oda veya konaklama birimi bilgilerini, gerçek veri modeli ve Schema.org desteği doğrultusunda ekle.

### 13.2. Yapılandırılmış veri kuralları

- Şemadaki bilgiler kullanıcıların sayfada gördüğü içerikle eşleşmeli.
- Birden fazla çelişkili işletme kimliği oluşturulmamalı.
- Sayfa bazında benzersiz `@id` ve doğru entity bağlantıları kullanılmalı.
- Sahte puan, yorum, fiyat, adres, müsaitlik veya olanak bilgisi eklenmemeli.
- İşletmenin kendisi hakkındaki yorumları işaretleyerek Google yıldızlı sonuçlarını garanti etmeye çalışma.
- `AggregateRating` yalnızca gerçekten uygun olduğu ve platform kuralları izin verdiği durumda kullanılmalı.
- `FAQPage` şemasının eklenmesi Google'da SSS zengin sonuçlarının gösterileceğini garanti etmez.
- JSON-LD kodu yalnızca metinsel olarak doğru görünmekle kalmamalı; sözdizimi ve sayfa bağlamı açısından da test edilmeli.

### 13.3. Testler

- Schema.org Validator.
- Google Rich Results Test.
- Search Console URL Inspection.
- Sayfa kaynağında JSON-LD kontrolü.
- Aynı sayfada yinelenen veya çelişen şema kontrolü.

Her hata için ilgili URL'yi, hata türünü ve düzeltme durumunu raporla.

## 14. Entity bağlantıları ve dijital kimlik

İşletmenin farklı platformlardaki kimliğini birleştir.

- Resmî web sitesi.
- Google Business Profile.
- Instagram.
- Facebook.
- YouTube.
- LinkedIn.
- Gerçekten mevcutsa TripAdvisor, rezervasyon platformları ve güvenilir yerel dizinler.

Kurallar:

- `sameAs` yalnızca aynı işletmeye ait doğrulanmış profilleri içermeli.
- İlgisiz veya yalnızca backlink elde etmek için açılmış profilleri ekleme.
- Profil isimleri, marka açıklamaları, logo ve iletişim bilgileri tutarlı olmalı.
- İşletme adına ve sahipliğine ilişkin gerçek bilgiler esas alınmalı.
- Mümkün olduğunda işletme hakkında bağımsız, güvenilir kaynaklarda doğru bilgiler bulunmasını destekle.
- Marka adının yazım varyasyonlarını ve yinelenen işletme kayıtlarını tespit et.

`sameAs` tek başına bir işletmenin tüm arama motorları tarafından aynı entity olarak kabul edilmesini garanti etmez.

---

# BÖLÜM IV — GEO / AIO VE YAPAY ZEKÂ ARAMALARINA UYGUNLUK

## 15. Yapay zekâ sistemleri için içerik erişilebilirliği

Web sitesindeki önemli bilgilerin yalnızca görsellerde, script dosyalarında veya etkileşim gerektiren bileşenlerde bulunmasını önle.

- İşletmenin adı, hizmetleri, adresi, iletişim bilgileri ve temel özellikleri görünür metin olarak sunulmalı.
- Kritik bilgiler ilk render sonrasında kaybolmamalı.
- Önemli içerikler iç bağlantılar üzerinden keşfedilebilir olmalı.
- Her hizmet ve bilgi sayfası net bir konuya odaklanmalı.
- İçeriklerin kaynakları ve güncelliği gerektiğinde belirtilmeli.
- İşletme tarafından doğrulanmış bilgilerle editoryal öneriler birbirinden ayrılmalı.
- Fiyat, kapasite, ulaşım süresi ve müsaitlik gibi değişebilen bilgiler için güncelleme süreci oluşturulmalı.
- Başlıklar, açıklamalar ve listeler kullanıcıların kolayca anlayabileceği biçimde yazılmalı.
- Yapay zekâ tarafından alıntılanabilecek kısa, doğrudan ve bağlamı açık cevaplar hazırlanmalı.

## 16. AI-ready içerik yapısı

Önemli sayfalarda uygun olduğunda aşağıdaki yapıyı uygula:

1. Konuyu doğrudan açıklayan bir giriş.
2. İşletme veya hizmet hakkında doğrulanmış temel bilgiler.
3. Kullanıcının temel sorusuna açık cevap.
4. Ayrıntılı açıklamalar.
5. Uygun olduğunda tablo, liste veya karşılaştırma.
6. İlgili SSS bölümü.
7. Güncellik veya kaynak bilgisi.
8. İlgili hizmet ve iletişim sayfalarına iç bağlantılar.
9. Kullanıcıya uygun bir sonraki adımı gösteren CTA.

Cevapları gereksiz uzatma; ancak önemli koşulları ve istisnaları da çıkarma.

## 17. llms.txt ve makine tarafından okunabilir belgeler

Mevcut site mimarisini değerlendirerek `llms.txt` gibi yardımcı belgelerin faydalı olup olmayacağını belirle.

Uygulanacaksa:

- İşletmenin kimliğini doğru tanımla.
- Temel hizmet ve bilgi sayfalarına bağlantılar ekle.
- Yalnızca herkese açık içerikleri listele.
- Belgeyi güncel tut.
- `robots.txt` ve sitemap yapılandırmasıyla çelişki oluşturma.
- İçeriği gereksiz anahtar kelimelerle doldurma.

Bu dosyayı Google sıralaması veya yapay zekâlarda görünürlük için zorunlu bir standart olarak değerlendirme. Temel taranabilirlik, kaliteli içerik ve doğru teknik SEO her zaman önceliklidir.

## 18. Kaynak gösterilebilirlik ve bilgi güvenilirliği

İçeriğin başka sistemler tarafından doğru anlaşılmasını ve gerektiğinde referans alınmasını kolaylaştır.

- İşletme tarafından doğrulanmış bilgileri açıkça belirt.
- İstatistik veya sektörel iddialarda güvenilir kaynak kullan.
- Kaynak tarihlerini ve güncellik bilgilerini koru.
- Gerçek olmayan ödül, uzmanlık, deneyim yılı veya müşteri sayısı yazma.
- Sahte basın haberleri ve uydurma referanslar oluşturma.
- İşletmenin gerçekten sunduğu hizmetleri rakiplerin hizmetlerinden ayır.
- Yerel bilgilerde resmî belediye, ulaşım işletmesi veya ilgili kurum kaynaklarını tercih et.
- Birbirini tekrar eden, anlamsal olarak aynı içeriklerin farklı URL'lerde çoğalmasını önle.

## 19. Yapay zekâ ile içerik üretim kuralları

Programatik veya yapay zekâ destekli içerik üretimi gerekiyorsa:

- Her sayfanın gerçek bir kullanıcı ihtiyacını karşıladığını doğrula.
- Şehir ve ilçe adlarını değiştirerek aynı içeriğin yüzlerce kopyasını üretme.
- Gerçek olmayan yerel deneyimler, ulaşım süreleri, tesis özellikleri ve işletme bilgileri oluşturma.
- Her yerel sayfaya gerçekten o lokasyona özgü, doğrulanabilir ve faydalı bilgi ekle.
- Yeterli özgün değer sunamayan sayfaları yayımlama.
- İnce içerik, doorway page, otomatik anahtar kelime sayfaları ve ölçekli içerik spam'i risklerini denetle.
- Gerekli olduğunda sayfaları birleştir, noindex uygula veya uygun yönlendirmeler yap.
- Yayımdan önce içerik kalitesi, doğruluk ve yinelenen içerik kontrolleri çalıştır.

Amaç sayfa sayısını artırmak değil, kaliteli ve sürdürülebilir organik görünürlük oluşturmaktır.

---

# BÖLÜM V — İÇERİK MİMARİSİ VE LOCAL TOPICAL AUTHORITY

## 20. Ana sayfa ve temel ticari sayfalar

Ana sayfa aşağıdaki soruları net cevaplamalı:

- İşletme nedir?
- Hangi hizmetleri sunuyor?
- Hangi bölgede hizmet veriyor?
- Hangi özellikleri veya olanakları sunuyor?
- Müşteri nasıl iletişime geçebilir veya rezervasyon yapabilir?
- İşletmenin gerçek güven unsurları nelerdir?

İşletmenin faaliyet alanına göre aşağıdaki sayfaları değerlendir:

- Hakkımızda.
- Hizmetler veya konaklama seçenekleri.
- Oda/daire veya hizmet detayları.
- Fiyatlar ve koşullar.
- İletişim.
- SSS.
- İptal ve iade koşulları.
- Gizlilik ve KVKK.
- Blog veya yerel rehberler.

Her sayfayı yalnızca gerektiği zaman oluştur. Sırf SEO için boş veya gereksiz sayfalar üretme.

## 21. Yerel içerik kümeleri

İşletmenin gerçek konumunu ve hizmet alanını esas alarak yerel konu kümeleri oluştur.

Konaklama işletmesi için örnek konular:

- Mersin'de gezilecek yerler.
- İşletmenin bulunduğu bölgeye ulaşım.
- Otogar, havalimanı veya sahil ulaşımı.
- Yakındaki gerçek turistik noktalar.
- Aileler, iş seyahatinde olanlar veya uzun süreli konaklayanlar için uygun seçenekler.
- Konaklama öncesinde bilinmesi gerekenler.
- Otopark, mutfak, evcil hayvan ve giriş-çıkış politikaları.

Bu konuların tamamı ancak işletme için gerçekten anlamlıysa uygulanmalıdır.

Her rehber sayfası:

- Kendine özgü bir arama amacına sahip olmalı.
- Gerçek ve doğrulanabilir yerel bilgiler içermeli.
- Gerekli olduğunda resmî kaynaklara bağlantı vermeli.
- İşletmenin konumuyla ilişkisini açıklamalı.
- İlgili ticari sayfalara doğal iç bağlantılar içermeli.
- Gereksiz anahtar kelime tekrarından kaçınmalı.

## 22. Anahtar kelime ve arama niyeti haritası

İçerik oluşturmadan önce bir keyword map hazırla.

Her sayfa için:

- Ana arama amacı.
- Birincil konu.
- İkincil konular.
- Kullanıcı soruları.
- Hedef URL.
- Title ve meta description.
- H1 ve alt başlıklar.
- İç bağlantı hedefleri.
- Dönüşüm amacı.

Aynı arama niyetine sahip sayfaların birbiriyle rekabet etmesini önle.

Arama hacmi, rekabet ve dönüşüm potansiyeli verileri yoksa tahminleri gerçek ölçüm gibi sunma. Önceliklendirmeyi mevcut Search Console ve analitik verileriyle doğrula.

## 23. İç bağlantı ve bilgi mimarisi

- Önemli ticari sayfalara kısa ve mantıklı bir tıklama mesafesinden ulaşılabilmeli.
- İlgili rehberler ve hizmet sayfaları arasında doğal bağlantılar kurulmalı.
- Breadcrumb navigasyonu uygulanmalı.
- Kırık iç bağlantılar tespit edilmeli.
- Yetim sayfalar bulunmalı.
- Menü, footer ve bağlamsal bağlantılar arasında mantıklı bir hiyerarşi kurulmalı.
- Bağlantı metinleri hedef sayfayı doğru tanımlamalı.
- Her sayfada gereksiz sayıda site geneli bağlantı oluşturmaktan kaçınılmalı.

---

# BÖLÜM VI — UX/UI VE DÖNÜŞÜM OPTİMİZASYONU

## 24. Mobil öncelikli deneyim

Tasarımı gerçek mobil kullanım senaryolarına göre test et.

- Mobil menü sorunsuz çalışmalı.
- Yazı boyutları ve satır aralıkları okunabilir olmalı.
- Görseller ekran genişliğine uygun yüklenmeli.
- Yatay taşma olmamalı.
- Sabit CTA öğeleri önemli içeriği kapatmamalı.
- Formlar mobil klavyelerle uyumlu olmalı.
- Dokunmatik alanlar erişilebilir olmalı.
- Kritik iletişim ve rezervasyon akışları mümkün olduğunca az adım içermeli.

## 25. CTA ve rezervasyon senaryoları

İşletmenin faaliyet alanına uygun birincil ve ikincil CTA'lar belirle.

Örnekler:

- Hemen Ara.
- WhatsApp ile İletişim.
- Rezervasyon Yap.
- Müsaitlik Sor.
- Fiyat Bilgisi Al.
- Yol Tarifi Al.

Kurallar:

- CTA'lar gerçek hedeflere bağlanmalı.
- Telefon bağlantılarında uygun `tel:` kullanımı uygulanmalı.
- WhatsApp bağlantıları doğru işletme numarasını kullanmalı.
- Rezervasyon butonu gerçek rezervasyon akışına yönlendirmeli.
- Sabit mobil CTA'lar sayfa deneyimini bozmamalı.
- Buton tıklamaları ölçülebilir olmalı.
- Gönderim sonrasında açık başarı veya hata durumu gösterilmeli.
- Çalışmayan, boş veya yalnızca görsel amaçlı buton bırakılmamalı.

## 26. Fiyat, hizmet ve oda bilgilerinin sunulması

Konaklama işletmesi için gerçek veri mevcutsa:

- Oda veya daire türü.
- Kapasite.
- Metrekare.
- Yatak düzeni.
- Gerçek olanaklar.
- Fiyatlandırma yöntemi.
- Vergi ve ek ücret koşulları.
- Giriş-çıkış saatleri.
- İptal ve iade politikası.
- Rezervasyon ve müsaitlik durumu.

Fiyatlar değişkense son güncelleme ve geçerlilik koşullarını belirt.

Canlı rezervasyon altyapısı yoksa gerçek zamanlı müsaitlik varmış gibi davranma. Fiyatı belirlenmemiş alanlara rastgele rakam koyma.

## 27. Güven unsurları

Yalnızca doğrulanabilir güven unsurlarını göster:

- Gerçek işletme fotoğrafları.
- Gerçek müşteri değerlendirmeleri.
- Açık iletişim bilgileri.
- Gerçek işletme adresi veya hizmet bölgesi.
- Şeffaf hizmet ve fiyat koşulları.
- Gerçek sertifika ve belgeler.
- Gizlilik, KVKK ve uygun hukuki bilgilendirmeler.

İşletmenin ticari unvanı, vergi bilgileri ve diğer hukuki bilgileri yalnızca doğru ve yayımlanması uygun olduğunda gösterilmelidir. Hukuki metinler için gerektiğinde uzman incelemesi talep et.

Google yorumlarını siteye entegre edeceksen resmî ve izin verilen yöntemleri tercih et. API veya üçüncü taraf araç kullanılıyorsa lisans, kota, gizlilik ve veri güncelliği koşullarını denetle.

---

# BÖLÜM VII — CORE WEB VITALS VE PERFORMANS

## 28. Performans hedefleri

Gerçek kullanıcı verileri ve laboratuvar testleri üzerinden performansı ölç.

Core Web Vitals hedefleri, mümkün olduğunda mobil ve masaüstünde 75. yüzdelik dilimde:

- LCP: 2,5 saniye veya daha az.
- INP: 200 milisaniye veya daha az.
- CLS: 0,1 veya daha az.

Ek hedefler:

- İlk sunucu yanıt süresini iyileştir.
- Gereksiz JavaScript yükünü azalt.
- Kritik CSS ve font yüklemelerini optimize et.
- Görselleri WebP/AVIF gibi uygun formatlarda sun.
- Responsive görseller için `srcset` ve `sizes` kullan.
- Ekran dışındaki görsellerde lazy loading uygula.
- Ana görünümdeki kritik görselleri gereksiz şekilde lazy-load etme.
- Gerektiğinde doğru görsel için ön yükleme uygula.
- Font dosyalarını ve üçüncü taraf script'lerini optimize et.
- Önbellek ve CDN ayarlarını değerlendir.
- Büyük ve kullanılmayan paketleri tespit et.

Sayfa yüklenme süresinin her koşulda iki saniyenin altında olacağını garanti etme. Hedefleri gerçek testlerle değerlendir.

## 29. Performans doğrulaması

- Lighthouse.
- PageSpeed Insights.
- Chrome DevTools.
- Uygun olduğunda gerçek kullanıcı verileri (CrUX/RUM).
- JavaScript bundle analizi.
- Ağ istekleri ve üçüncü taraf script denetimi.

Her testte URL, cihaz tipi, ölçüm koşulları, önceki değerler ve sonraki değerler kaydedilmelidir.

Sadece tek bir Lighthouse puanına bakarak performansın başarılı olduğunu ilan etme.

---

# BÖLÜM VIII — GÜVENLİK, KVKK VE GİZLİLİK

## 30. Teknik güvenlik

- HTTPS ve geçerli SSL sertifikasını kontrol et.
- Güvenlik başlıklarını mevcut mimariye uygun şekilde değerlendir.
- Content Security Policy uygulanacaksa mevcut script ve entegrasyonları bozmadan yapılandır.
- Formlarda sunucu tarafı doğrulama uygula.
- Spam ve otomatik form gönderimlerine karşı uygun önlemler kullan.
- API anahtarlarını istemci koduna gömme.
- Yönetim alanlarını uygun erişim kontrolleriyle koru.
- Gereksiz açık API uçlarını ve hassas hata mesajlarını kaldır.
- Bağımlılıkların güvenlik açıklarını kontrol et.
- Günlüklerde hassas kişisel verileri gereksiz yere tutma.

## 31. KVKK, çerezler ve veri toplama

- Kullanılan analitik, reklam ve üçüncü taraf araçları envanterle.
- Çerez ve veri işleme davranışlarını incele.
- Gerekli hukuki bilgilendirmeleri erişilebilir kıl.
- Uygulanabilir mevzuat ve rıza gerekliliklerine uygun bir consent yönetimi planla.
- Gerekli olduğu durumlarda kullanıcı tercihlerinden önce ilgili izleme teknolojilerinin çalışmasını engelle.
- Rıza geri çekme ve tercih değiştirme akışlarını kontrol et.
- Kişisel verileri URL parametrelerine, analitik olaylarına veya hata günlüklerine sızdırma.
- İletişim formlarında yalnızca gerekli bilgileri iste.
- Saklama ve silme süreçlerini değerlendir.

Google Consent Mode veya benzeri araçlar gerekiyorsa doğru şekilde yapılandır; bunların hukuki rızanın yerine geçtiğini varsayma.

---

# BÖLÜM IX — GA4, GTM VE DÖNÜŞÜM ÖLÇÜMÜ

## 32. Analitik altyapısı

Mevcut entegrasyonları kontrol et ve eksik olanları uygula.

- Google Analytics 4.
- Google Tag Manager.
- Google Search Console.
- Uygun olduğunda Google Ads dönüşüm izleme.
- Uygun olduğunda çağrı ve WhatsApp dönüşüm takibi.

Aynı ölçüm etiketinin birden fazla kez çalışmasını önle.

### 32.1. İzlenecek olaylar

İşletmenin faaliyet alanına göre:

- `click_to_call`
- `click_whatsapp`
- `click_directions`
- `contact_form_start`
- `contact_form_submit`
- `booking_start`
- `booking_complete`
- `view_room` veya ilgili hizmet görüntüleme olayı.

Bunlar gerektiğinde GA4'e uygun özel olaylar olarak tanımlanabilir. İsimleri ve parametreleri tutarlı olmalı.

- Başarılı form gönderimini yalnızca butona tıklanmasına göre sayma.
- Gerçek rezervasyon tamamlanması ile rezervasyon başlatılmasını ayır.
- Olayların test ve canlı ortamlarında doğru çalıştığını doğrula.
- Kişisel verileri olay parametrelerine ekleme.
- Dönüşümlerin yinelenmesini önle.
- Uygun testlerde DebugView ve gerçek zamanlı raporları kullan.

## 33. Raporlama ve KPI'lar

Başlangıç ölçümlerini kaydet ve sonraki performansı karşılaştır.

İzlenecek göstergeler:

- Organik tıklamalar ve gösterimler.
- Organik tıklama oranı.
- Hedef sorguların görünürlüğü.
- İndekslenebilir ve indekslenmiş sayfalar.
- Search Console tarama ve indeksleme hataları.
- Google Business Profile etkileşimleri.
- Telefon, yol tarifi ve web sitesi tıklamaları.
- WhatsApp ve form dönüşümleri.
- Gerçek rezervasyonlar veya nitelikli talepler.
- Mobil performans ve Core Web Vitals.
- Dönüşüm oranı ve mümkünse dönüşüm başına maliyet.

Ölçüm altyapısı mevcut değilse ilk aşamada gerçek başlangıç değerlerini oluştur. Veri olmadan büyüme yüzdesi veya sıralama artışı uydurma.

---

# BÖLÜM X — İÇERİK VE TEKNİK KALİTE KONTROLLERİ

## 34. Otomatik kalite güvence sistemi

Mümkün olduğunca mevcut test altyapısına aşağıdaki kontrolleri ekle:

- Build ve type-check.
- Lint.
- Birim ve entegrasyon testleri.
- Önemli sayfalar için smoke testleri.
- Kırık bağlantı kontrolü.
- Title ve description eksikliği kontrolü.
- Yinelenen title, canonical ve meta kontrolü.
- Sitemap URL doğrulaması.
- Robots.txt erişim kontrolü.
- JSON-LD parse ve şema kontrolü.
- Görsellerin eksik yüklenmesi.
- Form ve CTA hedefleri.
- Mobil yatay taşma ve kritik erişilebilirlik sorunları.
- Kritik sayfalarda 404, 5xx ve yönlendirme zincirleri.

Testler başarısız olduğunda sorunu gizleme veya testi geçmek için kontrolü devre dışı bırakma. Hatanın nedenini ve çözümünü raporla.

---

# BÖLÜM XI — ÖNCELİKLENDİRİLMİŞ UYGULAMA PLANI

Aşağıdaki sırayı takip et. Acil teknik engeller tespit edilirse öncelikleri gerekçeli biçimde değiştirebilirsin.

## Faz 1 — Audit ve başlangıç durumu

- Repository ve mimari incelemesi.
- Mevcut SEO ve analitik denetimi.
- Teknik hata envanteri.
- NAP ve işletme bilgileri doğrulaması.
- Temel performans ölçümü.
- Mevcut indeksleme sorunlarının sınıflandırılması.
- Eksik erişimler ve kullanıcıdan gereken bilgiler.

**Çıktı:** Önceliklendirilmiş teknik denetim ve değişiklik planı.

## Faz 2 — Kritik teknik düzeltmeler

- HTTP ve HTTPS davranışları.
- Canonical ve yönlendirmeler.
- Robots.txt.
- XML sitemap.
- Meta etiketleri.
- Render ve indekslenebilirlik.
- Bozuk bağlantılar ve 404 sorunları.
- Kritik performans problemleri.

**Çıktı:** Düzeltilmiş ve test edilmiş teknik altyapı.

## Faz 3 — Entity ve Schema.org

- Doğru işletme türü.
- JSON-LD.
- BreadcrumbList.
- WebSite ve WebPage.
- Uygun olduğunda FAQPage ve ilgili sayfa şemaları.
- SameAs bağlantıları.
- Gerçek işletme verilerinin tutarlılığı.

**Çıktı:** Doğrulanmış yapılandırılmış veri raporu.

## Faz 4 — İçerik ve GEO/AIO

- Ana sayfa ve ticari sayfalar.
- Kullanıcı sorularına doğrudan cevaplar.
- SSS.
- Yerel rehberler.
- İç bağlantı mimarisi.
- Yinelenen veya değersiz sayfaların iyileştirilmesi.
- Gerekli olduğunda llms.txt.
- İçerik doğruluğu ve kaynak kontrolleri.

**Çıktı:** Sayfa bazında içerik ve iç bağlantı planı, uygulanmış değişiklikler.

## Faz 5 — UX/UI ve dönüşüm

- Mobil deneyim.
- Telefon ve WhatsApp bağlantıları.
- Rezervasyon veya iletişim akışları.
- Güven unsurları.
- Erişilebilirlik.
- Form doğrulama.
- CTA olaylarının izlenmesi.

**Çıktı:** Test edilmiş dönüşüm akışları.

## Faz 6 — Google Business Profile

- Profil doğruluğu.
- Kategori ve hizmet kontrolü.
- Fotoğraf ve video ihtiyaç listesi.
- Yorum yönetim süreci.
- Gerçek SSS ve gönderi takvimi.
- Dış erişim gerektiren işlemler.

**Çıktı:** Uygulama kontrol listesi ve tamamlanamayan dış işlemler.

## Faz 7 — Ölçüm ve yayına hazırlık

- GA4/GTM doğrulaması.
- Dönüşüm olayları.
- Build, lint ve type-check.
- Kritik sayfa testleri.
- Lighthouse ve mobil kontroller.
- Schema ve sitemap doğrulaması.
- Yayın öncesi regresyon testleri.

**Çıktı:** Yayına hazır olma raporu ve kalan riskler.

---

# BÖLÜM XII — KABUL KRİTERLERİ VE SON RAPOR

Görevin tamamlandığını söylemeden önce aşağıdaki maddeleri kontrol et.

## A. Teknik SEO

- [ ] Önemli sayfalar doğru HTTP yanıtı veriyor.
- [ ] Canonical etiketleri doğru.
- [ ] Sitemap yalnızca uygun URL'leri içeriyor.
- [ ] Robots.txt önemli içerikleri yanlışlıkla engellemiyor.
- [ ] Meta etiketleri sayfa bazında doğru.
- [ ] Kritik JavaScript render sorunları giderildi.
- [ ] Kırık bağlantılar ve yönlendirme sorunları kontrol edildi.

## B. Schema ve entity

- [ ] İşletme türü doğru seçildi.
- [ ] JSON-LD geçerli.
- [ ] Yapılandırılmış veri görünür içerikle tutarlı.
- [ ] Sahte veya doğrulanmamış işletme bilgisi yok.
- [ ] Aynı işletme için çelişkili entity tanımları bulunmuyor.
- [ ] `sameAs` bağlantıları doğrulandı.

## C. GEO/AIO ve içerik

- [ ] Önemli bilgiler HTML metni olarak erişilebilir.
- [ ] İçerikler gerçek kullanıcı ihtiyaçlarını karşılıyor.
- [ ] Yerel içerikler özgün ve doğrulanabilir.
- [ ] Yinelenen ve değersiz sayfalar kontrol edildi.
- [ ] İç bağlantı mimarisi doğrulandı.
- [ ] AI tarayıcı politikası bilinçli biçimde yapılandırıldı.

## D. UX, performans ve dönüşüm

- [ ] Mobil deneyim kontrol edildi.
- [ ] CTA'lar doğru hedeflere bağlandı.
- [ ] Formlar test edildi.
- [ ] Performans ölçümleri kaydedildi.
- [ ] Erişilebilirlik sorunları kontrol edildi.
- [ ] Analitik olayları doğrulandı.

## E. Yayına hazırlık

- [ ] Build başarılı.
- [ ] Type-check başarılı.
- [ ] Mevcut testler başarılı.
- [ ] Kritik regresyon sorunu yok.
- [ ] Güvenlik açısından kritik açık tespit edilmedi veya açıkça raporlandı.
- [ ] Deployment gerektiren adımlar belirtildi.
- [ ] Dış hesaplarda tamamlanması gereken işlemler listelendi.

### Son rapor formatı

Uygulama sonunda aşağıdaki bölümleri içeren bir rapor üret:

**1. Yönetici özeti**
- Başlangıç durumu.
- En kritik problemler.
- Uygulanan iyileştirmeler.
- Kalan engeller.

**2. Değiştirilen dosyalar**
Her dosya için:
- Dosya yolu.
- Yapılan değişiklik.
- Değişikliğin amacı.
- Test ve doğrulama sonucu.

**3. Teknik SEO raporu**
- Robots.txt.
- Sitemap.
- Canonical.
- Meta etiketleri.
- HTTP ve yönlendirmeler.
- Render ve indekslenebilirlik.

**4. Schema.org raporu**
- Kullanılan şema türleri.
- Doğrulama sonuçları.
- Kalan hatalar ve uyarılar.

**5. GEO/AIO ve içerik raporu**
- İçerik yapısı.
- Entity tutarlılığı.
- Yerel içerikler.
- İç bağlantılar.
- Bot erişim politikası.

**6. UX, performans ve analitik**
- Önceki ve sonraki ölçümler.
- Test edilen CTA ve form akışları.
- GA4/GTM olaylarının durumu.
- Bilinen performans ve kullanılabilirlik sorunları.

**7. Google Business Profile**
- Doğrulanmış alanlar.
- Eksik işletme bilgileri.
- Gerçek fotoğraf ihtiyaçları.
- Kullanıcı veya hesap sahibi müdahalesi gerektiren işlemler.

**8. Test sonuçları**
Her kontrol için `TAMAMLANDI`, `KISMEN TAMAMLANDI`, `ENGELLENDİ` veya `UYGULANMADI` durumu, kullanılan test yöntemi ve somut kanıt.

**9. Kalan işler**
Öncelik sırasına göre:
- P0: Kritik güvenlik, erişim veya işlev sorunları.
- P1: İndekslenebilirlik, dönüşüm veya önemli teknik SEO sorunları.
- P2: İçerik, performans ve kullanılabilirlik iyileştirmeleri.
- P3: İleri optimizasyonlar ve gelecekteki geliştirmeler.

**10. Yayın kararı**
- Yayına hazır mı?
- Hangi riskler kaldı?
- Hangi işlemler için dış hesap erişimi gerekiyor?
- Hangi sonuçlar henüz gerçek verilerle doğrulanamıyor?

## SON TALİMAT

Şimdi mevcut projeyi inceleyerek işe başla. Önce gerçek durumu tespit et; ardından önceliklendirilmiş uygulama planını çıkar ve kod değişikliklerini gerçekleştir.

Bana yalnızca yapılması gerekenleri anlatan bir rapor sunma. Erişimin ve teknik imkânların dâhilinde gerçek değişiklikleri uygula, test et ve sonuçlarını kanıtla.

Herhangi bir özelliğin uygulanması mümkün değilse nedenini, gerekli erişimi ve tamamlanması için gereken adımları belirt.

**Başarı kriteri:** Sadece daha fazla SEO kodu eklemek değil; teknik olarak sağlam, hızlı, erişilebilir, güvenilir, kullanıcı odaklı ve ölçülebilir bir dijital varlık oluşturmaktır.

Hiçbir sıralama, indekslenme, Google Haritalar konumu veya yapay zekâ tarafından önerilme sonucu garanti edilmemelidir. Sonuçlar ölçülmeli, raporlanmalı ve gerçek verilere göre sürekli iyileştirilmelidir.
