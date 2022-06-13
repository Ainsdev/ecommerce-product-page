'use strict'
//functionallity for Images Slider
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const carousel = document.getElementById('carousel');
let counter = 1;
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
//functionallity for Images Slider
//
//functionallity for mobile menu    
const menu = document.getElementById('mobile_menu');
const menuBtn = document.getElementById('btn_mobile_menu');
const closeBtn = document.getElementById('btn_close_mobile_menu');
const closeArea = document.getElementById('transparent');
//Open Menu
menuBtn.addEventListener('click', () => {
    menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden');
});
//Close Menu
closeBtn.addEventListener('click', () => {
    if (menu.classList.contains('hidden') == false) {
        return menu.classList.add('hidden');
    }
});
closeArea.addEventListener('click', () => {
    if (menu.classList.contains('hidden') == false) {
        return menu.classList.add('hidden');
    }
});
//functionallity for mobile menu
//  
//functionallity of Cart UI
const cart = document.getElementById('cart');
const cartbtn = document.getElementById('cartbtn');
const closeCartBtn = document.getElementById('cart_bg');
function removeHidden() {
    return {
        first: cart.classList.remove('hidden'),
        second: closeCartBtn.classList.remove('hidden'),
    };
}
function hidden() {
    return {
        first: cart.classList.add('hidden'),
        second: closeCartBtn.classList.add('hidden'),
    };
}

cartbtn.addEventListener('click', () => {
    if (cart.classList.contains('hidden') == true) {
        return removeHidden();
    }
});
closeCartBtn.addEventListener('click', () => {
    if (cart.classList.contains('hidden') == false) {
        return hidden();
    }
});
// functionallity of Cart UI


