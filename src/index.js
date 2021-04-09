import "./style.css";
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
const popupAuthWin = new PopupAuthWin(constsList.popupAuth, constsList.popupAuthClose, constsList.loginFormCloseSpace);
const popupRegWin = new PopupRegWin(constsList.popupRegi, constsList.popupRegClose, constsList.popupRegiEnter, constsList.loginFormCloseSpace);
const token = localStorage.getItem('token');

checkAuthorization();
getUserName();
constsList.mobileMenu.addEventListener('click', mobileMenuOpen);
constsList.mobileMenuBack.addEventListener('click', mobileMenuBack);
constsList.headerAuthorizatioNameBlock.addEventListener('click', loginExit)
constsList.loginEmailForm.addEventListener('input', validationLoginEmail);
constsList.registerEmailForm.addEventListener('input', validationRegister);
constsList.searchForm.addEventListener('input', validationSearch);
constsList.loginEmailForm.addEventListener('submit', loginFormSend);
constsList.registerEmailForm.addEventListener('submit', registerFormSend);
constsList.searchForm.addEventListener('submit', searchFormSend);
