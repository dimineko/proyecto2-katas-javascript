// Ejercicio 1 - QuerySelector

// Botón con clase showme
const boton = document.querySelector('.showme');
console.log('1.1 - Botón con clase showme:', boton);

// H1 con id pillado
const titulo = document.querySelector('#pillado');
console.log('1.2 - H1 con id pillado:', titulo);

// Todos los párrafos
const parrafos = document.querySelectorAll('p');
console.log('1.3 - Todos los párrafos:', parrafos);

// Elementos con clase pokemon
const pokemons = document.querySelectorAll('.pokemon');
console.log('1.4 - Elementos con clase pokemon:', pokemons);

// Elementos con data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
console.log('1.5 - Elementos con data-function="testMe":', testMeElements);

// 3er personaje con data-function="testMe"
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log('1.6 - 3er personaje con data-function="testMe":', tercerPersonaje);
