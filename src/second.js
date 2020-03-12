import "./style.css";
import {popupAuth, savePage, popupAuthClose, popupRegi, searchForm, popupRegClose, loginEmailForm, popupRegiEnter, loginPassForm, registerEmailForm, registerNameForm, registerPassForm, loginEmailError,loginButton, form__under} from "./modules/Const.js";
import {PopupName} from "./modules/AuthorizationWin.js";
import {PopupReg} from "./modules/RegistrationWin.js";
import {validationLoginEmail, validationRegister, validationSearch} from "./modules/Validation.js";
import {api, serverUrl} from "./modules/apiUrl.js";
import {loginFormSend} from "./modules/loginFormSend.js";
import {registerFormSend} from "./modules/registerFormSend.js";
import {searchFormSend} from "./modules/searchFormSend.js";
import { savedCardsLoad } from "./modules/savedCardsLoad";

import { getUserName } from "./modules/getUserName";


getUserName()
savedCardsLoad();


