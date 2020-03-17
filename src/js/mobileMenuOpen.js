import {constsList} from "../js/consts/const.js" ;
export function mobileMenuOpen() {
	constsList.headerAuth.setAttribute('style','display:flex');
	if(constsList.headerNonAuth){
	constsList.headerNonAuth.setAttribute('style','display:flex');
	}
	else {}
	constsList.mobileMenuBack.classList.remove('inactive');
	constsList.mobileMenu.classList.add('inactive')
}
