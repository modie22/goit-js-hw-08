
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURR_TIME = 'videoplayer-current-time';

const playerEl = document.querySelector('iframe');
const play = new Player(playerEl);
play.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(CURR_TIME, seconds);
}
play.setCurrentTime(localStorage.getItem(CURR_TIME));
