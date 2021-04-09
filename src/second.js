import "./style.css";
import {constsList} from "./js/consts/const.js";
import {mobileMenuOpen} from './js/mobileMenuOpen';
import {mobileMenuBack} from './js/mobileMenuBack';

import { savedCardsLoad } from "./js/savedCardsLoad";

import { getUserName } from "./js/getUserName";

import { loginExitSecondPage } from "./js/loginExitSecondPage";

const user = getUserName();
const savedCards = savedCardsLoad();
constsList.mobileMenu.addEventListener('click', mobileMenuOpen);
constsList.mobileMenuBack.addEventListener('click', mobileMenuBack);

constsList.headerAuthorizatioNameBlock.addEventListener('click', loginExitSecondPage)