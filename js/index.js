const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {

    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        document.body.classList.remove('nav-open');
    })
});


// Quotes Slider

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
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout("showSlides()", 2000);

}

//setTimeout("showSlides()", 2000);
window.onload = showSlides;