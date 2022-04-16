let samllMenu = document.querySelector(".small-ul");
let minMenu = document.querySelector(".main-ul .min-m");

minMenu.addEventListener("click", function () {
samllMenu.classList.toggle("show");
});

let slides = document.querySelectorAll(".slider .hero");
let index = 0;

function next() {
slides[index].classList.remove("active")
index = (index + 1) % slides.length
slides[index].classList.add("active")
}
function prev() {
slides[index].classList.remove("active")
index = (index - 1 +  slides.length)  % slides.length
slides[index].classList.add("active")
}

let input = document.getElementById("input")
let searchIcon = document.getElementById("search-icon")

searchIcon.addEventListener("click", function() {
    input.classList.toggle("input-show")
})