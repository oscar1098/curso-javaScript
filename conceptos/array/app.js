let cadena = 'Hola';
let cadena2 = new String ('Hola mundo');

let array = [1,true,null,'hola',8.56];
let array2 = new Array(1,2,true,null,'hola');

console.log(array);
console.log(array2);

//! MODIFICAR ARRAYS

console.log("\n\n------------------------------------MODIFICAR ARRAYS------------------------------------");

let diaSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
let arrayDos = new Array(1,2,true,null,'hola');

diaSemana[1] = 'Febrero'

console.log(diaSemana);

//! OBTENER VALORES DE UN ARRAY

console.log("\n\n------------------------------------OBTENER VALORES DE UN  ARRAY------------------------------------");

let mascotas = ['gato','perro','liebre','loro'];

let miColeccion = [1, true, 'Hola mundo', mascotas,3,undefined];
console.log(miColeccion);
console.log(miColeccion[3][1]);

//! PUSH AGREGA ELEMENTOS AL FINAL DE UN ARRAY

console.log("\n\n------------------------------------METODO PUSH------------------------------------");

let frutas = ['banana','pera'];
frutas.push('manzana','coco','melon');
console.log(frutas);

//! POP ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY

console.log("\n\n------------------------------------METODO POP------------------------------------");

frutas.pop();
console.log(frutas);

//! UNSHIFT AGREGA AL PRINCIPIO

console.log("\n\n------------------------------------METODO UNSHIFT------------------------------------");

frutas.unshift('fresa','cereza');
console.log(frutas);

//! SHIFT ELIMINA EL PRIMER ELEMENTO

console.log("\n\n------------------------------------METODO SHIFT------------------------------------");

frutas.shift();
console.log(frutas);

//! METODO CONCAT UNIR ARRAYS

console.log("\n\n------------------------------------METODO CONCAT------------------------------------");

let numeros = [1,2,3,4,5,6,7,8,9];
let arrayUnido = numeros.concat(frutas); 

console.log(arrayUnido);

//! METODO INCLUDES RETORNA UN BOLEANO SI EXISTE EL VALOR

console.log("\n\n------------------------------------METODO INCLUDES------------------------------------");

let nombres = ['marcos','jorge','luis','rodrigo','gaston','marcos','felipe']

console.log(nombres.includes('marcos'));

//! METODO INDEXOF DEVUELVE EL INDICE

console.log("\n\n------------------------------------METODO INDEXOF------------------------------------");

console.log(nombres.indexOf('gaston')); 

//! METODO REVERSE INVIERTE EL ARRAY

console.log("\n\n------------------------------------METODO REVERSE------------------------------------");

let arrayInvertido = nombres.reverse();
console.log(arrayInvertido); 

//! METODO JOIN DEVUELVE UN STRING
console.log("\n\n------------------------------------METODO JOIN------------------------------------");

console.log(numeros.join());
console.log(numeros.join(''));
console.log(numeros.join(' '));
console.log(numeros.join('/')); 

//! METODO SLICE DEVUELVE UNA PARTE DEL ARRAY
console.log("\n\n------------------------------------METODO SLICE------------------------------------");

let animales = ['puma','tigre','pantera','leon','leopardo','cobra','boa','mamba'];
const felinos = animales.slice(5,8);
const felinos2 = animales.slice(4);
const felinos3 = animales.slice(-2);

console.log(felinos);
console.log(felinos2);
console.log(felinos3);

//! METODO SORT ORDENA EL ARRAY ALFABETICAMENTE
console.log("\n\n------------------------------------METODO SORT------------------------------------");

let animalesOrdenados = animales.sort();
console.log(animalesOrdenados);

//! METODO SPLICE QUITAR-REMPLAZAR-AGREGAR NUEVOS ELEMENTOS AL ARRAY splice(index,borrar,agregar)
console.log("\n\n------------------------------------METODO SPLICE------------------------------------");

let agregarEnPosicion = animales;

agregarEnPosicion.splice(5,0,'piton');
console.log(agregarEnPosicion);

agregarEnPosicion.splice(3,1,'Araña')
console.log(agregarEnPosicion);

agregarEnPosicion.splice(6,1)
console.log(agregarEnPosicion);

//! PASO POR VALOR PASO POR REFERENCIA
console.log("\n\n------------------------------------PASO POR VALOR------------------------------------");

const array5 = [1,2,3,4,5,6,7,8];
const array6 = array5

console.log(array5);
console.log(array6);

array6.pop()
console.log(array5);
console.log(array6);

//! METODO EVERY DETERMINA SI TODOS LOS VALORES EN EL ARRAY CUMPLEN UNA CONDICION. RETORNA BOLEANO
console.log("\n\n------------------------------------METODO EVERY------------------------------------");

const edades = [1,15,17,13,8]; // todos son menores a 18
const menoresEdad = (edad) => edad <= 18; // edad menor o igual a 18

let resultado = edades.every(menoresEdad);

console.log(resultado);

let resul =  edades.every (cualquierCos => cualquierCos >= 18);
console.log(resul);

//! FOR EACH
console.log("\n\n------------------------------------FOR EACH------------------------------------");

animales.forEach(valor => console.log(valor));

function retornaValores(valor,indice) {
    console.log(`${indice} = ${valor}`);
}

animales.forEach(retornaValores)

//! MAP
console.log("\n\n------------------------------------MAP------------------------------------");

const numeros2 = [1,2,3,4,5,6];

const doble = numeros2.map (function (item) {
    return item * 2
})

console.log(doble);

const nuevo = numeros2.map (function (elemento, indice) {
    return `${indice} : su valor es ${elemento};` 
})

console.log(nuevo);

//! FIND
console.log("\n\n------------------------------------FIND------------------------------------");

const heroes = [ // Exportar archivo
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

console.log(heroes);

const getHeroeByid = (id) => heroes.find( heroe => heroe.id === id);

console.log( getHeroeByid(3) );

//! FILTER
console.log("\n\n------------------------------------fILTER------------------------------------");

const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner ===  owner);

console.log(getHeroesByOwner('Marvel'));

//! ORDENAR UN ARREGLO NUMERICO
console.log("\n\n------------------------------------SORT ARREGLO NUMERICO------------------------------------");
const arr = [5, 2, 8, 1, 4];
arr.sort((a, b) => a - b);
console.log(arr); 

//! OTRO USO DEL SORT 
console.log("\n\n------------------------------------OTRO USO DEL SORT------------------------------------");
const data = [ "Zaragoza", "madrid", "Barcelona"];
data.sort ((a, b) =>
    a.toLowerCase() > b.toLowerCase() ? 1 :
    a.toLowerCase() < b.toLowerCase() ? -1:
    0
);
console.log (data);

//! LOCAL COMPARE 
console.log("\n\n------------------------------------LOCAL COMPARE------------------------------------");

const data2 = ["Zaragoza", "Ávila", "madrid", "Barcelona"];
data2.sort((a, b) => a.localeCompare(b));
console.log(data2);