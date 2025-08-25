// Ejercicio 27: Encontrar la serie de dibujos animados más antigua

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let serieMasAntigua = cartoons[0];

// Busco la serie más antigua
for (const cartoon of cartoons) {
    if (cartoon.debut < serieMasAntigua.debut) {
        serieMasAntigua = cartoon;
    }
}

console.log("Todas las series:", cartoons);
console.log("La serie más antigua es:", serieMasAntigua.name, "del año", serieMasAntigua.debut);
