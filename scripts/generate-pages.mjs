import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteDir = path.join(projectRoot, 'site');
const LOGO_PATH = '/manus-storage/mersin-apart-otel-logo-optimized_32bec3c0.webp';
const FAVICON_PATH = '/manus-storage/mersin-apart-otel-favicon-192_8b17f617.png';
const PHONE_E164 = '+905332661288';
const PHONE_DISPLAY = '+90 533 266 12 88';
const WHATSAPP_NUMBER = '905332661288';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Merhaba, Mersin Apart Otel için konaklama ve güncel müsaitlik hakkında bilgi almak istiyorum.')}`;
const phoneLink = (label = PHONE_DISPLAY, className = 'contact-phone') => `<a class="${className}" href="tel:${PHONE_E164}">${label}</a>`;
const whatsappLink = (label = 'WhatsApp', className = 'contact-whatsapp') => `<a class="${className}" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export const pages = [
  {
    route: '/odalar/',
    title: 'Mersin Apart Otel Odaları | 3 Seçenek',
    description: 'Mersin Apart Otel odalarını kişi kapasitesi, metrekare, manzara ve yayımlı başlangıç fiyatlarıyla karşılaştırın.',
    keywords: ['Mersin apart otel odaları', 'Mersin oda seçenekleri', 'Cami Şerif konaklama', 'Akdeniz otel odaları'],
    eyebrow: 'KONAKLAMA SEÇENEKLERİ',
    h1: 'Size uygun oda hangisi?',
    intro: 'Bahçe Odası, Şehir Suiti ve Aile Suiti seçeneklerini alan, kişi kapasitesi, manzara ve başlangıç tutarlarıyla karşılaştırın. Ücret ve müsaitliği konaklama tarihiniz için doğrudan işletmeden teyit edin.',
    crumbs: ['Odalar'],
    body: `
      <section class="page-section" aria-labelledby="room-options-title">
        <h2 id="room-options-title">Üç farklı konaklama seçeneği</h2>
        <div class="page-room-grid">
          <article class="page-room-card">
            <img src="/manus-storage/mersin-apart-otel-butik-yatak-odasi_8cb5f66e.jpeg" alt="Bahçe Odası yatak ve oda iç mekânı" width="1536" height="2048" loading="lazy">
            <div class="page-room-card-body"><p class="page-price">₺2.100’den <span>/ gece</span></p><h3><a href="/odalar/bahce-odasi/">Bahçe Odası</a></h3><p>Zemin katta, bahçe manzaralı; çalışma köşesi bulunan oda.</p><ul class="room-specs"><li>2 kişi</li><li>28 m²</li><li>Bahçe manzarası</li></ul><a class="text-link" href="/odalar/bahce-odasi/">Oda detayları <span aria-hidden="true">→</span></a></div>
          </article>
          <article class="page-room-card">
            <img src="/manus-storage/mersin-apart-otel-ahsap-konsept-oda_0ab097b8.jpeg" alt="Şehir Suiti ahşap konseptli yatak odası" width="1536" height="2048" loading="lazy">
            <div class="page-room-card-body"><p class="page-price">₺2.900’den <span>/ gece</span></p><h3><a href="/odalar/sehir-suiti/">Şehir Suiti</a></h3><p>Oturma alanı, şehir manzarası ve daha geniş oda alanı.</p><ul class="room-specs"><li>3 kişi</li><li>42 m²</li><li>Şehir manzarası</li></ul><a class="text-link" href="/odalar/sehir-suiti/">Oda detayları <span aria-hidden="true">→</span></a></div>
          </article>
          <article class="page-room-card">
            <img src="/manus-storage/mersin-apart-otel-oda-oturma-alani_afb6869d.jpeg" alt="Aile Suiti yatak ve oturma alanı" width="1536" height="2048" loading="lazy">
            <div class="page-room-card-body"><p class="page-price">₺3.400’den <span>/ gece</span></p><h3><a href="/odalar/aile-suiti/">Aile Suiti</a></h3><p>Dört kişiye kadar kapasite ve geniş yaşam alanı.</p><ul class="room-specs"><li>4 kişi</li><li>52 m²</li><li>Geniş salon</li></ul><a class="text-link" href="/odalar/aile-suiti/">Oda detayları <span aria-hidden="true">→</span></a></div>
          </article>
        </div>
        <p class="content-note">Bunlar kaynak sitede yayımlanmış başlangıç fiyatlarıdır; tarih ve oda tipine göre değişebilir. Güncel fiyat ve müsaitlik için <a href="/fiyatlar/">fiyat bilgisi sayfasına</a> göz atın veya doğrudan ulaşın.</p>
      </section>
      <section class="page-section content-split" aria-labelledby="choose-room-title"><div><p class="eyebrow">SEÇİM REHBERİ</p><h2 id="choose-room-title">Önce kişi sayısı ve tarihinizi belirleyin.</h2></div><div><p>İki kişi için Bahçe Odası, üç kişi için Şehir Suiti, dört kişiye kadar konaklama için Aile Suiti seçeneklerini inceleyin. Bu bilgiler oda kapasitelerini karşılaştırmaya yardımcı olur; müsaitlik veya rezervasyon onayı değildir.</p><a class="text-link" href="/rezervasyon/">Talep adımlarını görün <span aria-hidden="true">→</span></a></div></section>`,
  },
  {
    route: '/odalar/bahce-odasi/',
    title: 'Bahçe Odası | Mersin Apart Otel',
    description: '28 m² zemin kat Bahçe Odası; 2 kişi, bahçe manzarası ve çalışma köşesi. Tarih ve güncel fiyatı doğrudan sorun.',
    keywords: ['Bahçe Odası Mersin', 'Mersin apart oda', 'Cami Şerif otel odası', '2 kişilik oda Mersin'],
    eyebrow: 'ODA DETAYI · 01',
    h1: 'Bahçe Odası',
    intro: 'Mersin Apart Otel’de iki kişilik, 28 m² zemin kat oda seçeneği. Çalışma köşesi ve bahçe manzarasıyla ilgili yayımlı bilgileri ve başlangıç ücretini inceleyin.',
    crumbs: ['Odalar', 'Bahçe Odası'],
    body: `
      <section class="room-detail page-section" aria-label="Bahçe Odası özellikleri">
        <figure class="room-detail-photo"><img src="/manus-storage/mersin-apart-otel-butik-yatak-odasi_8cb5f66e.jpeg" alt="Bahçe Odası yatak bölümü ve oda iç mekânı" width="1536" height="2048"><figcaption>Mersin Apart Otel · Bahçe Odası</figcaption></figure>
        <div class="room-detail-info"><p class="page-price">₺2.100’den <span>/ gece</span></p><ul class="spec-list"><li><strong>Kapasite</strong><span>2 kişi</span></li><li><strong>Alan</strong><span>28 m²</span></li><li><strong>Kat</strong><span>Zemin kat</span></li><li><strong>Manzara</strong><span>Bahçe</span></li><li><strong>Öne çıkan bilgi</strong><span>Çalışma köşesi ve banyo</span></li></ul>${whatsappLink('WhatsApp ile bilgi alın', 'button button-primary')}<p class="content-note">Yayımlı başlangıç fiyatıdır; tarihe ve müsaitliğe göre değişebilir.</p></div>
      </section>
      <section class="page-section" aria-labelledby="garden-room-title"><h2 id="garden-room-title">Bahçe manzaralı, zemin kat seçeneği</h2><p>Eski işletme sayfasında Bahçe Odası; 28 m², iki kişilik ve zemin katta olarak tanıtılıyor. Oda özellikleri arasında bahçe manzarası, çalışma köşesi ve banyo bilgisi yer alıyor. Güncel oda düzenini, fiyatı ve müsaitliği rezervasyon talebinden önce işletmeye sorun.</p><p>İşletme Cami Şerif’te, Mücahitler Caddesi 38/1A adresindedir. <a href="/konum/">Konum ve yol tarifini</a> ayrıca inceleyebilirsiniz.</p><a class="text-link" href="/odalar/">Tüm oda seçeneklerine dön <span aria-hidden="true">→</span></a></section>`,
  },
  {
    route: '/odalar/sehir-suiti/',
    title: 'Şehir Suiti | Mersin Apart Otel',
    description: '42 m² Şehir Suiti; 3 kişi kapasitesi, oturma alanı ve şehir manzarasıyla tanıtılıyor. Güncel fiyat ve müsaitliği sorun.',
    keywords: ['Şehir Suiti Mersin', '3 kişilik apart Mersin', 'Mersin suit oda', 'Akdeniz konaklama'],
    eyebrow: 'ODA DETAYI · 02',
    h1: 'Şehir Suiti',
    intro: 'Üç kişiye kadar kapasite ve 42 m² alanla tanıtılan oda. Oturma alanı, yatak ve şehir manzarası hakkındaki kaynak bilgilerini inceleyin.',
    crumbs: ['Odalar', 'Şehir Suiti'],
    body: `
      <section class="room-detail page-section" aria-label="Şehir Suiti özellikleri">
        <figure class="room-detail-photo"><img src="/manus-storage/mersin-apart-otel-ahsap-konsept-oda_0ab097b8.jpeg" alt="Şehir Suiti ahşap konseptli yatak odası" width="1536" height="2048"><figcaption>Mersin Apart Otel · Şehir Suiti</figcaption></figure>
        <div class="room-detail-info"><p class="page-price">₺2.900’den <span>/ gece</span></p><ul class="spec-list"><li><strong>Kapasite</strong><span>3 kişi</span></li><li><strong>Alan</strong><span>42 m²</span></li><li><strong>Manzara</strong><span>Şehir</span></li><li><strong>Öne çıkan bilgi</strong><span>Oturma alanı</span></li></ul>${whatsappLink('WhatsApp ile bilgi alın', 'button button-primary')}<p class="content-note">Yayımlı başlangıç fiyatıdır; tarihe ve müsaitliğe göre değişebilir.</p></div>
      </section>
      <section class="page-section" aria-labelledby="city-suite-title"><h2 id="city-suite-title">Üç kişilik konaklama için</h2><p>Şehir Suiti eski sitede üç kişi kapasiteli, 42 m² bir oda olarak listelenmiş; oturma alanı, rahat yatak ve şehir manzarası özellikleri belirtilmiş. Bu özet oda planı ve güncel kapasite garantisi değildir; konaklayacak kişi sayısını iletişim sırasında bildirip teyit alın.</p><p>Ücretler tarih ve müsaitliğe göre değişebilir. <a href="/fiyatlar/">Başlangıç fiyatlarını</a> karşılaştırın veya belirttiğiniz tarih için doğrudan sorun.</p><a class="text-link" href="/odalar/">Tüm oda seçeneklerine dön <span aria-hidden="true">→</span></a></section>`,
  },
  {
    route: '/odalar/aile-suiti/',
    title: 'Aile Suiti | Mersin Apart Otel',
    description: '52 m² Aile Suiti, eski sitede 4 kişi kapasitesi ve geniş salonuyla listeleniyor. Tarih, fiyat ve müsaitliği işletmeye sorun.',
    keywords: ['Aile Suiti Mersin', '4 kişilik apart otel Mersin', 'Mersin aile konaklama', 'Cami Şerif suit'],
    eyebrow: 'ODA DETAYI · 03',
    h1: 'Aile Suiti',
    intro: 'Dört kişiye kadar kapasite ve 52 m² geniş yaşam alanıyla tanıtılan oda seçeneği. Güncel oda düzeni ve tarih uygunluğunu doğrudan teyit edin.',
    crumbs: ['Odalar', 'Aile Suiti'],
    body: `
      <section class="room-detail page-section" aria-label="Aile Suiti özellikleri">
        <figure class="room-detail-photo"><img src="/manus-storage/mersin-apart-otel-oda-oturma-alani_afb6869d.jpeg" alt="Aile Suiti yatak ve oturma alanı" width="1536" height="2048"><figcaption>Mersin Apart Otel · Aile Suiti</figcaption></figure>
        <div class="room-detail-info"><p class="page-price">₺3.400’den <span>/ gece</span></p><ul class="spec-list"><li><strong>Kapasite</strong><span>4 kişi</span></li><li><strong>Alan</strong><span>52 m²</span></li><li><strong>Öne çıkan bilgi</strong><span>Geniş salon</span></li><li><strong>Kullanım</strong><span>Aile veya küçük grup</span></li></ul>${whatsappLink('WhatsApp ile bilgi alın', 'button button-primary')}<p class="content-note">Yayımlı başlangıç fiyatıdır; tarihe ve müsaitliğe göre değişebilir.</p></div>
      </section>
      <section class="page-section" aria-labelledby="family-suite-title"><h2 id="family-suite-title">Daha geniş alan isteyenlere</h2><p>Kaynak işletme sayfası Aile Suiti’ni 52 m² ve dört kişi kapasiteli olarak tanıtıyor; geniş salon/yaşam alanını öne çıkarıyor. Çocuk yatağı, bebek yatağı veya ilave yatak gibi ayrıca belirtilmemiş hizmetler varsayılmaz; ihtiyaçlarınızı rezervasyon öncesinde işletmeye sorun.</p><p>Oda ve tarih için geçerli tutarı teyit etmek üzere <a href="/iletisim/">telefon veya WhatsApp üzerinden ulaşın</a>.</p><a class="text-link" href="/odalar/">Tüm oda seçeneklerine dön <span aria-hidden="true">→</span></a></section>`,
  },
  {
    route: '/fiyatlar/',
    title: 'Mersin Apart Otel Fiyatları | Başlangıç',
    description: 'Mersin Apart Otel’de üç oda tipi için yayımlı başlangıç fiyatlarını inceleyin; tarihe göre güncel ücreti ve müsaitliği doğrudan teyit edin.',
    keywords: ['Mersin apart otel fiyatları', 'Cami Şerif otel fiyatı', 'Mersin oda ücreti', 'Akdeniz apart fiyat'],
    eyebrow: 'FİYAT BİLGİSİ',
    h1: 'Başlangıç fiyatlarını karşılaştırın.',
    intro: 'Aşağıdaki tutarlar işletmenin eski web sayfasında yayımlanmış başlangıç fiyatlarıdır. Rezervasyon öncesinde seçtiğiniz tarih için geçerli fiyatı ve müsaitliği mutlaka teyit edin.',
    crumbs: ['Fiyatlar'],
    body: `
      <section class="page-section" aria-labelledby="price-table-title"><h2 id="price-table-title">Oda tipine göre yayımlı başlangıç tutarları</h2><p class="table-scroll-hint">Telefonda tüm sütunları görmek için tabloyu yatay kaydırın.</p><p class="table-caption" id="price-table-caption">Fiyatlar eski işletme sayfasında yayımlanan başlangıç değerleridir.</p><div class="table-scroll" role="region" aria-label="Oda fiyatları tablosu; tüm sütunlar için yatay kaydırın" tabindex="0"><table class="price-table" aria-describedby="price-table-caption"><caption class="visually-hidden">Üç oda türüne göre yayımlanan başlangıç fiyatları tablosu.</caption><thead><tr><th scope="col">Oda</th><th scope="col">Kapasite</th><th scope="col">Alan</th><th scope="col">Başlangıç fiyatı</th><th scope="col">Detay</th></tr></thead><tbody><tr><th scope="row">Bahçe Odası</th><td>2 kişi</td><td>28 m²</td><td>₺2.100’den / gece</td><td><a href="/odalar/bahce-odasi/">Odayı gör</a></td></tr><tr><th scope="row">Şehir Suiti</th><td>3 kişi</td><td>42 m²</td><td>₺2.900’den / gece</td><td><a href="/odalar/sehir-suiti/">Odayı gör</a></td></tr><tr><th scope="row">Aile Suiti</th><td>4 kişi</td><td>52 m²</td><td>₺3.400’den / gece</td><td><a href="/odalar/aile-suiti/">Odayı gör</a></td></tr></tbody></table></div></section>
      <section class="page-section content-split" aria-labelledby="price-variation-title"><div><p class="eyebrow">ÖNEMLİ NOT</p><h2 id="price-variation-title">Tarih ve müsaitlik fiyatı etkiler.</h2></div><div><p>Bu web sayfası canlı fiyat veya oda envanteri sorgulamaz; başlangıç tutarları rezervasyon onayı değildir. Konaklama tarihlerinizi, oda tercihinizi ve kişi sayısını işletmeye ileterek o gün geçerli toplam tutarı sorun.</p><p>Vergi, ek yatak veya özel taleplerin ücretini bu site tahmin etmez. Bu tür ayrıntıları doğrudan teyit edin.</p><a class="text-link" href="/rezervasyon/">Fiyat sorma adımlarını görün <span aria-hidden="true">→</span></a></div></section>`,
  },
  {
    route: '/olanaklar/',
    title: 'Mersin Apart Otel Olanakları | Akdeniz',
    description: 'Mersin Apart Otel için yayımlanmış resepsiyon, klima, Wi‑Fi, kahvaltı, temizlik ve giriş-çıkış bilgileri.',
    keywords: ['Mersin apart otel olanakları', 'Cami Şerif otel hizmetleri', 'Akdeniz Wi-Fi konaklama', 'Mersin kahvaltılı apart'],
    eyebrow: 'TESİS BİLGİLERİ',
    h1: 'Konaklama olanakları',
    intro: 'Bu sayfa, işletmenin eski web sayfasında listelenen temel hizmetleri ve saatleri bir arada toplar. Rezervasyon öncesi güncel durumunu işletmeden teyit edin.',
    crumbs: ['Olanaklar'],
    body: `
      <section class="page-section" aria-labelledby="services-title"><h2 id="services-title">Eski sitede yayımlanan hizmetler</h2><div class="service-grid"><article class="service-card"><span>01</span><h3>24 saat resepsiyon</h3><p>İşletme sayfasında resepsiyonun 24 saat açık olduğu belirtiliyor.</p></article><article class="service-card"><span>02</span><h3>Klima</h3><p>Klima bilgisi oda hizmetleri arasında listeleniyor.</p></article><article class="service-card"><span>03</span><h3>Wi‑Fi</h3><p>Odalar ve ortak alanlar için kablosuz internet bilgisi yayımlanmış.</p></article><article class="service-card"><span>04</span><h3>Kahvaltı seçeneği</h3><p>Kahvaltının odada veya ortak alanda alınabildiği bilgisi yer alıyor.</p></article><article class="service-card"><span>05</span><h3>Günlük temizlik</h3><p>Günlük temizlik hizmeti olanaklar listesinde belirtiliyor.</p></article><article class="service-card"><span>06</span><h3>Giriş ve çıkış saatleri</h3><p>Yayımlı bilgi: giriş 12:30, çıkış 11:30.</p></article></div><p class="content-note">Bu içerik eski web sayfasında yayımlanan bilgilere dayanır; hizmetin güncel durumu, kapsamı ve ücretini işletmeyle teyit edin.</p></section>
      <section class="page-section" aria-labelledby="service-contact-title"><h2 id="service-contact-title">İhtiyacınızı önceden sorun</h2><p>Belirli bir oda, kahvaltı düzeni veya giriş saatiyle ilgili talebiniz varsa konaklama tarihinizle birlikte doğrudan iletin. Bu sayfa anlık hizmet veya müsaitlik bilgisi vermez.</p><a class="text-link" href="/iletisim/">İletişim yolları <span aria-hidden="true">→</span></a></section>`,
  },
  {
    route: '/konum/',
    title: 'Mersin Apart Otel Konum ve Yol Tarifi',
    description: 'Mersin Apart Otel’in Cami Şerif, Akdeniz adresini, Google Haritalar bağlantısını ve yakın çevredeki yayımlı noktaları görün.',
    keywords: ['Cami Şerif apart otel', 'Mersin otel konumu', 'Akdeniz Mersin adres', 'Mersin Google Maps otel'],
    eyebrow: 'ADRES VE YOL TARİFİ',
    h1: 'Cami Şerif’te, Akdeniz/Mersin.',
    intro: 'Mersin Apart Otel, kaynak işletme sayfasında Mücahitler Caddesi üzerindeki Cami Şerif adresiyle listeleniyor. Yol tarifi için işletmenin harita kaydını açın.',
    crumbs: ['Konum'],
    body: `
      <section class="page-section location-detail" aria-labelledby="address-title"><div class="location-detail-copy"><p class="eyebrow">TESİS ADRESİ</p><h2 id="address-title">Mersin Apart Otel</h2><address>Cami Şerif, Mücahitler Cd. 38/1A,<br>33010 Akdeniz/Mersin</address><a class="button button-primary" href="https://www.google.com/maps?cid=5585068398496024986" target="_blank" rel="noopener noreferrer">Google Haritalar’da aç <span aria-hidden="true">↗</span></a><p>${phoneLink()}</p></div><div class="location-map-card"><span class="map-ring map-ring-one"></span><span class="map-ring map-ring-two"></span><span class="map-marker" aria-hidden="true"><span></span></span><strong>Cami Şerif · Akdeniz</strong><a href="https://www.google.com/maps?cid=5585068398496024986" target="_blank" rel="noopener noreferrer">Yol tarifini aç ↗</a></div></section>
      <section class="page-section" aria-labelledby="neighbourhood-title"><h2 id="neighbourhood-title">Yakın çevrede yayımlı noktalar</h2><p>İşletmenin eski web sayfasında yakın çevrede listelenen bazı yerler ve yaklaşık yürüyüş süreleri:</p><ul class="nearby-page-list"><li><span>Gramofon Cafe Bar</span><strong>yaklaşık 1 dk</strong></li><li><span>Havuzbaşı Cafe</span><strong>yaklaşık 1 dk</strong></li><li><span>Salaş Yemekçilik</span><strong>yaklaşık 1 dk</strong></li><li><span>Gülümse Bar</span><strong>yaklaşık 1 dk</strong></li><li><span>Atatürk Parkı</span><strong>yaklaşık 5 dk</strong></li><li><span>Mersin Marina</span><strong>yaklaşık 5 dk</strong></li></ul><p class="content-note">Süreler işletmenin yayımlı yaklaşık tahminleridir; rota, trafik, yürüme temposu ve harita verisine göre değişebilir.</p></section>`,
  },
  {
    route: '/iletisim/',
    title: 'Mersin Apart Otel İletişim | Cami Şerif',
    description: 'Mersin Apart Otel’i telefonla arayın, WhatsApp’tan yazın veya Cami Şerif adresi için yol tarifi alın.',
    keywords: ['Mersin Apart Otel telefon', 'Mersin Apart Otel iletişim', 'Cami Şerif otel telefon', 'Akdeniz Mersin WhatsApp'],
    eyebrow: 'DOĞRUDAN İLETİŞİM',
    h1: 'Tarih ve fiyatı doğrudan sorun.',
    intro: 'İşletmeye telefonla ulaşın veya WhatsApp’ta mesaj taslağı açın. Bu web sitesi mesajı göndermez; taslağı kontrol edip göndermek size kalır.',
    crumbs: ['İletişim'],
    body: `
      <section class="page-section contact-choice-grid" aria-label="İletişim yolları"><article class="contact-choice"><span>01 · TELEFON</span><h2>Arayın</h2><p>Oda tipi, kişi sayısı ve konaklama tarihinizi belirterek güncel ücret ve müsaitlik sorun.</p>${phoneLink()}</article><article class="contact-choice"><span>02 · WHATSAPP</span><h2>Mesaj taslağı açın</h2><p>Mesajı göndermeden önce içeriği kontrol edin; mesajı göndermek sizin kararınızdır.</p>${whatsappLink('WhatsApp’tan yaz')}</article></section>
      <section class="page-section content-split" aria-labelledby="contact-address-title"><div><p class="eyebrow">ADRES</p><h2 id="contact-address-title">Cami Şerif, Mersin</h2></div><div><address>Cami Şerif, Mücahitler Cd. 38/1A,<br>33010 Akdeniz/Mersin</address><p><a class="text-link" href="https://www.google.com/maps?cid=5585068398496024986" target="_blank" rel="noopener noreferrer">Haritada yol tarifi alın <span aria-hidden="true">↗</span></a></p><p>İşletmenin yayımlı telefon numarası ${phoneLink()}.</p></div></section>
      <p class="content-note">Bu sayfada çevrimiçi müsaitlik kontrolü, anında rezervasyon onayı veya ödeme adımı bulunmaz. Güncel şartları işletmeden teyit edin.</p>`,
  },
  {
    route: '/sss/',
    title: 'Mersin Apart Otel Sık Sorulan Sorular',
    description: 'Oda kapasiteleri, başlangıç fiyatları, adres, yayımlı giriş-çıkış saatleri ve Mersin Apart Otel ile iletişim hakkında yanıtlar.',
    keywords: ['Mersin apart otel SSS', 'Mersin otel fiyat bilgisi', 'Cami Şerif otel adres', 'Mersin oda kapasitesi'],
    eyebrow: 'YARDIM VE BİLGİ',
    h1: 'Sık sorulan sorular',
    intro: 'Oda seçimi, eski sitede yayımlanmış başlangıç fiyatları, adres ve iletişim süreciyle ilgili kısa yanıtlar. Güncel koşulları rezervasyon öncesi doğrudan sorun.',
    crumbs: ['Sık sorulanlar'],
    body: `
      <section class="page-section page-faq-list" aria-label="Sık sorulan sorular">
        <details open><summary>Kaç oda seçeneği var?</summary><p>Bu sitede üç seçenek listeleniyor: 2 kişi/28 m² Bahçe Odası, 3 kişi/42 m² Şehir Suiti ve 4 kişi/52 m² Aile Suiti. Kapasiteyi ve oda düzenini işletmeyle teyit edin. <a href="/odalar/">Oda karşılaştırmasını görün.</a></p></details>
        <details><summary>Fiyatlar hangi tutardan başlıyor?</summary><p>Kaynak işletme sayfasında Bahçe Odası ₺2.100’den, Şehir Suiti ₺2.900’den, Aile Suiti ₺3.400’den gecelik başlangıç fiyatıyla yayımlanmıştı. Tutarlar tarihe ve müsaitliğe göre değişebilir. <a href="/fiyatlar/">Fiyat tablosunu inceleyin.</a></p></details>
        <details><summary>Bu siteden rezervasyon kesinleşir mi?</summary><p>Hayır. Site müsaitlik denetlemez, rezervasyon onayı vermez ve ödeme almaz. Tarih ve oda tercihini telefon veya WhatsApp ile iletip işletmeden teyit alın. <a href="/rezervasyon/">Talep adımlarını görün.</a></p></details>
        <details><summary>Otelin adresi nedir?</summary><p>Cami Şerif, Mücahitler Cd. 38/1A, 33010 Akdeniz/Mersin. <a href="/konum/">Harita ve yakın çevre bilgilerine bakın.</a></p></details>
        <details><summary>Giriş ve çıkış saatleri nedir?</summary><p>Eski işletme web sayfasında giriş 12:30, çıkış 11:30 olarak yayımlanmıştı. Güncel saatleri rezervasyon öncesinde sorun.</p></details>
        <details><summary>Olanaklar hâlen geçerli mi?</summary><p>Klima, Wi‑Fi, kahvaltı seçeneği, günlük temizlik ve 24 saat resepsiyon eski sitede listelenmişti. Güncel durum ve varsa koşullar için <a href="/olanaklar/">olanaklar sayfasını</a> inceleyip işletmeye danışın.</p></details>
        <details><summary>İşletmeye nasıl ulaşırım?</summary><p>${phoneLink('Ara')} veya ${whatsappLink('WhatsApp')} üzerinden ulaşabilirsiniz.</p></details>
      </section>`,
  },
  {
    route: '/rezervasyon/',
    title: 'Mersin Apart Otel Rezervasyon Talebi',
    description: 'Oda tercihi ve tarihle telefon veya WhatsApp üzerinden Mersin Apart Otel’e bilgi ve müsaitlik talebi iletin.',
    keywords: ['Mersin Apart Otel rezervasyon', 'Mersin oda müsaitlik', 'Cami Şerif konaklama talebi', 'Mersin otel iletişim'],
    eyebrow: 'TALEP SÜRECİ',
    h1: 'Rezervasyon için nasıl ilerlenir?',
    intro: 'Bu web sitesi rezervasyonu otomatik onaylamaz. Oda ve tarihinizi işletmeye iletip güncel müsaitlik ile toplam fiyatı doğrudan teyit edin.',
    crumbs: ['Rezervasyon'],
    body: `
      <section class="page-section" aria-labelledby="reservation-steps-title"><h2 id="reservation-steps-title">Üç basit adım</h2><ol class="reservation-steps"><li><span>01</span><div><h3>Oda ve tarihinizi belirleyin</h3><p>Bahçe Odası, Şehir Suiti veya Aile Suiti arasından seçin; giriş/çıkış tarihini ve kişi sayısını hazırlayın.</p><a href="/odalar/">Oda seçeneklerini karşılaştırın.</a></div></li><li><span>02</span><div><h3>İşletmeye ulaşın</h3><p>Telefonla arayın veya WhatsApp’ta tarih, kişi sayısı ve oda tercihini yazın. Başlangıç fiyatı güncel teklif anlamına gelmez.</p><a href="/iletisim/">Telefon ve WhatsApp bağlantılarını açın.</a></div></li><li><span>03</span><div><h3>Koşulları ve teyidi alın</h3><p>Müsaitliği, o gün geçerli toplam ücreti, giriş/çıkış ayrıntılarını ve rezervasyon koşullarını işletmeden netleştirin. Onay ancak işletmeden gelen teyitle oluşur.</p></div></li></ol></section>
      <section class="page-section reservation-note" aria-labelledby="reservation-limits-title"><h2 id="reservation-limits-title">Bu web sayfası ne yapmaz?</h2><p>Site müsaitlik takvimi tutmaz, ödeme veya kart bilgisi almaz, tek başına rezervasyon oluşturmaz. WhatsApp bağlantısı yalnızca sizin onaylayıp gönderebileceğiniz bir mesaj taslağı açar.</p>${phoneLink()} ${whatsappLink()}</section>`,
  },
];

const allLinks = [
  { href: '/', label: 'Ana sayfa' },
  { href: '/odalar/', label: 'Odalar' },
  { href: '/odalar/bahce-odasi/', label: 'Bahçe Odası' },
  { href: '/odalar/sehir-suiti/', label: 'Şehir Suiti' },
  { href: '/odalar/aile-suiti/', label: 'Aile Suiti' },
  { href: '/fiyatlar/', label: 'Fiyatlar' },
  { href: '/olanaklar/', label: 'Olanaklar' },
  { href: '/konum/', label: 'Konum' },
  { href: '/iletisim/', label: 'İletişim' },
  { href: '/sss/', label: 'Sık sorulanlar' },
  { href: '/rezervasyon/', label: 'Rezervasyon talebi' },
  { href: '/yasal.html', label: 'Gizlilik ve çerez bilgisi' },
];

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const directoryHtml = `
  <!-- PAGE_DIRECTORY_BEGIN -->
  <nav class="page-directory" aria-label="Tüm site sayfaları">
    <div class="page-directory-inner"><div><p class="eyebrow">MERSİN APART OTEL</p><h2>Sayfalar</h2></div>
      <div class="page-directory-grid">${allLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join('\n        ')}</div>
    </div>
  </nav>
  <!-- PAGE_DIRECTORY_END -->`;

const primaryNavLinks = [
  { href: '/odalar/', label: 'Odalar' },
  { href: '/fiyatlar/', label: 'Fiyatlar' },
  { href: '/olanaklar/', label: 'Olanaklar' },
  { href: '/konum/', label: 'Konum' },
  { href: '/iletisim/', label: 'İletişim' },
  { href: '/sss/', label: 'SSS' },
];
const currentAttribute = (route, href) => {
  if (route === href) return ' aria-current="page"';
  if (href === '/odalar/' && route.startsWith('/odalar/')) return ' aria-current="location"';
  return '';
};

const brandHtmlFor = (route) => `<a class="brand" href="/" aria-label="Mersin Apart Otel ana sayfa"${route === '/' ? ' aria-current="page"' : ''}>
      <img class="brand-logo" src="${LOGO_PATH}" alt="Mersin Apart Otel logosu" width="56" height="56">
    </a>`;

const navHtmlFor = (route) => `<nav class="main-nav" aria-label="Ana menü">
      ${primaryNavLinks.map((link) => `<a href="${link.href}"${currentAttribute(route, link.href)}>${link.label}</a>`).join('')}
      ${phoneLink('Ara', 'nav-phone')}
      ${whatsappLink('WhatsApp', 'nav-cta')}
    </nav>`;

const mobileMenuHtmlFor = (route) => `<details class="site-menu">
      <summary><span class="menu-glyph" aria-hidden="true"><i></i><i></i><i></i></span><span>Menü</span></summary>
      <div class="site-menu-panel"><nav aria-label="Mobil site menüsü">
        ${allLinks.map((link) => `<a href="${link.href}"${currentAttribute(route, link.href)}>${link.label}</a>`).join('\n        ')}
      </nav><div class="site-menu-contact">${phoneLink('Ara', 'menu-phone')}${whatsappLink('WhatsApp', 'menu-whatsapp')}</div></div>
    </details>`;
const headerHtmlFor = (route) => `<header class="site-header">${brandHtmlFor(route)}${navHtmlFor(route)}${mobileMenuHtmlFor(route)}</header>`;
const footerHtml = `<footer class="site-footer">
    <a class="brand footer-brand" href="/" aria-label="Mersin Apart Otel ana sayfa"><img class="brand-logo" src="${LOGO_PATH}" alt="Mersin Apart Otel logosu" width="56" height="56"></a>
    <p class="footer-address">Cami Şerif, Mücahitler Cd. 38/1A, 33010 Akdeniz/Mersin<br>${phoneLink()}</p>
    <a class="footer-policy" href="/yasal.html">Gizlilik ve çerez bilgisi</a><span class="footer-copy">© Mersin Apart Otel</span>
  </footer>`;
const mobileContactHtml = `<div class="mobile-contact" aria-label="Hızlı iletişim">${phoneLink('Ara', 'mobile-phone')}<a href="/odalar/">Odalar</a>${whatsappLink('WhatsApp', 'mobile-whatsapp')}</div>`;

function breadcrumbHtml(page) {
  const crumbs = [{ href: '/', label: 'Ana sayfa' }];
  if (page.route.startsWith('/odalar/') && page.route !== '/odalar/') {
    crumbs.push({ href: '/odalar/', label: 'Odalar' });
  }
  crumbs.push({ href: page.route, label: page.crumbs.at(-1) });
  return `<nav class="breadcrumbs" aria-label="İçerik yolu">${crumbs.map((crumb, index) => {
    const current = index === crumbs.length - 1;
    return `${index ? '<span aria-hidden="true">/</span>' : ''}${current ? `<span aria-current="page">${esc(crumb.label)}</span>` : `<a href="${crumb.href}">${esc(crumb.label)}</a>`}`;
  }).join(' ')}</nav>`;
}

function renderPage(page) {
  const title = esc(page.title);
  const description = esc(page.description);
  const keywords = esc(page.keywords.join(', '));

  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#f5f7f3">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="noindex, nofollow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:site_name" content="Mersin Apart Otel">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <!-- PUBLIC_URL_METADATA -->
  <link rel="icon" href="${FAVICON_PATH}" type="image/png">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <a class="skip-link" href="#main">İçeriğe geç</a>
  ${headerHtmlFor(page.route)}
  <main class="content-page" id="main">
    ${breadcrumbHtml(page)}
    <header class="page-heading"><p class="eyebrow">${esc(page.eyebrow)}</p><h1>${esc(page.h1)}</h1><p class="page-intro">${esc(page.intro)}</p></header>
    <div class="content-body">${page.body.trim()}</div>
    <section class="page-cta" aria-labelledby="page-cta-title"><p class="eyebrow eyebrow-light">MERSİN APART OTEL · CAMİ ŞERİF</p><h2 id="page-cta-title">Güncel bilgiyi doğrudan alın.</h2><p>Oda tercihiniz, kişi sayısı ve tarih için işletmeye ulaşın.</p><div class="page-cta-actions">${phoneLink('Ara', 'button button-light')}${whatsappLink('WhatsApp', 'button button-cream')}</div></section>
  </main>
  ${directoryHtml.trim()}
  ${footerHtml}
  ${mobileContactHtml}
</body>
</html>
`;
}

