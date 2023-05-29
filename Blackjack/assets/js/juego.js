/**
 * 2C = 2 treboles
 * 2D = 2 diamantes
 * 2H = 2 corazones
 * 2s = 2 de picas
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//Esta funcion crea un nuevo deck
const crearDeck = () => {

    for( let i = 2; i <= 10; i++){
        for ( let tipo of tipos ){
            deck.push(`${i}${tipo}`)
        }
    }

    for ( let tipo of tipos){
        for ( let especial of especiales){
            deck.push(`${especial}${tipo}`)
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}

crearDeck()