document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-header nav");

if(toggle){
  toggle.onclick = () => {
    nav.classList.toggle("active");
  }
}

});