import {constsList} from "../js/consts/const.js";
export class PopupRegWin {
    constructor(popupRegi, popupRegClose, popupRegiEnter, loginFormCloseSpace) {
        this.popupRegi = popupRegi;
        this.popupRegClose = popupRegClose;
        this.popupRegiEnter = popupRegiEnter;
        this.loginFormCloseSpace = loginFormCloseSpace;
        this.popupRegi.addEventListener('click', this.open);
        this.popupRegClose.addEventListener('click', this.close);
        this.popupRegiEnter.addEventListener('click', this.enter);
        this.loginFormCloseSpace.addEventListener('click', this.underFormSpace)
    }
    open() {
        constsList.popupRegiWin.classList.remove("inactive");
        constsList.popupAuthWin.classList.add("inactive");
        constsList.loginFormCloseSpace.classList.remove('inactive')
        
    }
    close() {
        
        constsList.popupRegiWin.classList.add("inactive");
        
    }
    enter() {
     constsList.popupRegiWin.classList.add("inactive");
     constsList.popupAuthWin.classList.remove("inactive"); 
 }
 underFormSpace() {
    constsList.popupRegiWin.classList.add("inactive");
    constsList.loginFormCloseSpace.classList.add('inactive')
}
}