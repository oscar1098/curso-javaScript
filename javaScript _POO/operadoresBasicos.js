var precioUnidad, cantidad,total;

precioUnidad = 5;
cantidad = 100;
total = precioUnidad*cantidad
document.write("El importe total de la compra es: " + total + " €")

var nombre = prompt("Ingrese tu nombre epor favor");
var apellido = prompt("Ingrese su apellido por favor");
var edad = prompt("Ingresa tu edad");
var restando = prompt("¿Cuantos años desea quitarse?");
edad -= restando

document.write("<p>");

document.write("Bienvenido: " + nombre + " " + apellido + "<br/>" + "Te gustaria tener " + edad + " años");

document.write("</p>");