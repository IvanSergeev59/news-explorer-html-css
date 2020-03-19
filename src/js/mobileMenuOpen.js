import {constsList} from "../js/consts/const.js" ;
import { getUserName } from "../js/getUserName";
export function mobileMenuOpen() {
	const po = constsList.headerUserName.textContent;
	console.log(po)
	if(po===''){
	constsList.headerNonAuth.setAttribute('style','display:flex');
	}
	else {
		constsList.headerAuth.setAttribute('style','display:flex');
	}
	
	constsList.mobileMenuBack.classList.remove('inactive');
	constsList.mobileMenu.classList.add('inactive')
}
