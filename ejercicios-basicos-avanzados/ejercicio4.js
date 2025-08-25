// Ejercicio 4: Manipulación de arrays

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saco a Tendo por posición
console.log("4.1 - Tendo está en la posición 3:", aldeanos[3]);

// 4.2 - Añado Cervasio al final
aldeanos.push("Cervasio");
console.log("4.2 - Array después de añadir Cervasio:", aldeanos);

// 4.3 - Cambio el primer elemento
aldeanos[0] = "Bambina";
console.log("4.3 - Array después de cambiar el primer elemento:", aldeanos);

// 4.4 - Doy la vuelta al array
aldeanos.reverse();
console.log("4.4 - Array al revés:", aldeanos);

// 4.5 - Cambio Narciso por Canela
const indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
    aldeanos.splice(indiceNarciso, 1, "Canela");
}
console.log("4.5 - Array después de cambiar Narciso por Canela:", aldeanos);

// 4.6 - Imprimo el último elemento
console.log("4.6 - El último elemento es:", aldeanos[aldeanos.length - 1]);
