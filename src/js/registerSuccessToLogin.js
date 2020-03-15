import {form__under, registerSuccess, enterButton, popupAuthWin} from "../js/consts/const.js";

export function registerSuccessToLogin() {
	

	enterButton.addEventListener('click', openAuth);
	  form__under.addEventListener('click', under)
	  function under() {
		form__under.classList.add('inactive');
		registerSuccess.classList.add('inactive');

	  }
	  function openAuth() {
		popupAuthWin.classList.remove("inactive");
		form__under.classList.remove('inactive');
		registerSuccess.classList.add('inactive');
	  }
}
