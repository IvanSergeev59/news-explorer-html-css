import {popupAuthWin} from "../modules/Const.js";
export class PopupName {
    constructor(popupAuth, popupAuthClose) {
this.popupAuth = popupAuth;
this.popupAuthClose= popupAuthClose;
this.popupAuth.addEventListener('click', this.open);
this.popupAuthClose.addEventListener('click', this.close);
    }
    open() {
    popupAuthWin.classList.remove("inactive");

    }
    close() {
    popupAuthWin.classList.add("inactive");
    }
}