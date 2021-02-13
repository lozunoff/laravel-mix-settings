import iconClickHandler from './icon';
import svg4everybody from 'svg4everybody';

document.addEventListener("DOMContentLoaded", () => {
    let icons = document.getElementsByClassName('social__link');

    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('click', iconClickHandler);
    }

    svg4everybody();
});
