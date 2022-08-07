/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
*/

console.clear();

let deck = [];

const figuras = ['A', 'J', 'Q', 'K'];
const cartas = ['C', 'D', 'H', 'S'];

let puntosJugador=0, puntosComputadora=0;

const btnPedir=document.querySelector('#btnPedir');

const btnDetener=document.querySelector('#btnDetener');

const btnNuevo=document.querySelector('#btnNuevo');

const divJugadorCartas=document.querySelector('#jugador-cartas');

const divComputadoraCartas=document.querySelector('#computadora-cartas');

const divMarcador=document.querySelector('#marcador');


const puntosHTML=document.querySelectorAll('small');



const crearDecK = () => {

    deck=[];

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


// turno computadora
const turnoComputadora = (puntosMinimos) => {

    do {

        let carta = pedirCarta();
    
        // Crear el nuevo elemento
        const imgCarta = document.createElement('img');
        imgCarta.src= `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
    
        // añadir el elemento la ubicacion
        divComputadoraCartas.append(imgCarta);
        puntosComputadora+= valorCarta(carta);
    
        puntosHTML[1].innerText=puntosComputadora;

        if(puntosMinimos>21) {
            break;
        }

    } while ((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));

    btnDetener.disabled=true;

    // setTimeout(()=> {
    //     if((puntosMinimos<=21) && (puntosMinimos>puntosComputadora)) {
    //         alert('Gana Jugador ' + puntosMinimos + '-' + puntosComputadora);
    //     } else {
    //         alert('Gana Computadora ' + puntosComputadora + '-' + puntosMinimos);
    //     }
    // }, 1000);

    pintarResultado();

}


const pintarResultado = () => {

    let texto='';

    if((puntosJugador<=21) && (puntosJugador>puntosComputadora)) {
        texto='Gana Jugador: ';
    } else if (puntosComputadora<=21) {
        texto='Gana Computadora: ';
    } else {
        texto='Gana Jugador: ';
    }
    
    texto+= puntosJugador + '-' + puntosComputadora;


    const marcador = document.createElement('h1');
    marcador.innerText=texto;
    divMarcador.append(marcador);

}





// Eventos

btnPedir.addEventListener('click', () => {

    let carta = pedirCarta();
    // console.log(carta);

    // Crear el nuevo elemento
    const imgCarta = document.createElement('img');
    imgCarta.src= `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    // añadir el elemento la ubicacion
    divJugadorCartas.append(imgCarta);
    puntosJugador+= valorCarta(carta);

    // console.log(puntosJugador)

    puntosHTML[0].innerText=puntosJugador;

    if(puntosJugador>=21) {
        // console.warn('Lo siento, perdiste!!!');
        btnPedir.disabled=true;
        btnDetener.disabled=true;
        turnoComputadora(puntosJugador);
    // } else if(puntosJugador===21) {
    //     // console.log('Ganaste!!!');
    //     btnPedir.disabled=true;
    //     btnDetener.disabled=true;
    //     turnoComputadora(puntosJugador);
    }        

    
});



btnDetener.addEventListener('click',()=>{

    turnoComputadora(puntosJugador);
    btnPedir.disabled=true;
   

});


btnNuevo.addEventListener('click', () => {

    console.clear();

    deck=crearDecK();

    puntosJugador=0;
    puntosComputadora=0;

    puntosHTML[0].innerText=0;
    puntosHTML[1].innerText=0;

    btnPedir.disabled=false;
    btnDetener.disabled=false;

    divComputadoraCartas.innerHTML='';
    divJugadorCartas.innerHTML='';
    divMarcador.innerHTML='';

    

});