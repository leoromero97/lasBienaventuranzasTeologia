//este script es para el carrusel de imagenes
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeDot";
}

let ver = document.getElementById("ver");
let ocultar = document.getElementById("ocultar");
let parrafo = document.querySelector(".parrafo");

ver.addEventListener("click", function(event) {
  event.preventDefault();
  parrafo.style.visibility = "visible";
});

ocultar.addEventListener("click", function(event) {
  event.preventDefault();
  parrafo.style.visibility = "hidden";
})

let ver2 = document.getElementById("ver2");
let ocultar2 = document.getElementById("ocultar2");
let parrafo2 = document.querySelector(".parrafo2");

ver2.addEventListener("click", function(event) {
  event.preventDefault();
  parrafo2.style.visibility = "visible";
});

ocultar2.addEventListener("click", function(event) {
  event.preventDefault();
  parrafo2.style.visibility = "hidden";
})
