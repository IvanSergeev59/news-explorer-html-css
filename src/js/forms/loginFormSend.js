import {buttonLoginLoading} from "../buttonLoading.js";
import {mainApi} from "../apiUrl/mainApiUrl.js";
import {constsList} from "../consts/const.js";


export function loginFormSend(event) {
	event.preventDefault();
	const form = constsList.loginEmailForm;
	const loginEmail = form.elements.loginEmailInput;
	const loginPassword = form.elements.loginPasswordInput;
	const email = loginEmail.value;
	const password = loginPassword.value;
	mainApi.signIn(email, password)
	.then(() => {
		constsList.loginButton.setAttribute('disabled', true);
        constsList.loginButton.classList.remove('button-active');
		constsList.popupAuthWin.classList.add("inactive"), 10000;
		form.reset();  
		window.location.reload();
	})
	.catch((err) => {
		console.log(err);	
	})

	buttonLoginLoading();
		
	
	 
	}