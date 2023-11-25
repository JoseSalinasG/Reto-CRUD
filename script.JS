// Función para editar el contenido de un elemento existente
function editarContenido() {
    // Se obtiene el elemento div con la clase 'tarjeta' y se selecciona la etiqueta 'h3'
    const titulo = document.querySelector('.tarjeta h3');

    // Se obtiene el elemento div con la clase 'tarjeta' y se selecciona la etiqueta 'p'
    const parrafo = document.querySelector('.tarjeta p');

    // Se cambia el contenido del 'h3'
    titulo.textContent = 'Componente Editado';

    // Se cambia el contenido de 'p'
    parrafo.textContent = 'Este párrafo ya fue Editado';
}

// Función para crear un nuevo elemento desde JavaScript
function crearNuevaTarjeta() {
    // Obtén la sección
    const seccion = document.querySelector('section');

    // Crea un nuevo elemento div
    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.classList.add('tarjeta'); // Agrega la clase 'tarjeta'

    nuevaTarjeta.innerHTML = `
        <h3>Nuevo componente</h3>
        <p>Este es el nuevo contenido del componente</p>
    `;

    // Agrega el nuevo elemento al DOM como hijo de la sección
    seccion.appendChild(nuevaTarjeta);
}

// Llama a la función para editar el contenido
editarContenido();

// Llama a la función para crear un nuevo elemento
crearNuevaTarjeta();

