import {constsList} from "../consts/const";
export function errorPopup() {
	constsList.errorPopup;
	constsList.errorPopupText;
	constsList.loginFormCloseSpace.addEventListener('click', underFormSpace);
	constsList.errorPopupClose.addEventListener('click', closeError);
	function underFormSpace() {
		constsList.loginFormCloseSpace.classList.add('inactive');
		constsList.errorPopup.classList.add('inactive');

	}
	function closeError() {
		constsList.loginFormCloseSpace.classList.add('inactive');
		constsList.errorPopup.classList.add('inactive');
	}
}