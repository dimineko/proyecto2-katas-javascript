// Ejercicio 13: Buscador de nombres

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, searchName) {
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === searchName) {
            console.log(`Encontrado: ${searchName} en la posición ${i}`);
            return { found: true, position: i };
        }
    }
    
    console.log(`No encontrado: ${searchName}`);
    return { found: false, position: -1 };
}

// Pruebo la función
console.log("Array de nombres:", names);
console.log("\nBuscando 'Tony':");
nameFinder(names, 'Tony');

console.log("\nBuscando 'Batman':");
nameFinder(names, 'Batman');
