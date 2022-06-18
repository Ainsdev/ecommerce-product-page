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
//functionallity for Images Slider DESKTOP
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const masterImg = document.getElementById('masterimg');
const changeImg = (num, imgn) => {
    masterImg.src = `images/image-product-${num}.jpg`;
    img1.classList.add('opacity-40');
    img2.classList.add('opacity-40');
    img3.classList.add('opacity-40');
    img4.classList.add('opacity-40');
    imgn.classList.remove('opacity-40');
};
img1.addEventListener('click', () => {
    changeImg(1, img1);
});
img2.addEventListener('click', () => {
    changeImg(2, img2);
});
img3.addEventListener('click', () => {
    changeImg(3, img3);
});
img4.addEventListener('click', () => {
    changeImg(4, img4);
});
//functionallity for Images Slider DESKTOP
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

closeCartBtn.addEventListener('click', () => {
    if (cart.classList.contains('hidden') == false) {
        return hidden();
    }
});
// functionallity of Cart UI
//
// Functionallity of cart
let index = 0;
const indexCart = document.getElementById('cart_index');
const addItem = document.getElementById('btn_cart_add');
const removeItem = document.getElementById('btn_cart_remove');
const btnAddCart = document.getElementById('btn_addtoCart');
let defCart = 0;
const cartEmpty = document.getElementById('cartEmpty');
addItem.addEventListener('click', () => {
    if (index >= 0) {
        index++;
        indexCart.innerHTML = index;
    }
});
removeItem.addEventListener('click', () => {
    if (index > 0) {
        index--;
        indexCart.innerHTML = index;
    }
});
btnAddCart.addEventListener('click', () => {
    addToCart();
});
const addToCart = () => {
    defCart = index;
    index = 0;
    indexCart.innerHTML = index;
};
cartbtn.addEventListener('click', () => {
    if (cart.classList.contains('hidden') == true && defCart == 0) {
        return removeHidden();
    } else if (cart.classList.contains('hidden') == true && defCart > 0) {
        return removeHiddenWithItems();
    }
});
function removeHiddenWithItems() {
    return {
        first: cart.classList.remove('hidden'),
        second: closeCartBtn.classList.remove('hidden'),
        third: cartEmpty.classList.add('hidden'),
        fourth: showItems(),
    };
}
const itemsCount = document.getElementById('itemsCount');
const totalCount = document.getElementById('totalCount');
const showItems = () => {
    document.getElementById('CartFull').classList.remove('hidden');
    itemsCount.innerHTML = `$125x ${defCart}`;
    totalCount.innerHTML = `$${defCart * 125}.00`;
}
// Functionality of cart

