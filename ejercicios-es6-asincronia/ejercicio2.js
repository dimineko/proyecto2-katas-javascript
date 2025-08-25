// Ejercicio 2 - Spread Operators en JavaScript

// 2.1 Copia de array usando spread
const pointsList = [32, 54, 21, 64, 75, 43];

// Creo copia con spread operator
const pointsListCopy = [...pointsList];

// Muestro ambas arrays
console.log('Array original:', pointsList);
console.log('Copia del array:', pointsListCopy);

// 2.2 Copia de objeto usando spread
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

// Creo copia del objeto
const toyCopy = {...toy};

// Muestro ambos objetos
console.log('Objeto original:', toy);
console.log('Copia del objeto:', toyCopy);

// 2.3 Unir arrays con spread
const pointsList2 = [54, 87, 99, 65, 32];

// Uno los dos arrays
const combinedPoints = [...pointsList, ...pointsList2];

// Muestro el resultado
console.log('Arrays combinados:', combinedPoints);

// 2.4 Fusionar objetos con spread
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

// Fusiono los objetos
const mergedToy = {...toy, ...toyUpdate};

// Muestro el objeto fusionado
console.log('Objeto fusionado:', mergedToy);

// 2.5 Copia de array eliminando posición 2
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// Creo copia sin la posición 2 usando spread
const colorsWithoutYellow = [...colors.slice(0, 2), ...colors.slice(3)];

// Muestro ambos arrays
console.log('Array original:', colors);
console.log('Array sin amarillo:', colorsWithoutYellow);
