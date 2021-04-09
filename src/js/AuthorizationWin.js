import {constsList} from "../js/consts/const.js";
export class PopupAuthWin {
    constructor(popupAuth, popupAuthClose, loginFormCloseSpace) {
        this.popupAuth = popupAuth;
        this.popupAuthClose= popupAuthClose;
        this.loginFormCloseSpace=loginFormCloseSpace;
        this.popupAuth.addEventListener('click', this.open);
        this.popupAuthClose.addEventListener('click', this.close);
        this.loginFormCloseSpace.addEventListener('click', this.enter)
    }
    open() {
        constsList.popupAuthWin.classList.remove("inactive");
        constsList.loginFormCloseSpace.classList.remove('inactive')
    }
    close() {
        constsList.popupAuthWin.classList.add("inactive");
    }
    enter() {
        constsList.popupAuthWin.classList.add("inactive");
        constsList.loginFormCloseSpace.classList.add('inactive')
    }
}