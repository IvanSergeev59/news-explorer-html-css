import {popupAuthWin, loginFormCloseSpace} from "../js/consts/const.js";
export class PopupName {
    constructor(popupAuth, popupAuthClose, loginFormCloseSpace) {
this.popupAuth = popupAuth;
this.popupAuthClose= popupAuthClose;
this.loginFormCloseSpace=loginFormCloseSpace;
this.popupAuth.addEventListener('click', this.open);
this.popupAuthClose.addEventListener('click', this.close);
this.loginFormCloseSpace.addEventListener('click', this.enter)
    }
    open() {
    popupAuthWin.classList.remove("inactive");
    loginFormCloseSpace.classList.remove('inactive')
    }
    close() {
    popupAuthWin.classList.add("inactive");
    }
    enter() {
        popupAuthWin.classList.add("inactive");
        loginFormCloseSpace.classList.add('inactive')
    }
}