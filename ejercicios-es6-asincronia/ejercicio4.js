// Ejercicio 4 - Método filter() en JavaScript

// 4.1 Filtrar edades mayores de 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// Filtro edades mayores de 18
const adults = ages.filter(age => age > 18);

// Muestro el resultado
console.log('Edades mayores de 18:', adults);

// 4.2 Filtrar números pares
const evenAges = ages.filter(age => age % 2 === 0);

// Muestro el resultado
console.log('Edades pares:', evenAges);

// 4.3 Filtrar streamers por juego
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Filtro por League of Legends
const lolStreamers = streamers.filter(streamer => 
    streamer.gameMorePlayed === 'League of Legends'
);

// Muestro el resultado
console.log('Streamers de LoL:', lolStreamers);

// 4.4 Filtrar streamers con 'u' en el nombre
const streamersWithU = streamers.filter(streamer => 
    streamer.name.includes('u')
);

// Muestro el resultado
console.log('Streamers con "u" en nombre:', streamersWithU);

// 4.5 Filtrar por 'Legends' y modificar mayores de 35
const legendsStreamers = streamers.filter(streamer => 
    streamer.gameMorePlayed.includes('Legends')
).map(streamer => {
    // Pongo en mayúsculas si es mayor de 35
    if (streamer.age > 35) {
        return {
            ...streamer,
            gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
        };
    }
    return streamer;
});

// Muestro el resultado
console.log('Streamers de Legends (modificados):', legendsStreamers);
