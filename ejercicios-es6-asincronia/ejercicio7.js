// Ejercicio 7 - Filtro y media de videojuegos RPG

// Array de videojuegos
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

// Filtro juegos RPG y calculo media
const rpgGames = videogames.filter(game => 
    game.genders.includes('RPG')
);

// Calculo la media de scores
const rpgAverage = rpgGames.reduce((sum, game) => sum + game.score, 0) / rpgGames.length;

// Muestro los resultados
console.log('Juegos RPG:', rpgGames);
console.log('Media de scores RPG:', rpgAverage);
