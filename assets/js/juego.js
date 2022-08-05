/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
*/

let deck = [];

const figuras = ['A', 'J', 'Q', 'K'];
const cartas = ['C', 'D', 'H', 'S'];

const btnPedir=document.querySelector('#btnPedir');




const crearDecK = () => {

    for (let i = 2; i <= 10; i++) {
        for (let carta of cartas) {
            deck.push(i + carta);
        }
    }

    for (let carta of cartas) {
        for (let figura of figuras) {
            deck.push(figura + carta);
        }
    }

    // console.log('crearDecK',deck,deck.length);

    deck = _.shuffle(deck);

    console.log('crearDecK - shuffle', deck, deck.length);

    return deck;
}



crearDecK(deck);



// Esta función me permite pedir una carta de la baraja
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas';
    }
    return deck.pop();
}

// let carta = pedirCarta();

// console.log({ carta })

console.log('documento', deck);


const valorCarta = (carta) => {

    const valor = carta.substring(0,carta.length-1);
    let puntos=0;

/* 
    if (carta.length === 2) {
        if (carta[0] === 'A') {
            valor = 11;
        } else if (['J', 'Q', 'K'].includes(carta[0])) {
            valor = 10;
        } else {
            valor = carta[0];
        }
    } else if (carta.length === 3) {
        valor = carta[0] + carta[1];
    }
 */

/* 
    if( isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;
    } else {
        puntos=valor * 1;
    }

 */    

    puntos = (!isNaN(valor)) ? valor * 1:(valor === 'A') ? 11 : 10;

    console.log('valorCarta', carta, puntos);
    return puntos;

}

// valorCarta(carta);



// Eventos

btnPedir.addEventListener('click', () => {
    let carta = pedirCarta();
    // console.log(carta);

    
})