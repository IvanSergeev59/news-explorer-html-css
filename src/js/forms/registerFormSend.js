import {buttonRegisterLoading} from "../buttonLoading";
import {mainApi} from "../apiUrl/mainApiUrl";
import {popupRegiWin, registerSuccess, registerEmailError} from "../consts/const";
import {registerSuccessToLogin} from "../registerSuccessToLogin";
export function registerFormSend(event) {
	event.preventDefault();
	const form = document.forms.regEmail;
	const registerEmail = form.elements.regEmailInput;
	const registerPassword = form.elements.regPasInput;
	const registerName = form.elements.regNameInput;
	const email = registerEmail.value;
	const password = registerPassword.value;
	const name = registerName.value;
	mainApi.signUp(email, password, name)
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