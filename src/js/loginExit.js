import {constsList} from "../js/consts/const.js"
export function loginExit() {
	const currentToken = localStorage.getItem('token');
	localStorage.removeItem('token');   
	constsList.headerAuth.classList.add('inactive');
	constsList.headerNonAuth.classList.remove('inactive');
	constsList.headerAuth.removeAttribute('style','display:flex');
	constsList.headerNonAuth.setAttribute('style','display:flex');
	constsList.headerUserName.textContent = '';
}