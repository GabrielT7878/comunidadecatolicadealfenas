//menu-mobile
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

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
window.addEventListener('scroll',()=>{
    if (menuBtn.classList.value == 'menu active') {
            menuBtn.classList.toggle('active');
            active = ["active1", "active2", "active3"];
            for (let i = 0; i < 3; i++) {
                menuStickers[i].classList.toggle(active[i]);
            }
            menuUl.classList.toggle('active');
        }
})

let data = fazGet('http://liturgia.herokuapp.com');
let dataJson = JSON.parse(data);

let main = document.querySelector('.main-cards');
let card = document.createElement('div');
let cardTitle = document.createElement('h2');
cardTitle.appendChild(document.createTextNode("Oração do dia"));
card.classList.add('card');
var ret = dataJson.dia.replace('Oração do dia','');
text = document.createTextNode(ret);
card.appendChild(cardTitle);
card.appendChild(text);
main.appendChild(card);

console.log(dataJson);



