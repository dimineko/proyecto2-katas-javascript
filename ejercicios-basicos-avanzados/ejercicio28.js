// Ejercicio 28: Sumar duraciones de álbumes de rock

const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.00 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

let totalDuracionRock = 0;

// Sumo duraciones de rock
for (const album of albums) {
    if (album.genre === 'Rock') {
        totalDuracionRock += album.duration;
    }
}

console.log("Todos los álbumes:", albums);
console.log("Total de duración de álbumes de rock:", totalDuracionRock, "minutos");
