// Ejercicio 17: For...in - imprimir propiedades del alienígena

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

console.log("Datos del alienígena:");
for (const property in alien) {
    console.log(`La propiedad ${property} tiene cómo valor: ${alien[property]}`);
}
