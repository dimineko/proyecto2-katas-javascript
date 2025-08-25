// Ejercicio 9: Calcular suma de números en un array

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let suma = 0;
    
    for (let i = 0; i < numberList.length; i++) {
        suma += numberList[i];
    }
    
    console.log("La suma de todos los números es:", suma);
    return suma;
}

// Pruebo la función
console.log("Array de números:", numbers);
sumNumbers(numbers);
