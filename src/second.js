import "./style.css";
import {popupAuth, savePage, popupAuthClose, popupRegi, searchForm, 
    popupRegClose, loginEmailForm, popupRegiEnter, loginPassForm, registerEmailForm, registerNameForm, registerPassForm, loginEmailError,loginButton, form__under} from "./js/consts/const.js";


import { savedCardsLoad } from "./js/savedCardsLoad";

import { getUserName } from "./js/getUserName";


const user = getUserName()
const savedCards = savedCardsLoad();


