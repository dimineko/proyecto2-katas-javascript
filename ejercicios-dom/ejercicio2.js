// Ejercicio 2 - Manipulación del DOM

// Div vacío
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// Div con párrafo
const divConP = document.createElement('div');
const parrafo = document.createElement('p');
parrafo.textContent = 'Soy un párrafo dentro de un div';
divConP.appendChild(parrafo);
document.body.appendChild(divConP);

// Div con 6 párrafos
const divCon6P = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo número ${i}`;
    divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);

// Párrafo dinámico
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// Texto en h2
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// Lista de apps
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// Eliminar elementos
const elementosAEliminar = document.querySelectorAll('.fn-remove-me');
elementosAEliminar.forEach(elemento => {
    elemento.remove();
});

// Párrafo en medio
const divs = document.querySelectorAll('div');
if (divs.length >= 2) {
    const pMedio = document.createElement('p');
    pMedio.textContent = 'Voy en medio!';
    divs[1].insertAdjacentElement('beforebegin', pMedio);
}

// Párrafos dentro de divs
const divsInsertHere = document.querySelectorAll('.fn-insert-here');
divsInsertHere.forEach(div => {
    const pDentro = document.createElement('p');
    pDentro.textContent = 'Voy dentro!';
    div.appendChild(pDentro);
});
