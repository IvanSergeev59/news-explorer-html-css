import {buttonRegisterLoading} from "../buttonLoading";
import {mainApi} from "../apiUrl/mainApiUrl";
import {constsList} from "../consts/const";
import {registerSuccessToLogin} from "../registerSuccessToLogin";
export function registerFormSend(event) {
	event.preventDefault();
	const form = constsList.registerEmailForm;
	const registerEmail = form.elements.regEmailInput;
	const registerPassword = form.elements.regPasInput;
	const registerName = form.elements.regNameInput;

	const email = registerEmail.value;
	const password = registerPassword.value;
	const name = registerName.value;
	mainApi.signUp(email, password, name)
	.then(() => {
		constsList.registerButton.setAttribute('disabled', true);
        constsList.registerButton.classList.remove('button-active');
		constsList.popupRegiWin.classList.add("inactive");
		  constsList.registerSuccess.classList.remove('inactive');
		  form.reset();  
          registerSuccessToLogin()
	})
	.catch((err) => {
		if(err==='Ошибка: 400'){
			console.log(err);
		}
		else{
		constsList.registerNameError.textContent = 'Такой пользователь уже существует';
		}
	})

	buttonRegisterLoading();
	

}