async function addDirectoryToExistingPage(relativeFile) {
  const route = relativeFile === 'index.html' ? '/' : '/yasal.html';
  const filePath = path.join(siteDir, relativeFile);
  let html = await readFile(filePath, 'utf8');
  const marker = /<!-- PAGE_DIRECTORY_BEGIN -->[\s\S]*?<!-- PAGE_DIRECTORY_END -->/;
  if (marker.test(html)) {
    html = html.replace(marker, directoryHtml.trim());
  } else {
    html = html.replace(/<\/main>\s*(?=<footer class="site-footer)/, `</main>\n  ${directoryHtml.trim()}\n  `);
  }
  html = html.replace(/<\/main><!-- PAGE_DIRECTORY_BEGIN -->/, '</main>\n  <!-- PAGE_DIRECTORY_BEGIN -->');
  html = html.replace(/<!-- PAGE_DIRECTORY_END -->\s*<footer class="site-footer/, '<!-- PAGE_DIRECTORY_END -->\n  <footer class="site-footer');
  html = html.replace(/<header class="site-header">[\s\S]*?<\/header>/, headerHtmlFor(route));
  html = html.replace(/<link rel="icon" href="[^"]+" type="image\/png">/, `<link rel="icon" href="${FAVICON_PATH}" type="image/png">`);
  html = html.replace('<meta name="theme-color" content="#f7f4ee">', '<meta name="theme-color" content="#f5f7f3">');
  html = html.replace('<meta name="twitter:card" content="summary">', '<meta name="twitter:card" content="summary_large_image">');
  const mobilePattern = /<div class="mobile-contact"[\s\S]*?<\/div>/;
  if (mobilePattern.test(html)) html = html.replace(mobilePattern, mobileContactHtml);
  else html = html.replace('</body>', `${mobileContactHtml}\n</body>`);
  await writeFile(filePath, html.replace(/[ \t]+$/gm, ''), 'utf8');
}

const isDirectExecution = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectExecution) {
for (const page of pages) {
  const targetDir = path.join(siteDir, page.route.slice(1));
  const outputFile = path.join(targetDir, 'index.html');
  await mkdir(targetDir, { recursive: true });
  await writeFile(outputFile, renderPage(page).replace(/[ \t]+$/gm, ''), 'utf8');
}

await addDirectoryToExistingPage('index.html');
await addDirectoryToExistingPage('yasal.html');

const routes = [
  { path: '/', title: 'Mersin Apart Otel | Odalar ve Fiyatlar, Akdeniz' },
  ...pages.map((page) => ({ path: page.route, title: page.title })),
  { path: '/yasal.html', title: 'Gizlilik ve Çerez Bilgisi | Mersin Apart Otel' },
];
await writeFile(path.join(siteDir, 'manus-routes.json'), `${JSON.stringify({ routes })}\n`, 'utf8');
console.log(`10 ek sayfa üretildi; route manifestinde ${routes.length} toplam sayfa var.`);
}
