import {popupAuthWin, popupRegiWin} from "../modules/Const.js";
export class PopupReg {
    constructor(popupRegi, popupRegClose) {
        this.popupRegi = popupRegi;
        this.popupRegClose = popupRegClose;
        this.popupRegi.addEventListener('click', this.open);
        this.popupRegClose.addEventListener('click', this.close);
    }
    open() {
        popupRegiWin.classList.remove("inactive");
        popupAuthWin.classList.add("inactive");
       
       
    }
    close() {
        
        popupRegiWin.classList.add("inactive");
        
    }
}