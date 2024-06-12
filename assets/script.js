const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]
const numberSlides = slides.length;
let currentIndex = 0;


const arrow_left = document.querySelector(".arrow_left");

    arrow_left.addEventListener("click", () => {
        if (currentIndex === 0) {
            currentIndex = numberSlides - 1;
        } else {
            currentIndex--;
        }
        carousel();

    });

const arrow_right = document.querySelector(".arrow_right");

    arrow_right.addEventListener("click", () => {
        if (currentIndex === numberSlides - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        carousel();

    });

const dots = document.createElement('div');
dots.classList.add('dots');

const banner = document.getElementById('banner');
banner.appendChild(dots);

for (let i = 0; i < numberSlides; i++) {
    dots.insertAdjacentHTML('beforeend', '<span class="dot"></span>');
}

const carousel = () => {
    const imageElement = banner.querySelector(".banner-img");
    const textElement = banner.querySelector("p");
    const dotsContainer = dots.querySelectorAll(".dot");

imageElement.src = `./assets/images/slideshow/${slides[currentIndex].image}`;

textElement.innerHTML = slides[currentIndex].tagLine;

dotsContainer.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
});
};
