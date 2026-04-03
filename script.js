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