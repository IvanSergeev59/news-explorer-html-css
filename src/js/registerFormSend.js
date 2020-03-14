import {buttonRegisterLoading} from "../js/buttonLoading";
import {api} from "../js/apiUrl";
import {popupAuthWin, registerSucess} from "../js/consts/const.js";
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
          popupAuthWin.classList.add("inactive");
          registerSuccess.classList.remove('inactive');
          registerSuccessToLogin.addEventListener('click', registerSuccessToLogin)
	})
	.catch((err) => {
		console.log(err);
	})

	buttonRegisterLoading();
	

}