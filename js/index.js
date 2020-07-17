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

var slideIndex = 0;
showSlides(slideIndex);



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds

}

// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {

        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    //Type Method
    type() {

        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get Full text
        const fullTxt = this.words[current];


        // check if deleting
        if (this.isDeleting) {
            // Remove a character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add a character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // type Speed
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete

        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            //Set delete to true
            this.isDeleting = true;

        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            //Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;

        }


        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

//Init APP
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init Typewriter
    new TypeWriter(txtElement, words, wait);

}