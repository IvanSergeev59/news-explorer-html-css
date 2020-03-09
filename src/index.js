import "./style.css";
import {popupAuth, popupAuthClose, popupRegi, popupRegClose} from "./modules/Const.js";
import {PopupName} from "./modules/AuthorizationWin.js";
import {PopupReg} from "./modules/RegistrationWin.js";
console.log('fe');

var popupname = new PopupName(popupAuth, popupAuthClose);
var popupreg = new PopupReg(popupRegi, popupRegClose);