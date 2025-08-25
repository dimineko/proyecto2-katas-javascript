// Ejercicio 8: Buscar la palabra más larga

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
    let longestWord = stringList[0];
    
    for (let i = 1; i < stringList.length; i++) {
        if (stringList[i].length > longestWord.length) {
            longestWord = stringList[i];
        }
    }
    
    console.log("La palabra más larga es:", longestWord);
    return longestWord;
}

// Pruebo la función
console.log("Array de Avengers:", avengers);
findLongestWord(avengers);
