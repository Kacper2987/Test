document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {

      const opened = item.classList.contains("active");

      // ===== ZAMKNIJ WSZYSTKIE =====
      items.forEach(el => {
        const a = el.querySelector(".faq-answer");

        el.classList.remove("active");

        // ustaw aktualną wysokość zanim zamkniemy
        a.style.height = a.scrollHeight + "px";

        requestAnimationFrame(() => {
          a.style.height = "0px";
        });
      });

      // ===== OTWÓRZ KLIKNIĘTY =====
      if (!opened) {
        item.classList.add("active");

        // start od 0
        answer.style.height = "0px";

        requestAnimationFrame(() => {
          answer.style.height = answer.scrollHeight + "px";
        });
      }

    });
  });

});