document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "SERVICE_ID_TUTAJ",
      "TEMPLATE_ID_TUTAJ",
      this
    )
    .then(() => {
      alert("Wiadomość została wysłana ✅");
      form.reset();
    })
    .catch(error => {
      alert("Błąd wysyłania ❌ Spróbuj ponownie.");
      console.error(error);
    });
  });
});