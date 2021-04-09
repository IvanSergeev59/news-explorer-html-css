import {constsList} from "../js/consts/const.js"
export function loginExitSecondPage() {
	const currentToken = localStorage.getItem('token');
    localStorage.removeItem('token');   
    constsList.headerUserName.textContent = '';
	window.location.href = "/"
}