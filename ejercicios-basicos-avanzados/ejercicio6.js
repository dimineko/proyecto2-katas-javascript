// Ejercicio 6: Bucles for

// 1.1 Bucle del 0 al 9
console.log("1.1 - Bucle del 0 al 9:");
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// 1.2 Números pares
console.log("\n1.2 - Números pares del 0 al 9:");
for (let i = 0; i <= 9; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 1.3 Contando ovejas
console.log("\n1.3 - Contando ovejas para dormir:");
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        console.log("¡Dormido!");
    } else {
        console.log("Intentando dormir 🐑");
    }
}
