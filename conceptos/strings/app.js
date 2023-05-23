let cadena = 'Hola mundo';

console.log(typeof cadena);

console.log(cadena.length);

let ultimoCaracter = cadena.length -1;

console.log(cadena[ultimoCaracter]);

console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

// METODO TRIM

let cadena2 = '     esto es     una cadena con     problemas de espacio   .';

cadena2 = (cadena2.trim().toUpperCase());
console.log(cadena2);


//INDEX OF


let saludo = "Hola Mundo";
console.log(saludo.indexOf('Mundo'));