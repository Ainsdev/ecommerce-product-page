'use strict'
//variables
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const carousel = document.getElementById('carousel');
let counter = 1;
//functionallity for buttons
const nextSlide = (btn) => {

    btn.addEventListener('click', () => {
        if (counter < 4) {
            carousel.classList.add(`translate-x-[${-counter * 50}%]`);
            counter++;
            console.log(counter);
        } else {
            return null;
        }
    });

}
const prevSlide = (btn) => {
    btn.addEventListener('click', () => {
        if (counter > 1) {
            carousel.classList.remove(`translate-x-[${-(counter - 1) * 50}%]`);
            counter--;
            console.log(counter);
        } else {
            return null;
        }
    });
}
nextSlide(next);
prevSlide(previous);
