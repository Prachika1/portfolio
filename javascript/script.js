
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var i = 0;
var txt = "Hello, I am";
var speed = 100;

var c = 0;
var txt2 = 'Prachika';
var speed1 = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriter1() {
  if (c < txt2.length) {
    document.getElementById("text2").innerHTML += txt2.charAt(c);
    c++;
    setTimeout(typeWriter1, speed1);
  }
}

window.onload = function() {
  typeWriter();
  typeWriter1();
};
let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function() {
showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides1 = document.querySelectorAll(".container > div:first-child .mySlides");
    let slides2 = document.querySelectorAll(".container > div:last-child .mySlides");

    if (n > slides1.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides1.length}

    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    slides1[slideIndex - 1].style.display = "block";
    slides2[slideIndex - 1].style.display = "block";
}