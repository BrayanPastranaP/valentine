const gifContainer = document.getElementById('gifContainer');
const messageContainer = document.getElementById('messageContainer');
const collageContainer = document.querySelector(".collage_container");
const question = document.getElementById('question');
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.getElementById('gif');

const happyGif = "mocha5final.gif"; // Ruta del GIF feliz
const sadGifs = ["enojado2.gif", "mocha2.gif","enojado.gif", "mocha3.gif", "mocha4.gif"]; // Rutas de los GIFs tristes
const noButtonMessages = [
    "Karla ¿Estás segura?",
    "¿Realmente estás segura?",
    "Estás segura de verdad, ¿eh?",
    "Di que sí, por favor",
    "Solo piensa en ello",
    "Si dices que no, estaré muy triste",
    "Estaré muy muy triste",
    "Estaré muy muy muy triste",
    "Ok, ya dejaré de preguntar...",
    "Es broma, ¡POR FAVOR DI SÍ!",
    "Estaré muy muy muy muy triste",
    "Estás rompiendo mi corazón :(",
    "NO... ya di que sí",
    "Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii",
    "Por favooooooor 😪"
];

let messageIndex = 0;
let sadGifIndex = 0;
let siBtnHeight = 50; // Altura inicial del botón "Sí" en píxeles

// Función para cambiar el mensaje, el GIF triste y aumentar la altura del botón "Sí"
const updateNoButtonState = () => {
    // Cambiar el texto del botón "No"
    noBtn.innerHTML = noButtonMessages[messageIndex % noButtonMessages.length];

    // Cambiar el GIF triste
    gif.src = "img/" + sadGifs[sadGifIndex % sadGifs.length];

    // Aumentar la altura del botón "Sí" en un 10%
    siBtnHeight *= 1.2;
    siBtn.style.height = `${siBtnHeight}px`;

    // Actualizar índices
    messageIndex++;
    sadGifIndex++;
};

// Evento para el botón "Sí"
siBtn.addEventListener('click', () => {
    question.style.display = 'none';
    siBtn.style.display = 'none';
    noBtn.style.display = 'none';
    gif.src = "img/" + happyGif;

    messageContainer.style.display = 'block';
    messageContainer.innerHTML = 'Sabía que dirías que Sí ❤️';
    collageContainer.style.display = "block";
});

// Evento para el botón "No"
noBtn.addEventListener('click', updateNoButtonState);