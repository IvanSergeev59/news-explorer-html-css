import {popupAuthWin, popupRegiWin, loginFormCloseSpace} from "../js/consts/const.js";
export class PopupReg {
    constructor(popupRegi, popupRegClose, popupRegiEnter, loginFormCloseSpace) {
        this.popupRegi = popupRegi;
        this.popupRegClose = popupRegClose;
        this.popupRegiEnter = popupRegiEnter;
        this.loginFormCloseSpace = loginFormCloseSpace;
        this.popupRegi.addEventListener('click', this.open);
        this.popupRegClose.addEventListener('click', this.close);
        this.popupRegiEnter.addEventListener('click', this.enter);
        this.loginFormCloseSpace.addEventListener('click', this.under)
    }
    open() {
        popupRegiWin.classList.remove("inactive");
        popupAuthWin.classList.add("inactive");
        loginFormCloseSpace.classList.remove('inactive')
       
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
        loginFormCloseSpace.classList.add('inactive')
    }
}