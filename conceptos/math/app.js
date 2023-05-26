//!Obtener el numero pi

console.log(`
-------------------------------NUMERO PI-------------------------------
\n ${Math.PI}
`);

//!Mostrar decimales
console.log(`
-------------------------------MOSTRAR DECIMALES-------------------------------
\n ${Math.PI.toFixed(4)}
`);

//!QUITAR decimales
console.log(`
-------------------------------QUITARDECIMALES-------------------------------
\n ${Math.floor(Math.PI)}
`);

//!REDPONDEAR UN NUMERO
console.log(`
-------------------------------REDONDEAR UN NUMERO-------------------------------
\n ${Math.round(4.8)}
`);

//!PASAR UN NUMERO NEGATIVO A POSITIVO O VALOR ABSULUTO
console.log(`
-------------------------------PASAR NUMERO A POSITIVO O VALOR ABSOLUTO-------------------------------
\n ${Math.abs(-4.8)}
`);

//!CALCULAR LA POTENCIA
console.log(`
-------------------------------CALCULAR LA POTENCIA-------------------------------
\n ${Math.pow(2,3)}
`);

//!CREAR UN NUMERO ALEATORIO ENTRE 0 Y 1 NO TOMA EL 1
console.log(`
-------------------------------CREAR UN NUMERO ALEATORIO-------------------------------
\n ${Math.random()}
`);

//!CREAR UN NUMERO ALEATORIO ENTRE 0 Y 10 
console.log(`
-------------------------------CREAR UN NUMERO ALEATORIO-------------------------------
\n ${Math.random()*10+1}
`);

//!CREAR UN NUMERO ALEATORIO ENTRE 0 Y 10 
console.log(`
-------------------------------CREAR UN NUMERO ALEATORIO-------------------------------
\n ${Math.floor(Math.random()*10+1)}
`);

//!parseInt SE USA PARA CONERTIR UN NUMERO A ENTERO
console.log(`
-------------------------------parseInt-------------------------------
\n ${parseInt("23.3")} - ${typeof parseInt("23.3")}
`);

//!parseFloat SE USA PARA CONERTIR UN NUMERO A FLOTANTE
console.log(`
-------------------------------parseFloat-------------------------------
\n ${parseFloat("23.3")} - ${typeof parseFloat("23.3")}
`);



