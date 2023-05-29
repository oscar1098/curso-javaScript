/**
 * 2C = 2 treboles
 * 2D = 2 diamantes
 * 2H = 2 corazones
 * 2s = 2 de picas
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias del HTML

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');


const small = document.querySelectorAll('small');


//Esta funcion crea un nuevo deck
const crearDeck = () => {

    for( let i = 2; i <= 10; i++){
        for ( let tipo of tipos ){
            deck.push(i + tipo)
        }
    }

    for ( let tipo of tipos){
        for ( let especial of especiales){
            deck.push(especial + tipo)
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// Esta funcion permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0){
        throw 'No hay cartas en el deck'
    }

    const carta = deck.pop()

    return carta;
}

// Pedir carta
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length -1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor*1
}

//Turno de la computadora

const turnoCompuatdora = (puntosMinimos) => {

    do {
    const carta = pedirCarta();

    puntosComputadora += valorCarta(carta);
    small[1].innerText = puntosComputadora;

    //<img class="carta" src="assets/cartas/2C.png" alt="">
    
    const imgCarta = document.createElement('img');
    imgCarta.src =`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')
    divCartasComputadora.append(imgCarta);

    if ( puntosMinimos > 21) {
        break;
    }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {

        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana')
        }else if ( puntosMinimos  > 21 ){
            alert('La computadora gana')
        }else if ( puntosComputadora > 21 ){
            alert('Jugador gana')
        } else {
            alert('La computadora gana')
        }
    }, 70);
}


//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    small[0].innerText = puntosJugador;

    //<img class="carta" src="assets/cartas/2C.png" alt="">
    
    const imgCarta = document.createElement('img');
    imgCarta.src =`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')
    divCartasJugador.append(imgCarta);

    if ( puntosJugador > 21 ){
        console.warn('Perdiste')
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCompuatdora(puntosJugador);

    } else if ( puntosJugador === 21){
        console.warn('Genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCompuatdora(puntosJugador)
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoCompuatdora(puntosJugador)
});

btnNuevoJuego.addEventListener('click', () => {
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    small[0].innerText = 0;
    small[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnDetener.disabled = false;
    btnPedir.disabled = false;
});
