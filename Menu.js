document.addEventListener("DOMContentLoaded", function(){

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});

});



let lastScroll = 0;
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

if(window.innerWidth <= 768){

let currentScroll = window.pageYOffset;

if(currentScroll > lastScroll){
header.style.transform = "translateX(-100%)";
}
else{
header.style.transform = "translateX(0)";
}

lastScroll = currentScroll;

}

});