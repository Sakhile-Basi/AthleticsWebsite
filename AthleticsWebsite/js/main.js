const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


// =========================
// NAVIGATION
// =========================

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("active");
    menuToggle.classList.toggle("open");

});


document.addEventListener("click", function (event) {

    if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {

        mainNav.classList.remove("active");
        menuToggle.classList.remove("open");

    }

});


// =========================
// CAROUSEL
// =========================
const carouselLink = document.getElementById("carouselLink");
const carouselImage = document.getElementById("carouselImage");
const carouselTitle = document.getElementById("carouselTitle");

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const carouselDots = document.getElementById("carouselDots");


// Carousel data
const slides = [
    {
        image: "Images/athletes/Steven Gardiner.jpg",
        title: "Steven Gardiner",
        link: "https://worldathletics.org/athletes/bahamas/steven-gardiner-14578505"
    },
    {
        image: "Images/athletes/Elaine Thompson.jpg",
        title: "Elaine Thompson",
        link: "https://worldathletics.org/athletes/jamaica/elaine-thompson-herah-14285956"
    },
    {
        image: "Images/athletes/Marcell Jacobs.jpg",
        title: "Marcell Jacobs",
        link: "https://worldathletics.org/athletes/italy/lamont-marcell-jacobs-14453864"
    },
    {
        image: "Images/athletes/Andre.jpg",
        title: "Andre De Grasse",
        link: "https://worldathletics.org/athletes/canada/andre-de-grasse-14535607"
    },
    {
        image: "Images/athletes/Karsten Warholm.jpg",
        title: "Karsten Warholm",
        link: "https://worldathletics.org/athletes/norway/karsten-warholm-14479487"
    }
];


let currentSlide = 0;


// Create carousel dots
slides.forEach((slide, index) => {

    const dot = document.createElement("span");

    dot.classList.add("carousel-dot");

    dot.addEventListener("click", function () {

        currentSlide = index;

        showSlide();

    });

    carouselDots.appendChild(dot);

});


// Display current slide
function showSlide() {

    carouselImage.src = slides[currentSlide].image;

    carouselImage.alt = slides[currentSlide].title;

    carouselTitle.textContent = slides[currentSlide].title;

    carouselLink.href = slides[currentSlide].link;

    const dots = document.querySelectorAll(".carousel-dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle("active", index === currentSlide);

    });

}


// // Next slide
nextButton.addEventListener("click", function () {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide();

});

// // Click image to go to next slide
// carouselImage.addEventListener("click", function () {
//     currentSlide++;

//     if (currentSlide >= slides.length) {
//         currentSlide = 0;
//     }

//     showSlide();
// });



// Previous slide
prevButton.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide();

});


// Show first slide
showSlide();