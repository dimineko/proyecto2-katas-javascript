// Ejercicio 14: Contador de repeticiones

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
    const counter = {};
    
    for (let i = 0; i < list.length; i++) {
        const word = list[i];
        if (counter[word]) {
            counter[word]++;
        } else {
            counter[word] = 1;
        }
    }
    
    console.log("Conteo de repeticiones:");
    for (const word in counter) {
        console.log(`${word}: ${counter[word]}`);
    }
    
    return counter;
}

// Pruebo la función
console.log("Array de palabras:", words);
repeatCounter(words);
