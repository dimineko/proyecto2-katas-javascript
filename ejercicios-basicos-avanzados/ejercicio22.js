// Ejercicio 22: Reemplazar comidas no veganas con frutas

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

console.log("Horario de comidas original:", foodSchedule);

let fruitIndex = 0;
for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        foodSchedule[i].name = fruits[fruitIndex % fruits.length];
        fruitIndex++;
    }
}

console.log("Horario de comidas después del reemplazo:", foodSchedule);
