import {buttonLoginLoading} from "../buttonLoading.js";
import {mainApi} from "../apiUrl/mainApiUrl.js";
import {constsList} from "../consts/const.js";
import {reload} from "../reload";
import {errorsList} from "../consts/errors"


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
		reload()
		})
	
	
	.catch((err) => {
		constsList.loginSendError.textContent=errorsList.wrongEmailPassword;	
	})

	buttonLoginLoading();
		
	
	 
	}