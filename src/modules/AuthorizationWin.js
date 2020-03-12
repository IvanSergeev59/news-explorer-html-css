import {popupAuthWin, form__under} from "../modules/Const.js";
export class PopupName {
    constructor(popupAuth, popupAuthClose, form__under) {
this.popupAuth = popupAuth;
this.popupAuthClose= popupAuthClose;
this.form__under=form__under;
this.popupAuth.addEventListener('click', this.open);
this.popupAuthClose.addEventListener('click', this.close);
this.form__under.addEventListener('click', this.enter)
    }
    open() {
    popupAuthWin.classList.remove("inactive");
    form__under.classList.remove('inactive')
    }
    close() {
    popupAuthWin.classList.add("inactive");
    }
    enter() {
        popupAuthWin.classList.add("inactive");
        form__under.classList.add('inactive')
    }
}