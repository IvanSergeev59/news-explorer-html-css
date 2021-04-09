import {constsList} from "../js/consts/const.js";

export function registerSuccessToLogin() {
	

	constsList.enterButton.addEventListener('click', openAuth);
	constsList.loginFormCloseSpace.addEventListener('click', underFormSpace)
	function underFormSpace() {
		constsList.loginFormCloseSpace.classList.add('inactive');
		constsList.registerSuccess.classList.add('inactive');

	}
	function openAuth() {
		constsList.popupAuthWin.classList.remove("inactive");
		constsList.loginFormCloseSpace.classList.remove('inactive');
		constsList.registerSuccess.classList.add('inactive');
	}
}
