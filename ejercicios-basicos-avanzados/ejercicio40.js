// Ejercicio 40: Funciones para encontrar índice y eliminar elementos

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            console.log(`'${text}' encontrado en el índice ${i}`);
            return i;
        }
    }
    console.log(`'${text}' no encontrado en el array`);
    return -1;
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`'${text}' eliminado del array`);
    }
    return array;
}

// Pruebo las funciones
console.log("Array original:", mainCharacters);

console.log("\nBuscando 'Luke':");
findArrayIndex(mainCharacters, "Luke");

console.log("\nBuscando 'Rey':");
findArrayIndex(mainCharacters, "Rey");

console.log("\nBuscando 'Yoda':");
findArrayIndex(mainCharacters, "Yoda");

console.log("\nEliminando 'Han Solo':");
removeItem(mainCharacters, "Han Solo");
console.log("Array después de eliminar:", mainCharacters);

console.log("\nEliminando 'Chewbacca':");
removeItem(mainCharacters, "Chewbacca");
console.log("Array después de eliminar:", mainCharacters);
