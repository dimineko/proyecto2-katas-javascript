// Ejercicio 24: Filtrar personajes humanos de Star Wars

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];

const humanCharacters = [];

// Añado personajes humanos
for (const character of characters) {
    if (character.species === 'Human') {
        humanCharacters.push(character);
    }
}

console.log("Todos los personajes:", characters);
console.log("Personajes humanos:", humanCharacters);
