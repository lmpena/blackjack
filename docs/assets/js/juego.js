/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
*/

let deck=[];

const figuras = ['A','J','Q','K'];
const cartas = ['C','D','H','S'];

const crearDecK = () => {
   
    for (let i=2;i<=10;i++){
        for(let carta of cartas) {
            deck.push(i+carta);
        }
    }

    for(let carta of cartas) {
        for(let figura of figuras) {
            deck.push(figura+carta);
        }
    }

    // console.log('crearDecK',deck,deck.length);

    deck = _.shuffle(deck);

    console.log('crearDecK - shuffle',deck,deck.length);

    return deck;
}



crearDecK(deck);



// Esta función me permite pedir una carta de la baraja
const pedirCarta = () => {

    if(deck.length === 0) {
        throw 'No hay cartas';
    }
    return deck.pop();
}

pedirCarta();

console.log('documento',deck);