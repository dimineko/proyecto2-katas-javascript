// Ejercicio 7: Función para encontrar el número mayor

function greaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log("El número mayor es:", numberOne);
        return numberOne;
    } else if (numberTwo > numberOne) {
        console.log("El número mayor es:", numberTwo);
        return numberTwo;
    } else {
        console.log("Los números son iguales:", numberOne);
        return numberOne;
    }
}

// Ejemplos de uso
console.log("Ejemplo 1:");
greaterNumber(10, 20);

console.log("\nEjemplo 2:");
greaterNumber(50, 30);

console.log("\nEjemplo 3:");
greaterNumber(15, 15);
