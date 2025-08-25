// Ejercicio 5 - Filtro de streamers con input

// Array de streamers
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Obtengo el input del DOM
const input = document.querySelector('[data-function="toFilterStreamers"]');

// Función para filtrar streamers
function filterStreamers(searchText) {
    // Filtro streamers que contengan el texto
    const filtered = streamers.filter(streamer => 
        streamer.name.toLowerCase().includes(searchText.toLowerCase())
    );
    
    // Muestro resultado por consola
    console.log('Streamers filtrados:', filtered);
}

// Añado evento de input
input.addEventListener('input', (e) => {
    // Llamo a la función con el valor del input
    filterStreamers(e.target.value);
});
