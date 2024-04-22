import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const vimeoPlayer = new Player(iframe);

vimeoPlayer.on('timeupdate', throttle((data) => {
    const currentTime = Math.floor(data.seconds);
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

window.addEventListener('DOMContentLoaded', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        vimeoPlayer.setCurrentTime(savedTime);
    }
});
