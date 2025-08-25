// Ejercicio 33: Obtener capital de un país

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
    if (capitals[country]) {
        console.log(`La capital de ${country} es ${capitals[country]}`);
        return capitals[country];
    } else {
        console.log(`Lo siento, no tengo información sobre la capital de ${country}`);
        return null;
    }
}

// Pruebo la función
console.log("Países disponibles:", Object.keys(capitals));
console.log("\nBuscando capitales:");
getCapital('Spain');
getCapital('France');
getCapital('Japan');
