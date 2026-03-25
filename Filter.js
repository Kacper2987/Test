const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // aktywny przycisk
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projects.forEach(project => {
      const category = project.getAttribute("data-category");

      if (filter === "all" || category === filter) {

        // POKAZYWANIE
        project.style.display = "block";

        setTimeout(() => {
          project.style.opacity = "1";
          project.style.transform = "translateY(0)";
        }, 10);

      } else {

        // UKRYWANIE
        project.style.opacity = "0";
        project.style.transform = "translateY(20px)";

        setTimeout(() => {
          project.style.display = "none";
        }, 200);

      }
    });

  });
});