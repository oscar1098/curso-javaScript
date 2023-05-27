function llamarJaimito(compra){
    console.log('La compra fue exitosa00');
    return compra;
}

let recibeAlgo = llamarJaimito('leche');
console.log(recibeAlgo);

let miFuncion = function (producto1,producto2) {
    console.log('La compra fue exitosa');
    return `Te compre ${producto1} y tambien ${producto2}`;
}

let regresaDato = miFuncion("pan", "leche")

console.log(regresaDato);


//!  FUNCION FLECHA


let funcionFlecha = () => {console.log("Esto es desde la funcion flecha");}

let funcionFlecha2= () => console.log("Esto es desde la funcion flecha 2");

funcionFlecha();
funcionFlecha2();

//! FUNCTION CALLBACK


function comprar (articulo1,articulo2,funcion){
    articulo1 = 65;
    articulo2 = 70;
    let gastado = articulo1 + articulo2;
    funcion(gastado)
}


function imprimir (mensaje){
    console.log(`Compramos leche y pan y gastamos ${mensaje}`);
}


comprar('leche', 'pan' , imprimir);

//! PASAR FUNCION COMO ARGUMENTO 
console.log("\n------------------------------------------PASAR FUNCION COMO ARGUMENTO------------------------------------------\n");

function repetir (funcion, numero) {
    for (let i  = 0; i < numero; i++){
        funcion('Oscar')
    }
}

function hola (nombre) {
    console.log(`Hola ${nombre}`);
}

repetir(hola, 10)

//! FUNCION QUE RETORNA FUNCION 
console.log("\n------------------------------------------FUNCION QUE RETORNA FUNCION------------------------------------------\n");

function regresaFuncion() {
    return function(){
        console.log('Mas rebuscado no puede ser');
    }
}
const miFuncion2 = regresaFuncion();
miFuncion2()

function multiplicarPor(num){
    return function (otroNumero){
        return otroNumero * num;
    }
}

const miFuncion3 = multiplicarPor(5);
console.log(miFuncion3(3));




//! EJERCICIO 1

console.log("\n------------------------------------------EJERCICIO 1------------------------------------------\n");

let isValidPassword = (user, pass) => { return ( pass.length < 8 ||  pass.indexOf(' ') !=-1 || user == pass ) ? false : true  }


console.log(isValidPassword('oscar','oscar 12333'));

//! EJERCICIO 2
console.log("\n------------------------------------------EJERCICIO 2------------------------------------------\n");

function promedio(array) {
    suma = 0
    for ( let num of array){
        suma += num
    }
    return suma/array.length
}

console.log(promedio([2,8,6,4,7,3,1,9]));

//! EJERCICIO 3
console.log("\n------------------------------------------EJERCICIO 3------------------------------------------\n");

let alfabeto = 'abcdefghijklmnopqrstuvwxyz';

function verificaCadena (cadena) {

    for ( let letra of alfabeto){
       if ( cadena.indexOf(letra) === -1){
            return false;
       } 
    }
    return true;
} 

console.log(verificaCadena('abcdefghijklmnopqrstuvwxyz'));

//! EJERCICIO 4 
console.log("\n------------------------------------------EJERCICIO 4------------------------------------------\n");

function datosAleatorios (array){
    let indice =  Math.floor(Math.random() * array.length)
    return array[indice]
}

console.log(datosAleatorios(['perro','gato','conejo', 'raton', 'loro', 'ardilla', 'cerdo', 'vaca', 'toro']));




