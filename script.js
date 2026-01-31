const images = [
  "https://via.placeholder.com/1200x800",
  "https://via.placeholder.com/1201x801",
  "https://via.placeholder.com/1202x802"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (gallery) {
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;

    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = src;
    });

    gallery.appendChild(img);
  });
}

if (lightbox) {
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}