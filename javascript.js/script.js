const texto = "{Sergio Velásquez}"; // Reemplaza con tu nombre o texto deseado
let charIndex = 0;
let direction = 1;

function escribirTexto() {
  const nombreElemento = document.getElementById('nombre');
  nombreElemento.innerHTML = texto.substring(0, charIndex);

  if (direction === 1) {
    charIndex++;
    if (charIndex > texto.length) {
      direction = -1;
      setTimeout(escribirTexto, 1000);
    } else {
      setTimeout(escribirTexto, 100);
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      direction = 1;
      setTimeout(escribirTexto, 1000);
    } else {
      setTimeout(escribirTexto, 100);
    }
  }
}

const miNombrePortada = document.getElementById('MiNombrePortada');
miNombrePortada.innerHTML = 'Soy <span id="nombre" class="typewriter"></span>';

escribirTexto();

  
var audio = new Audio();
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');
var volumeUpButton = document.getElementById('volume-up-button');
var volumeDownButton = document.getElementById('volume-down-button');
var songIndex = 0; // Índice de la canción actual
var songs = [
  'musica/X2Download.app - Hola Beats - Black (128 kbps).mp3',
  'musica/X2Download.app - Hola Beats - Latte (128 kbps).mp3',
  'musica/X2Download.app - Hola Beats - Doppio (128 kbps).mp3'
]; // Lista de canciones

document.addEventListener('DOMContentLoaded', function() {
  audio.src = songs[songIndex]; // Establece la primera canción
  audio.play();
});

playButton.addEventListener('click', function() {
  audio.play();
});

pauseButton.addEventListener('click', function() {
  audio.pause();
});

volumeUpButton.addEventListener('click', function() {
  audio.volume += 0.1;
});

volumeDownButton.addEventListener('click', function() {
  audio.volume -= 0.1;
});

// Agregar controles para cambiar de canción
var nextButton = document.getElementById('next-button');
var prevButton = document.getElementById('prev-button');

nextButton.addEventListener('click', function() {
  songIndex++;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }
  audio.src = songs[songIndex];
  audio.play();
});

prevButton.addEventListener('click', function() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  audio.src = songs[songIndex];
  audio.play();
});












// Obtén la imagen por su ID
var img = document.getElementById('img-1');

// Agrega la clase "rotate" cuando se pasa el cursor por encima de la imagen
img.addEventListener('mouseover', function() {
  img.classList.add('rotate');
});

// Remueve la clase "rotate" cuando se quita el cursor de la imagen
img.addEventListener('mouseout', function() {
  img.classList.remove('rotate');
});


/*----------------------------------*/




// Obtén la imagen por su ID
var img = document.getElementById('img-1');

// Función para activar el movimiento giratorio
function activateRotation() {
  img.classList.add('rotate');
}

// Función para desactivar el movimiento giratorio
function deactivateRotation() {
  img.classList.remove('rotate');
}

// Evento para dispositivos táctiles
img.addEventListener('touchstart', function() {
  activateRotation();
  // Desactiva el movimiento giratorio después de 2 segundos
  setTimeout(deactivateRotation, 2000);
});


