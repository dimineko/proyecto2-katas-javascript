// Ejercicio 39: Contar cuántas veces se repite cada sonido como favorito

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const soundCount = {};

// Cuento repeticiones
for (const user of users) {
    for (const sound in user.favoritesSounds) {
        if (soundCount[sound]) {
            soundCount[sound]++;
        } else {
            soundCount[sound] = 1;
        }
    }
}

console.log("Usuarios:", users);
console.log("Conteo de sonidos favoritos:");
for (const sound in soundCount) {
    console.log(`${sound}: ${soundCount[sound]} veces`);
}
