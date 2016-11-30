/*require('flag-icon-css/css/flag-icon.css');*/
import './menu.css';
/*import 'flag-icon-css/css/flag-icon.css';*/
import template from './menu.jade';
import plus from './plus.png'

let img = document.createElement('img');
img.src = plus;
document.body.appendChild(img);

export default class Menu {
    constructor(params) {
        this.element = document.createElement('div');
        this.element.className = 'menu';
        this.element.innerHTML = template(params);

        this.titleElem = this.element.querySelector('.title');
        this.titleElem.onclick = () => {
            this.element.classList.toggle('open');
        }
        this.titleElem.onmousedown = () => false;

    }
}
