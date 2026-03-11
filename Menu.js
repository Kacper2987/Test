<script>
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-header nav");

toggle.onclick = () => {
  nav.classList.toggle("active");
}
</script>