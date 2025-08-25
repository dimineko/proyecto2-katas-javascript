// Ejercicio 9 - PokeAPI

// Selecciono la imagen en el DOM
const img = document.querySelector(".random-image");

// Genero un número aleatorio del 1 al 151
const pokemonId = Math.floor(Math.random() * 151) + 1;

// Construyo la URL de la API con el ID aleatorio
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

// Hago la petición a la PokeAPI
fetch(url)
  .then((res) => res.json()) // Convierto la respuesta a JSON
  .then((data) => {
    // Busco la imagen de mejor calidad en los datos del Pokémon
    const imageUrl = data.sprites.other["official-artwork"].front_default;
    // Asigno la URL al atributo 'src' de la imagen
    img.src = imageUrl;
  });