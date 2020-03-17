import {loginFormCloseSpace, registerSuccess, enterButton, popupAuthWin} from "../js/consts/const.js";

export function registerSuccessToLogin() {
	

	enterButton.addEventListener('click', openAuth);
	loginFormCloseSpace.addEventListener('click', underFormSpace)
	  function underFormSpace() {
		loginFormCloseSpace.classList.add('inactive');
		registerSuccess.classList.add('inactive');

	  }
	  function openAuth() {
		popupAuthWin.classList.remove("inactive");
		loginFormCloseSpace.classList.remove('inactive');
		registerSuccess.classList.add('inactive');
	  }
}
