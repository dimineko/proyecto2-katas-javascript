// Ejercicio 1 - Destructuring en JavaScript

// 1.1 Destructuring del objeto game
const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

// Extraigo propiedades del objeto
const {title, gender, year} = game;

// Muestro las variables por consola
console.log('Título:', title);
console.log('Género:', gender);
console.log('Año:', year);

// 1.2 Destructuring del array fruits
const fruits = ['Banana', 'Strawberry', 'Orange'];

// Creo variables con destructuring
const [fruit1, fruit2, fruit3] = fruits;

// Muestro las variables por consola
console.log('Fruta 1:', fruit1);
console.log('Fruta 2:', fruit2);
console.log('Fruta 3:', fruit3);

// 1.3 Destructuring de función que retorna objeto
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

// Destructuring directo de la función
const {name, race} = animalFunction();

// Muestro las variables por consola
console.log('Nombre:', name);
console.log('Raza:', race);

// 1.4 Destructuring del objeto car y su array itv
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020]};

// Extraigo name e itv del objeto
const {name: carName, itv} = car;

// Destructuring del array itv
const [year1, year2, year3] = itv;

// Muestro todo por consola
console.log('Nombre del coche:', carName);
console.log('ITV completa:', itv);
console.log('ITV año 1:', year1);
console.log('ITV año 2:', year2);
console.log('ITV año 3:', year3);
