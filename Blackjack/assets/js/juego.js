/**
 * 2C = 2 treboles
 * 2D = 2 diamantes
 * 2H = 2 corazones
 * 2s = 2 de picas
*/

const miModulo =  (() => {
    'use strict'

    let deck = [];
    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];
    
    let puntosJugadores = [];
    
    //Referencias del HTML
    
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevoJuego = document.querySelector('#btnNuevo');
    
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          small = document.querySelectorAll('small');

    // Esta funcion inicia el juego
    const inicializarJuego = (numeroJugadores = 1) => {
            deck = crearDeck();

            puntosJugadores = [];

            for ( let i= 0; i<numeroJugadores; i++ ){
                puntosJugadores.push(0)
            }
            
            small.forEach(elem => elem.innerText = 0);
            divCartasJugadores.forEach(elem => elem.innerHTML = '');
 
            btnDetener.disabled = false;
            btnPedir.disabled = false;

        }
    
    
    //Esta funcion crea un nuevo deck
    const crearDeck = () => {

        deck = [];
    
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
    
        return _.shuffle(deck);
    }
    
    // Esta funcion permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0){
            throw 'No hay cartas en el deck'
        }
    
        return deck.pop();
    }
    
    // Pedir carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length -1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor*1
    }

    //Acumular puntos - Turno : 0 primer jugador y el ultimo la computadora

    const acumularPuntos = ( carta, turno ) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        small[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];

    }

    // Crear carta

    const crearCarta = (carta,turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src =`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    // Determinar ganador

    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;
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
    
    //Turno de la computadora
    
    const turnoCompuatdora = (puntosMinimos) => {

        let puntosComputadora = 0;
    
        do {
            const carta = pedirCarta();
            puntosComputadora =  acumularPuntos(carta, puntosJugadores.length -1);
            crearCarta( carta, puntosJugadores.length -1);
        
        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
        
        determinarGanador()
    }
    
    
    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta,0);

        crearCarta( carta, 0 );
    
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
        turnoCompuatdora(puntosJugadores[0]);
    });
    
    btnNuevoJuego.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
         nuevojuego : inicializarJuego
    };
})();

