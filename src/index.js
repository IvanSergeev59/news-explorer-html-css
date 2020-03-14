import "./style.css";
import {popupAuth,  popupAuthClose, popupRegi, form__under, searchForm, popupRegClose, loginEmailForm, popupRegiEnter, loginPassForm, registerEmailForm, registerNameForm, registerPassForm, loginEmailError,loginButton} from "./js/consts/const.js";
import {PopupName} from "./js/AuthorizationWin";
import {PopupReg} from "./js/RegistrationWin";
import {validationLoginEmail, validationRegister, validationSearch} from "./js/Validation";
import {api, serverUrl} from "./js/apiUrl";

import {loginFormSend} from "./js/loginFormSend";
import {registerFormSend} from "./js/registerFormSend";
import {searchFormSend} from "./js/searchFormSend";
import { checkAuthorization } from "./js/checkAuthorization";
import { getUserName } from "./js/getUserName";

const popupname = new PopupName(popupAuth, popupAuthClose, form__under);
const popupreg = new PopupReg(popupRegi, popupRegClose, popupRegiEnter, form__under);
const token = localStorage.getItem('token');

checkAuthorization();
getUserName();


loginEmailForm.addEventListener('input', validationLoginEmail);
registerEmailForm.addEventListener('input', validationRegister);
searchForm.addEventListener('input', validationSearch);
loginEmailForm.addEventListener('submit', loginFormSend);
registerEmailForm.addEventListener('submit', registerFormSend);
searchForm.addEventListener('submit', searchFormSend);
