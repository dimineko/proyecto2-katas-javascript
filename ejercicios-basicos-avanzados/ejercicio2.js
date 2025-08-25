// Ejercicio 2: Modificación de objetos y concatenación

// 1. Modifico la edad de Luke
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log("Luke Skywalker ahora tiene:", jedi.edad, "años");

// 2. Creo las variables de Leia
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// 3. Calculo el precio total
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
const precioTotal = sable1.precio + sable2.precio;
console.log("El precio total de los sables es:", precioTotal, "créditos");

// 4. Actualizo los precios
let precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Nave 1 -", nave1.nombre + ":", nave1.precioFinal, "créditos");
console.log("Nave 2 -", nave2.nombre + ":", nave2.precioFinal, "créditos");
