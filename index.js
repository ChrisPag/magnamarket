let menu = document.getElementById("links");
let button = document.getElementById("hide");

function hide(){
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } 

    else {
        menu.style.display = "none";
        button.style.right = "0";
    }
}

function resized(){
    if(window.innerWidth > 700){
        menu.style.display = "inline";
    }
}

//test

let slideIndex = 1;
showSlides(slideIndex);

// go forward/previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
