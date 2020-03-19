import {constsList} from "../js/consts/const.js";

function buttonLoginLoading ()
{
	constsList.loginButton.textContent = 'Загрузка...';
}
function load() {constsList.loginButton.textContent = 'Войти';
setTimeout(load, 500)
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