import {buttonRegisterLoading} from "../js/buttonLoading";
import {api} from "../js/apiUrl";
import {popupRegiWin, registerSuccess, regEmailError} from "../js/consts/const.js";
import {registerSuccessToLogin} from "../js/registerSuccessToLogin";
export function registerFormSend(event) {
	event.preventDefault();
	const form = document.forms.regEmail;
	const regEmail = form.elements.regMail;
	const regPas = form.elements.regPas;
	const regName = form.elements.regNam;
	const email = regEmail.value;
	const pas = regPas.value;
	const name = regName.value;
	api.signUp(email, pas, name)
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