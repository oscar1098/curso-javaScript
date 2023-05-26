const cliente01 =  {
    nombre : 'Oscar',
    apellido : 'Ardila',
    edad : 23,
    'hola mundo' : 45,
    45 : 'cuarenta y 5'
};

const objeto = {a : 22};

const cliente02 =  {
    nombre : 'Oscar2',
    apellido : 'Ardila2',
    edad : 232,
    'hola mundo' : 46
};

console.log(cliente01[45]);
console.log(cliente02["hola mundo"]);

//! AGREGAR O ACTUALIZAR PROPIEDADES

cliente01.edad = 25;
cliente01.sobreNombre = 'Gato';
console.log(`
\n-----------------------------------------------------AGREGAR O ACTUALIZAR PROPIEDADES-----------------------------------------------------\n
${cliente01.edad}\n${cliente01.sobreNombre}`);

//! OBJETO PASO POR VALOR

const cliente1 = {
    nombre : 'Oscar',
    edad : 23
};

const cliente2 = cliente1;
cliente2.edad = 50;
console.log(`
\n-----------------------------------------------------PASO POR VALOR -----------------------------------------------------\n
${cliente1.edad}`);

//! ELIMINAR

delete cliente01.nombre

console.log(`
\n-----------------------------------------------------ELIMINAR-----------------------------------------------------\n`);

console.log(cliente01);



