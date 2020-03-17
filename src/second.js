import "./style.css";
import {popupAuth, constsList, savePage, popupAuthClose, popupRegi, searchForm, 
    popupRegClose, loginEmailForm, popupRegiEnter, loginPassForm, registerEmailForm, registerNameForm, registerPassForm, loginEmailError,loginButton} from "./js/consts/const.js";
    import {mobileMenuOpen} from './js/mobileMenuOpen';
    import {mobileMenuBack} from './js/mobileMenuBack';

import { savedCardsLoad } from "./js/savedCardsLoad";

import { getUserName } from "./js/getUserName";


const user = getUserName();
const savedCards = savedCardsLoad();
constsList.mobileMenu.addEventListener('click', mobileMenuOpen);
constsList.mobileMenuBack.addEventListener('click', mobileMenuBack);

constsList.headerAuthorizatioNameBlock.addEventListener('click', constsList.loginExit)