// Ejercicio 41: Función para simular tirada de dado

function rollDice(numFaces) {
    const result = Math.floor(Math.random() * numFaces) + 1;
    console.log(`Tirada de dado de ${numFaces} caras: ${result}`);
    return result;
}

// Pruebo la función
console.log("Simulando tiradas de dados:");
rollDice(6);  // Dado de 6 caras
rollDice(20); // Dado de 20 caras
rollDice(4);  // Dado de 4 caras
rollDice(12); // Dado de 12 caras
