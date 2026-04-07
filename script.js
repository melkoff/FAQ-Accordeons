document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      // Find parent element current accordion
      const parentItem = this.closest(".accordion-item");
      
      // Перемикаємо клас відкриття
      parentItem.classList.toggle("is-active");
      
      // If you want to close other accordion items use this code below 
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