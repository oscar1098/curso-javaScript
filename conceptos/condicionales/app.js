//IF
if(true){
    console.log(`
    --------------------------------------------IF --------------------------------------------
    \nEstoy dentro del if`);
}

//ELSE
if(false){
    console.log(`
    --------------------------------------------ELSE --------------------------------------------
    \nEstoy dentro del if`);
}else{
    console.log(`
    --------------------------------------------ELSE --------------------------------------------
    \nEstoy dentro del else`);
}

//IF ELSE
if(false){
    console.log(`
    --------------------------------------------IF ELSE --------------------------------------------
    \nEstoy dentro del if`);
}else if(true ){
    console.log(`
    --------------------------------------------IF ELSE --------------------------------------------
    \nEstoy dentro del if else`);
}else{
    console.log(`
    --------------------------------------------IF ELSE --------------------------------------------
    \nEstoy dentro del else`);
}

// SWITVH CASE

switch (1) {
    case 1:
        console.log(`
    --------------------------------------------SWITCH --------------------------------------------
    \nEstoy dentro del switch`);
        break;

    default:
        break;
}

// TERNARIO

console.log("--------------------------------------------TERNARIO--------------------------------------------");
let edad = 18;

18 >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");;

console.log(edad >= 18 ? "Es mayor" : "Es menor");
