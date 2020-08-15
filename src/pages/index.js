import {enSelectors, ruSelectors} from '../scripts/constants.js';
import {Button} from '../scripts/Button.js';
import './index.css';

const buttonRu = new Button ('.header__lang-link_RU', enSelectors, ruSelectors);
buttonRu.setEventListeners();
const buttonEn = new Button ('.header__lang-link_EN', enSelectors, ruSelectors);
buttonEn.setEventListeners();

