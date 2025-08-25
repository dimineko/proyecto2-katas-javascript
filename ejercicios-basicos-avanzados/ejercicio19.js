// Ejercicio 19: Mixed For...of e includes - filtrar juguetes sin gato

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

console.log("Juguetes originales:", toys);

// Creo array sin juguetes con "gato"
const toysWithoutCat = [];
for (const toy of toys) {
    if (!toy.name.toLowerCase().includes('gato')) {
        toysWithoutCat.push(toy);
    }
}

console.log("Juguetes sin gato:", toysWithoutCat);
