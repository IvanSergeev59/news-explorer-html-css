import "./style.css";
import {popupAuth, headerAuthorizatioNameBlock, mobileMenu, popupAuthClose, popupRegi, loginFormCloseSpace, searchForm, popupRegClose, loginEmailForm, popupRegiEnter, loginPassForm, registerEmailForm, registerNameForm, registerPassForm, loginEmailError,loginButton} from "./js/consts/const.js";
import {PopupAuthWin} from "./js/AuthorizationWin";
import {PopupRegWin} from "./js/RegistrationWin";
import {validationLoginEmail, validationRegister, validationSearch} from "./js/Validation";
import {constsList} from "./js/consts/const.js"
import {loginFormSend} from "./js/forms/loginFormSend";
import {registerFormSend} from "./js/forms/registerFormSend";
import {searchFormSend} from "./js/forms/searchFormSend";
import { checkAuthorization } from "./js/checkAuthorization";
import { getUserName } from "./js/getUserName";
import {loginExit} from './js/loginExit';
import {mobileMenuOpen} from './js/mobileMenuOpen';
import {mobileMenuBack} from './js/mobileMenuBack';
const popupAuthWin = new PopupAuthWin(popupAuth, popupAuthClose, loginFormCloseSpace);
const popupRegWin = new PopupRegWin(popupRegi, popupRegClose, popupRegiEnter, loginFormCloseSpace);
const token = localStorage.getItem('token');

checkAuthorization();
getUserName();
constsList.mobileMenu.addEventListener('click', mobileMenuOpen);
constsList.mobileMenuBack.addEventListener('click', mobileMenuBack);
constsList.headerAuthorizatioNameBlock.addEventListener('click', loginExit)
loginEmailForm.addEventListener('input', validationLoginEmail);
registerEmailForm.addEventListener('input', validationRegister);
searchForm.addEventListener('input', validationSearch);
loginEmailForm.addEventListener('submit', loginFormSend);
registerEmailForm.addEventListener('submit', registerFormSend);
searchForm.addEventListener('submit', searchFormSend);
