import {buttonLoginLoading} from "../modules/buttonLoading.js";
import {api} from "../modules/apiUrl.js";
import {popupAuthWin} from "../modules/Const.js";


export function loginFormSend(event) {
	event.preventDefault();
	const form = document.forms.loginEmail;
	const loginEmail = form.elements.loginMail;
	const loginPas = form.elements.loginPas;
	const email = loginEmail.value;
	const pas = loginPas.value;
	api.signIn(email, pas)
	.then(() => {
		loginButton.setAttribute('disabled', true);
        loginButton.classList.remove('button-active');
		popupAuthWin.classList.add("inactive"), 10000
	})
	.catch((err) => {
		console.log(err);	
	})

	buttonLoginLoading();
		
	
		form.reset();    
	}