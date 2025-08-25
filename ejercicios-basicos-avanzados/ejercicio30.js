// Ejercicio 30: Clasificar canciones por género

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const cancionesPorGenero = {};

// Clasifico por género
for (const track of tracks) {
    if (!cancionesPorGenero[track.genre]) {
        cancionesPorGenero[track.genre] = [];
    }
    
    cancionesPorGenero[track.genre].push(track);
}

console.log("Todas las canciones:", tracks);
console.log("Canciones clasificadas por género:", cancionesPorGenero);
