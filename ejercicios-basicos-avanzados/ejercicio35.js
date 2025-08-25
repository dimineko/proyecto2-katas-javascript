// Ejercicio 35: Buscar mutantes por poder

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    const foundMutants = [];
    
    for (const mutant of mutants) {
        if (mutant.power === power) {
            foundMutants.push(mutant);
        }
    }
    
    if (foundMutants.length > 0) {
        console.log(`Se encontraron ${foundMutants.length} mutante(s) con el poder '${power}':`);
        for (const mutant of foundMutants) {
            console.log(`- ${mutant.name}`);
        }
    } else {
        console.log(`No se encontraron mutantes con el poder '${power}'`);
    }
    
    return foundMutants;
}

// Pruebo la función
console.log("Todos los mutantes:", mutants);
console.log("\nBuscando mutantes por poder:");
findMutantByPower(mutants, 'teleportation');
findMutantByPower(mutants, 'regeneration');
findMutantByPower(mutants, 'invisibility');
