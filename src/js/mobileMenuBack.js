import {constsList} from "../js/consts/const.js" ;
export function mobileMenuBack() {
    constsList.headerAuth.removeAttribute('style','display:flex');
    if(constsList.headerNonAuth){
    constsList.headerNonAuth.removeAttribute('style','display:flex');
    }
    else {}
    constsList.mobileMenuBack.classList.add('inactive');
	constsList.mobileMenu.classList.remove('inactive')
}