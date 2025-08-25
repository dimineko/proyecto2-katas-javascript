// Ejercicio 23: Filtrar películas por duración

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const peliculasPequenas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

for (const movie of movies) {
    if (movie.durationInMinutes < 100) {
        peliculasPequenas.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        peliculasMedianas.push(movie);
    } else {
        peliculasGrandes.push(movie);
    }
}

console.log("Películas pequeñas (menos de 100 min):", peliculasPequenas);
console.log("Películas medianas (100-200 min):", peliculasMedianas);
console.log("Películas grandes (más de 200 min):", peliculasGrandes);
