const WHATSAPP_NUMBER = '905313152490';

// Global Event Tracking Helper for GA4 / Google Ads (gtag)
function trackEvent(eventName, eventParams = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}

// Bind click tracking for calls, WhatsApp, and directions
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('click_to_call', {
        event_category: 'engagement',
        event_label: link.getAttribute('href'),
      });
    });
  });

  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('click_whatsapp', {
        event_category: 'engagement',
        event_label: 'whatsapp_link',
      });
    });
  });

  document.querySelectorAll('a[href*="share.google"], a[href*="maps.google"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('click_directions', {
        event_category: 'engagement',
        event_label: link.getAttribute('href'),
      });
    });
  });
});

const sendButton = document.querySelector('#request-send');
const requestStatus = document.querySelector('#request-status');

if (sendButton && requestStatus) {
  const fields = {
    name: document.querySelector('#guest-name'),
    phone: document.querySelector('#guest-phone'),
    checkin: document.querySelector('#check-in'),
    checkout: document.querySelector('#check-out'),
    guests: document.querySelector('#guest-count'),
    note: document.querySelector('#guest-note'),
  };

  sendButton.addEventListener('click', () => {
    const requiredFields = [fields.name, fields.phone, fields.checkin, fields.checkout, fields.guests];
    const firstInvalid = requiredFields.find((field) => !field || !field.checkValidity());
    if (firstInvalid) {
      firstInvalid?.reportValidity();
      return;
    }

    if (fields.checkout.value <= fields.checkin.value) {
      fields.checkout.setCustomValidity('Çıkış tarihi giriş tarihinden sonra olmalıdır.');
      fields.checkout.reportValidity();
      fields.checkout.setCustomValidity('');
      return;
    }

    const phoneDigits = fields.phone.value.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      fields.phone.setCustomValidity('Lütfen geçerli bir telefon numarası yazın.');
      fields.phone.reportValidity();
      fields.phone.setCustomValidity('');
      return;
    }

    trackEvent('contact_form_submit', {
      event_category: 'lead',
      guest_count: fields.guests.value,
    });
    trackEvent('click_whatsapp', {
      event_category: 'lead',
      event_label: 'form_whatsapp_submit',
    });

    const message = [
      'Merhaba Mersin Merkez Otel, konaklama bilgisi almak istiyorum.',
      `Ad: ${fields.name.value.trim()}`,
      `Telefon: ${fields.phone.value.trim()}`,
      `Giriş: ${fields.checkin.value}`,
      `Çıkış: ${fields.checkout.value}`,
      `Kişi sayısı: ${fields.guests.value}`,
      fields.note.value.trim() ? `Not: ${fields.note.value.trim()}` : '',
    ].filter(Boolean).join('\n');

    const link = document.createElement('a');
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.hidden = true;
    document.body.append(link);
    link.click();
    link.remove();

    requestStatus.textContent = 'WhatsApp taslağı açıldı. Mesajı inceleyip göndermek sizin kontrolünüzdedir.';
  });
}
