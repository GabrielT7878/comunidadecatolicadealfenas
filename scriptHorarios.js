let container = document.querySelector('.main-cards');

let horarios = {
    Domingo: [
        "SaoPedro", ["7:00", "10:00", "18:00"]
    ],
    Sabado: [
        "Aparecida", ["7:45", "10:30", "16:00"],
        "Sao Pedro", ["7:00", "10:00", "18:00"],
        "José e Dores", ["9:30", "11:30", "16:30"],
    ]
}


console.log(horarios.Sabado[1].length);


function createDiv(select) {
    let card = document.createElement('div')
    card.classList.add('card')

    for (let i = 0; i < select.length; i++) {

        let divText = document.createElement('h6');
        let text = document.createTextNode(select[i]);
        divText.appendChild(text);
        card.appendChild(divText);

    }
    container.appendChild(card)
}

function getValue() {

    let horarioSelect = document.querySelector('#horarios');
    let cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
        container.removeChild(cards[i]);
    }

    if (horarioSelect.selectedIndex == 0) {
        createDiv(horarios.Domingo);
    } else {
        createDiv(horarios.Sabado);
    }
}

createDiv(horarios.Domingo);


const jsonData = require('./teste.json'); 
console.log(jsonData);
