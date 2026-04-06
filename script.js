document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      // Знаходимо батьківський елемент конкретної картки
      const parentItem = this.closest(".accordion-item");
      
      // Перемикаємо клас відкриття
      parentItem.classList.toggle("is-active");
      
      // Якщо хочеш, щоб при відкритті одного, інші автоматично закривалися, 
      // розкоментуй цей блок коду нижче:
      /*
      const allItems = document.querySelectorAll(".accordion-item");
      allItems.forEach(item => {
        if (item !== parentItem) {
          item.classList.remove("is-active");
        }
      });
      */
    });
  });
});