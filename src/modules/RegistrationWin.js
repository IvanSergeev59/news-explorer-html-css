import {popupAuthWin, popupRegiWin, form__under} from "../modules/Const.js";
export class PopupReg {
    constructor(popupRegi, popupRegClose, popupRegiEnter, form__under) {
        this.popupRegi = popupRegi;
        this.popupRegClose = popupRegClose;
        this.popupRegiEnter = popupRegiEnter;
        this.form__under = form__under;
        this.popupRegi.addEventListener('click', this.open);
        this.popupRegClose.addEventListener('click', this.close);
        this.popupRegiEnter.addEventListener('click', this.enter);
        this.form__under.addEventListener('click', this.under)
    }
    open() {
        popupRegiWin.classList.remove("inactive");
        popupAuthWin.classList.add("inactive");
        form__under.classList.remove('inactive')
       
    }
    close() {
        
        popupRegiWin.classList.add("inactive");
        
    }
    enter() {
       popupRegiWin.classList.add("inactive");
       popupAuthWin.classList.remove("inactive"); 
    }
    under() {
        popupRegiWin.classList.add("inactive");
        form__under.classList.add('inactive')
    }
}