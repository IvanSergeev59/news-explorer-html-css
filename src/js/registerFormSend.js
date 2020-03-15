import {buttonRegisterLoading} from "../js/buttonLoading";
import {api} from "../js/apiUrl";
import {popupRegiWin, registerSuccess, regEmailError} from "../js/consts/const.js";
import {registerSuccessToLogin} from "../js/registerSuccessToLogin";
export function registerFormSend(event) {
	event.preventDefault();
	const form = document.forms.regEmail;
	const registerEmail = form.elements.regMail;
	const registePas = form.elements.regPas;
	const registerName = form.elements.regNam;
	const email = registerEmail.value;
	const password = registePas.value;
	const name = registerName.value;
	api.signUp(email, password, name)
	.then(() => {
		registerButton.setAttribute('disabled', true);
        registerButton.classList.remove('button-active');
		popupRegiWin.classList.add("inactive");
		  registerSuccess.classList.remove('inactive');
		  form.reset();  
          registerSuccessToLogin()
	})
	.catch((err) => {
		console.log(err);
		regEmailError.textContent = 'Такой пользователь уже существует';
	})

	buttonRegisterLoading();
	

}