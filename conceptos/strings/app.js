let cadena = 'Hola mundo';

console.log(typeof cadena);

console.log(cadena.length);

let ultimoCaracter = cadena.length -1;

console.log(cadena[ultimoCaracter]);

console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

//! METODO TRIM

let cadena2 = '     esto es     una cadena con     problemas de espacio   .';

cadena2 = (cadena2.trim().toUpperCase());
console.log(cadena2);


//!INDEX OF
console.log('index-------------------');
let saludo = "Hola Mundo";
console.log(saludo.indexOf('45345'));

//! SLICE

let saludo2= "Hola-mundo";
console.log(saludo2.slice(5));

//! REPLACE

let hola = "Hola mundo";
console.log(hola.replace("mundo","amigos"));

//! CARACTERES DE ESCAPE

let mensaje = "El perro \"fue\" \na morder otro \tperro";
console.log(mensaje);