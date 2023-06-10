import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

// Obtén el elemento del reproductor y crea una instancia de VimeoPlayer
const playerElement = document.getElementById('vimeo-player');
const player = new VimeoPlayer(playerElement);

// Escucha el evento 'timeupdate' para obtener actualizaciones del tiempo de reproducción
player.on('timeupdate', throttle(function(data) {
  // Obtén el tiempo de reproducción actualizado
  const currentTime = data.seconds;

  // Guarda el tiempo de reproducción en el almacenamiento local
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000)); // Actualiza el tiempo de reproducción no más de una vez por segundo

// Recupera el tiempo de reproducción guardado en el almacenamiento local
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  // Si hay un tiempo de reproducción guardado, establece el reproductor en esa posición
  player.setCurrentTime(savedTime);
}
