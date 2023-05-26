//! BUCLE FOR
for (let i = 0; i < 5; i++){
    console.log(`Hola mundo ${i}`);
}

//! RECORRER ARRAY

const misAlumnos = ['Oscar', 'Pedro' , 'Romina', 'Luis', 'Manuel', ' Adriana'];

console.log('\n--------------------------------------------------RECORRER ARRAY--------------------------------------------------\n');

for ( i of misAlumnos){
    console.log(`${i}\n`);
}

for (let i = 0; i < misAlumnos.length; i++){
    console.log(`${misAlumnos[i]}\n`);
}

//! RECORRER OBJETO CON FOR OF

console.log('------------------------------------------------RECORRRER OBJETO FOR OF------------------------------------------------');

let cliente01 = {
    nombre : 'Oscar',
    apellido : 'Ardila',
    edad : 23,
    domicilio: 'Mutis',
    localidad : 'Bucaramanga'

}

for (let elemento of Object.values(cliente01)){
    console.log(elemento);
}
console.log('----------------------------------------------------------------');

for (let elemento of Object.keys(cliente01)){
    console.log(`${elemento} : ${cliente01[elemento]}`); 
}

//! RECORRER OBJETOS CON FOR IN
console.log("\n---------------------------------------------------------RECORRER OBJETOS CON FOR IN---------------------------------------------------------\n");

const ticket01 = {
    sal : 33,
    fosforo : 12,
    azucar : 55,
    pan : 15
}

for (let key in ticket01){
    console.log(`${key} : ${ticket01[key]}`);
}




