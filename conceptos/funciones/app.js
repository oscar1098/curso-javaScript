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


//  FUNCION FLECHA


let funcionFlecha = () => {console.log("Esto es desde la funcion flecha");}

let funcionFlecha2= () => console.log("Esto es desde la funcion flecha 2");

funcionFlecha();
funcionFlecha2();

// FUNCTION CALLBACK


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


