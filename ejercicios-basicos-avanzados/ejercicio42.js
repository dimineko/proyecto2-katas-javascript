// Ejercicio 42: Función para intercambiar elementos en un array

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
    // Verificar que los índices sean válidos
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        console.log("Error: Índices fuera de rango");
        return array;
    }
    
    // Intercambiar elementos
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    
    console.log(`Intercambiados elementos en posiciones ${index1} y ${index2}`);
    return array;
}

// Probar la función
console.log("Array original:", fantasticFour);

console.log("\nIntercambiando posiciones 0 y 2:");
swap(fantasticFour, 0, 2);
console.log("Array después del intercambio:", fantasticFour);

console.log("\nIntercambiando posiciones 1 y 3:");
swap(fantasticFour, 1, 3);
console.log("Array después del intercambio:", fantasticFour);

console.log("\nIntentando intercambiar con índice inválido:");
swap(fantasticFour, 0, 10);
console.log("Array sin cambios:", fantasticFour);
