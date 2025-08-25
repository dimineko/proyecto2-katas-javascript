// Ejercicio 34: Calcular promedio de duración de películas

const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
    let totalDuration = 0;
    
    for (const movie of movies) {
        totalDuration += movie.duration;
    }
    
    const averageDuration = totalDuration / movies.length;
    console.log(`El promedio de duración de las películas es: ${averageDuration} minutos`);
    return averageDuration;
}

// Pruebo la función
console.log("Películas:", movies);
averageMovieDuration(movies);
