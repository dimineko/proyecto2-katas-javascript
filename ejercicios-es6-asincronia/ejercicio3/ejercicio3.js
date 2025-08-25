// Ejercicio 3 - Método map() en JavaScript

// 3.1 Extraer nombres con map()
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

// Extraigo solo los nombres
const userNames = users.map(user => user.name);

// Muestro el resultado
console.log('Nombres de usuarios:', userNames);

//Cambiar nombres que empiecen por 'A'
const modifiedNames = users.map(user => {
    // Cambio a 'Anacleto' si empieza por 'A'
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    }
    return user.name;
});

// Muestro el resultado
console.log('Nombres modificados:', modifiedNames);

// 3.3 Añadir '(Visitado)' a ciudades visitadas
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

// Modifico nombres de ciudades visitadas
const cityNames = cities.map(city => {
    // Añado '(Visitado)' si isVisited es true
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    }
    return city.name;
});

// Muestro el resultado
console.log('Nombres de ciudades:', cityNames);
