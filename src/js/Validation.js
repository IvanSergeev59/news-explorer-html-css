import {loginEmailForm, searchButton, searchForm, searchError, loginEmailError, loginButton, loginPasswordError
  , registerEmailError,registerPasError, registerNameError, registerEmailForm, registerButton} from "../js/consts/const.js";

export function validationLoginEmail(event) {
    const name = loginEmailForm.elements.loginEmailInput.value;
    const password = loginEmailForm.elements.loginPasswordInput;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    loginEmailError.textContent='';
    loginPasswordError.textContent = '';
 
        function validateText(field, errorElement) {
       
            if (field.value.length === 0) {
        
              errorElement.textContent = 'Это обязательное поле';

              loginButton.setAttribute('disabled', true);
              loginButton.classList.remove('button-active');
        
            }
            else if ((field.value.length > 30) || (field.value.length < 2)) {
              errorElement.textContent = 'Должно быть от 2 до 30 символов';
              loginButton.setAttribute('disabled', true);
              loginButton.classList.remove('button-active');
            }
            else {
                loginButton.removeAttribute('disabled');
                loginButton.classList.add('button-active');
            }
        
          }
          function validateEmail (fieldEmail, errorEmail,reg) {
              if (reg.test(fieldEmail) == false) {
                  errorEmail.textContent = 'Введите корретный email';
                  loginButton.setAttribute('disabled', true);
                  loginButton.classList.remove('button-active');
              }
              else {
                loginButton.removeAttribute('disabled');
                loginButton.classList.add('button-active');
            }
          }

          validateText(password, loginPasswordError);
          validateEmail(name, loginEmailError, reg);
          
    }
export function validationRegister(event){
    const email = registerEmailForm.elements.regEmailInput.value;
    const password = registerEmailForm.elements.regPasInput;
    const name = registerEmailForm.elements.regNameInput;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    registerNameError.textContent='';
    registerPasError.textContent='';
    registerEmailError.textContent='';
        function validateEmail (fieldEmail, errorEmail,reg) {
        if (reg.test(fieldEmail) == false) {
            errorEmail.textContent = 'Введите корретный email';
            registerButton.setAttribute('disabled', true);
            registerButton.classList.remove('button-active');
        }
        else {
            registerButton.removeAttribute('disabled');
            registerButton.classList.add('button-active');
      }
         } 
         function validateText(field, errorElement) {
       
            if (field.value.length === 0) {
        
              errorElement.textContent = 'Это обязательное поле';

              registerButton.setAttribute('disabled', true);
              registerButton.classList.remove('button-active');
        
            }
            else if ((field.value.length > 30) || (field.value.length < 2)) {
              errorElement.textContent = 'Должно быть от 2 до 30 символов';
              registerButton.setAttribute('disabled', true);
              registerButton.classList.remove('button-active');
            }
            else {
                registerButton.removeAttribute('disabled');
                registerButton.classList.add('button-active');
            }
        
          }  
    validateEmail(email, registerEmailError,reg);
    validateText(password,registerPasError);
    validateText(name,registerNameError);
}

export function validationSearch(event) {
  const keyword = searchForm.elements.searchName;
  searchError.textContent = '';
  function validateText(field, errorElement) {
       
            if (field.value.length === 0) {
        
              errorElement.textContent = 'Это обязательное поле';

              searchButton.setAttribute('disabled', true);
              searchButton.classList.remove('button-active');
        
            }
            else if ((field.value.length > 30) || (field.value.length < 2)) {
              errorElement.textContent = 'Должно быть от 1 до 30 символов';
              searchButton.setAttribute('disabled', true);
              searchButton.classList.remove('button-active');
            }
            else {
                searchButton.removeAttribute('disabled');
                searchButton.classList.add('button-active');
            }
        
          }
          
          validateText(keyword, searchError);
}