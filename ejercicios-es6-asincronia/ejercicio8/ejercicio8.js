// Ejercicio 8 - API Game of Thrones

// URL de la API
const API_URL = 'https://thronesapi.com/api/v2/Characters';

// Elementos del DOM
const select = document.getElementById('character-list');
const image = document.querySelector('.character-image');

// Función para cargar personajes
async function loadCharacters() {
    try {
        // Hago petición a la API
        const response = await fetch(API_URL);
        const characters = await response.json();
        
        // Lleno el select con los personajes
        characters.forEach(character => {
            const option = document.createElement('option');
            option.value = character.id;
            option.textContent = character.fullName;
            select.appendChild(option);
        });
        
        // Muestro la primera imagen por defecto
        if (characters.length > 0) {
            image.src = characters[0].imageUrl;
        }
        
    } catch (error) {
        console.error('Error cargando personajes:', error);
    }
}

// Función para cambiar imagen
async function changeCharacter() {
    try {
        // Obtengo el personaje seleccionado
        const response = await fetch(API_URL);
        const characters = await response.json();
        
        const selectedCharacter = characters.find(char => 
            char.id === parseInt(select.value)
        );
        
        // Cambio la imagen
        if (selectedCharacter) {
            image.src = selectedCharacter.imageUrl;
        }
        
    } catch (error) {
        console.error('Error cambiando personaje:', error);
    }
}

// Eventos
select.addEventListener('change', changeCharacter);

// Cargo personajes al iniciar
loadCharacters();
