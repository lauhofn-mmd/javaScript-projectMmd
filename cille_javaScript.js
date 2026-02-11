//My array 
const carruselItems = [
    {
        src: "billeder/slide-1.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
    {
        src: "billeder/slide-2.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
    {
        src: "billeder/slide-3.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
    {
        src: "billeder/slide-4.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
    {
        src: "billeder/slide-5.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
    {
        src: "billeder/slide-6.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
    {
        src: "billeder/slide-7.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
    {
        src: "billeder/slide-8.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
        {
        src: "billeder/slide-9.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
        {
        src: "billeder/slide-10.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
        {
        src: "billeder/slide-11.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
        {
        src: "billeder/slide-12.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
        {
        src: "billeder/slide-13.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
        {
        src: "billeder/slide-14.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
        {
        src: "billeder/slide-15.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    },
        {
        src: "billeder/slide-16.jpg",
        alt: "Billede fra instagram",
        className: "carrusel-img"
    }
];

//Container for my array to be displayed 
const carousel = document.querySelector("[data-target='carousel']");

//Loop to display array
for (let i = 0; i < carruselItems.length; i++) {
  carousel.innerHTML += '<li class="card" data-target="card"><div class="card-inner"><img src="' + carruselItems[i].src + '" alt="' + carruselItems[i].alt + '" class="' + carruselItems[i].className + '"></div></li>';
}


//Variables 
const card = carousel.querySelector("[data-target='card']"); // first card to measure width

// Get spacing info
const cardStyle = window.getComputedStyle(card);
const cardMarginRight = parseInt(cardStyle.marginRight); // space between cards
const step = card.offsetWidth + cardMarginRight; // distance to move per slide

// Count total number of cards
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Definition
let offset = 0; // How long we have moved it to the left
const maxX = -(step * (cardCount - 4)); // Minus, we push left. Step is how far we can push and cardCount - 4 is how many cards we dont see

// Function to move carousel automatically
function autoSlide() {
  offset -= step; // move one card left
  if (offset < maxX) { //When there is no mere cards to see
    offset = 0; // Start over
  }
  carousel.style.transform = `translateX(${offset}px)`; //Tells browser to move the thingt on screen
}

// Run autoSlide every 2.5 seconds
let autoplay = setInterval(autoSlide, 2500);
