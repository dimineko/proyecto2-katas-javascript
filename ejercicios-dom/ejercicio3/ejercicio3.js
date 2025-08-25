// Ejercicio 3 - Listas y Elementos Dinámicos

// Lista de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

// Eliminar elemento
const elementoAEliminar = document.querySelector('.fn-remove-me');
if (elementoAEliminar) {
    elementoAEliminar.remove();
}

// Lista de coches
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});
divPrintHere.appendChild(ulCars);

// Divs con imágenes
const countriesData = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countriesData.forEach(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    
    h4.textContent = country.title;
    img.src = country.imgUrl;
    img.alt = country.title;
    
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
});

// Botón eliminar último
const botonEliminarUltimo = document.createElement('button');
botonEliminarUltimo.textContent = 'Eliminar último elemento';
botonEliminarUltimo.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    if (divs.length > 0) {
        divs[divs.length - 1].remove();
    }
});
document.body.appendChild(botonEliminarUltimo);

// Botones eliminar individuales
const divs = document.querySelectorAll('div');
divs.forEach((div, index) => {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = `Eliminar elemento ${index + 1}`;
    botonEliminar.addEventListener('click', () => {
        div.remove();
    });
    div.appendChild(botonEliminar);
});
