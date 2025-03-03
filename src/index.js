"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.scss");
const tracks = document.querySelectorAll('.player__item');
if (!!tracks.length) {
    const body = document.querySelector('body');
    const soundUrl = './assets/sounds/';
    const iconUrl = './assets/icons/';
    const bgUrl = './assets/';
    const volumeControl = document.querySelector('.volume-control');
    const pauseIcon = './assets/icons/pause.svg';
    const source = document.getElementById('source');
    const audio = document.getElementById('audio');
    const setDefultIcon = () => {
        tracks.forEach(track => {
            const icon = track.querySelector('.control-icon');
            const iconData = icon?.getAttribute('data-icon');
            icon?.setAttribute('src', iconUrl + iconData);
        });
    };
    tracks.forEach((track) => {
        const currentTrack = track?.getAttribute('data-audio');
        const defaultIcon = track?.querySelector('.control-icon')?.getAttribute('src');
        const control = track?.querySelector('.control-button');
        const icon = track?.querySelector('.control-icon');
        let targetSource = '';
        control?.addEventListener('click', () => {
            const currentBg = track.getAttribute('data-bg');
            body.style.backgroundImage = 'url(' + bgUrl + currentBg + ')';
            targetSource = source?.src;
            source.setAttribute('src', soundUrl + currentTrack);
            if (targetSource == source.src) {
                if (!audio.paused) {
                    audio.pause();
                    icon?.setAttribute('src', defaultIcon);
                }
                else {
                    source.src = soundUrl + currentTrack;
                    audio.play();
                    icon?.setAttribute('src', pauseIcon);
                }
            }
            else {
                source.src = soundUrl + currentTrack;
                audio.load();
                audio.play();
                setDefultIcon();
                icon?.setAttribute('src', pauseIcon);
            }
        });
        volumeControl?.addEventListener('input', () => {
            audio.volume = Number(volumeControl.value);
        });
    });
}
