//menu-mobile
let menuBtn = document.querySelector('#menu-mobile');
let menuStickers = document.querySelectorAll('.menu-sticker');
let menuUl = document.querySelector('.ul-nav');

function menuActive() {
    menuBtn.classList.toggle('active');
    active = ["active1", "active2", "active3"];
    for (let i = 0; i < 3; i++) {
        menuStickers[i].classList.toggle(active[i]);
    }
    menuUl.classList.toggle('active');
}
    menuBtn.addEventListener("click", menuActive);



