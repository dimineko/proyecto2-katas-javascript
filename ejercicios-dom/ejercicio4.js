// Ejercicio 4 - Eventos

// Botón con evento click
const botonClick = document.createElement('button');
botonClick.id = 'btnToClick';
botonClick.textContent = 'Haz click aquí';
botonClick.addEventListener('click', (event) => {
    console.log('Información del evento click:', event);
});
document.body.appendChild(botonClick);

// Evento focus
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
    console.log('Valor del input en focus:', event.target.value);
});

// Evento input
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
    console.log('Valor del input:', event.target.value);
});
