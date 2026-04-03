document.addEventListener("DOMContentLoaded", () => {
  // Функція для ініціалізації акордеонів
  const initAccordion = (triggerClass, itemClass) => {
    const triggers = document.querySelectorAll(triggerClass);
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest(itemClass);
        item.classList.toggle('is-active');
      });
    });
  };

  // Активуємо всі 2 варіанти
  initAccordion('.accordion-trigger', '.accordion-item');
  initAccordion('.acc-v2-header', '.acc-v2-item');
});


document.addEventListener("DOMContentLoaded", () => {
  // === 1. Логіка Акордеона Локацій ===
  const metroItems = document.querySelectorAll('.metro-item');

  metroItems.forEach(item => {
    item.addEventListener('click', () => {
      const parentList = item.closest('.metro-list');
      
      // Якщо хочеш, щоб інші акордеони закривалися при відкритті нового, розкоментуй цей блок:
      document.querySelectorAll('.metro-list').forEach(list => {
        if (list !== parentList) list.classList.remove('is-active');
      });
      
      parentList.classList.toggle('is-active');
    });
  });

  // === 2. Логіка Попапу (Модалки) ===
  const cityItems = document.querySelectorAll('.city-item');
  const modal = document.getElementById('location-modal');
  const closeBtn = document.querySelector('.modal-close-btn');

  // Елементи всередині модалки, куди будемо вставляти дані
  const modalCityName = document.getElementById('modal-city-name');
  const modalAddress = document.getElementById('modal-address');
  const modalPhone = document.getElementById('modal-phone');
  const modalHoursText = document.getElementById('modal-hours-text');
  const modalMapLink = document.getElementById('modal-map-link');

  cityItems.forEach(item => {
    item.addEventListener('click', () => {
      // 1. Беремо дані з data-атрибутів клікнутого елемента
      const title = item.getAttribute('data-title');
      const address = item.getAttribute('data-address');
      const phone = item.getAttribute('data-phone');
      const hours = item.getAttribute('data-hours');
      const mapLink = item.getAttribute('data-map-link');

      // 2. Вставляємо дані в HTML модалки
      modalCityName.textContent = title;
      modalAddress.textContent = address;
      
      // Для телефону: текст + клікабельне посилання tel:
      modalPhone.textContent = phone;
      // Витягуємо тільки цифри для посилання tel: (наприклад, +11234567890)
      const cleanPhone = phone.replace(/\D/g, ''); 
      modalPhone.href = `tel:+${cleanPhone}`;

      // Робимо красивий перенос рядка для годин роботи (міняємо ; на <br>)
      modalHoursText.innerHTML = hours.replace(';', '<br>');
      
      modalMapLink.href = mapLink;

      // 3. Показуємо модалку
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Забороняємо скрол фону
    });
  });

  // === 3. Закриття Попапу ===
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Повертаємо скрол
  };

  closeBtn.addEventListener('click', closeModal);
  
  // Закриття при кліку на темний фон (поза контентом)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Закриття на клавішу ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});