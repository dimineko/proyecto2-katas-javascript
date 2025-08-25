// Ejercicio 5 - Lista de Álbumes

// Array de álbumes
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Crear lista dinámicamente
const ul = document.createElement('ul');
albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    ul.appendChild(li);
});

document.body.appendChild(ul);
