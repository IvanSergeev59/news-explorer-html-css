import "./style.css";
import {popupAuth,  popupAuthClose, popupRegi, form__under, searchForm, popupRegClose, loginEmailForm, popupRegiEnter, loginPassForm, registerEmailForm, registerNameForm, registerPassForm, loginEmailError,loginButton} from "./modules/Const.js";
import {PopupName} from "./modules/AuthorizationWin.js";
import {PopupReg} from "./modules/RegistrationWin.js";
import {validationLoginEmail, validationRegister, validationSearch} from "./modules/Validation.js";
import {api, serverUrl} from "./modules/apiUrl.js";
var popupname = new PopupName(popupAuth, popupAuthClose, form__under);
var popupreg = new PopupReg(popupRegi, popupRegClose, popupRegiEnter, form__under);
import {loginFormSend} from "./modules/loginFormSend.js";
import {registerFormSend} from "./modules/registerFormSend.js";
import {searchFormSend} from "./modules/searchFormSend.js";
import { checkAuthorization } from "./modules/checkAuthorization";
import { getUserName } from "./modules/getUserName";

const token = localStorage.getItem('token');
console.log(token)

checkAuthorization();
getUserName();
loginEmailForm.addEventListener('input', validationLoginEmail);
registerEmailForm.addEventListener('input', validationRegister);
searchForm.addEventListener('input', validationSearch);
loginEmailForm.addEventListener('submit', loginFormSend);
registerEmailForm.addEventListener('submit', registerFormSend);
searchForm.addEventListener('submit', searchFormSend);
