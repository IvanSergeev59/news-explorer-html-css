import {constsList} from "../js/consts/const.js";

function buttonLoginLoading ()
{
function loadAut() {
	constsList.loginButton.textContent = 'Войти';
}


	setTimeout(loadAut, 500);
constsList.loginButton.textContent = 'Загрузка...';
}



function buttonRegisterLoading () {
	constsList.registerButton.textContent = 'Загрузка...';
}

function buttonSearchLoading (){
	constsList.searchButton.textContent = 'Загрузка...';

}

function buttonSearchLoadingEnd (){
	function search() {
		constsList.searchButton.textContent = 'Искать';
	}
	setTimeout(search, 500);
}
export {buttonLoginLoading, buttonRegisterLoading, buttonSearchLoading, buttonSearchLoadingEnd}