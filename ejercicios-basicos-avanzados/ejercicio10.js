// Ejercicio 10: Calcular promedio de números

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let suma = 0;
    
    for (let i = 0; i < numberList.length; i++) {
        suma += numberList[i];
    }
    
    const promedio = suma / numberList.length;
    console.log("El promedio es:", promedio);
    return promedio;
}

// Pruebo la función
console.log("Array de números:", numbers);
average(numbers);
