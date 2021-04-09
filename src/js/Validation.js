import {constsList} from "../js/consts/const.js";

export function validationLoginEmail(event) {
    const name = constsList.loginEmailForm.elements.loginEmailInput.value;
    const password = constsList.loginEmailForm.elements.loginPasswordInput;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    constsList.loginEmailError.textContent='';
    constsList.loginPasswordError.textContent = '';
 
        function validateText(field, errorElement) {
       
            if (field.value.length === 0) {
        
              errorElement.textContent = 'Это обязательное поле';

              constsList.loginButton.setAttribute('disabled', true);
              constsList.loginButton.classList.remove('button-active');
        
            }
            else if ((field.value.length > 30) || (field.value.length < 2)) {
              errorElement.textContent = 'Должно быть от 2 до 30 символов';
              constsList.loginButton.setAttribute('disabled', true);
              constsList.loginButton.classList.remove('button-active');
            }
            else {
                constsList.loginButton.removeAttribute('disabled');
                constsList.loginButton.classList.add('button-active');
            }
        
          }
          function validateEmail (fieldEmail, errorEmail,reg) {
              if (reg.test(fieldEmail) == false) {
                  errorEmail.textContent = 'Введите корретный email';
                  constsList.loginButton.setAttribute('disabled', true);
                  constsList.loginButton.classList.remove('button-active');
              }
              else {
                constsList.loginButton.removeAttribute('disabled');
                constsList.loginButton.classList.add('button-active');
            }
          }

          validateText(password, constsList.loginPasswordError);
          validateEmail(name, constsList.loginEmailError, reg);
          
    }
export function validationRegister(event){
    const email = constsList.registerEmailForm.elements.regEmailInput.value;
    const password = constsList.registerEmailForm.elements.regPasInput;
    const name = constsList.registerEmailForm.elements.regNameInput;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    constsList.registerNameError.textContent='';
    constsList.registerPasError.textContent='';
    constsList.registerEmailError.textContent='';
        function validateEmail (fieldEmail, errorEmail,reg) {
        if (reg.test(fieldEmail) == false) {
            errorEmail.textContent = 'Введите корретный email';
            constsList.registerButton.setAttribute('disabled', true);
            constsList.registerButton.classList.remove('button-active');
        }
        else {
            constsList.registerButton.removeAttribute('disabled');
            constsList.registerButton.classList.add('button-active');
      }
         } 
         function validateText(field, errorElement) {
       
            if (field.value.length === 0) {
        
              errorElement.textContent = 'Это обязательное поле';

              constsList.registerButton.setAttribute('disabled', true);
              constsList.registerButton.classList.remove('button-active');
        
            }
            else if ((field.value.length > 30) || (field.value.length < 2)) {
              errorElement.textContent = 'Должно быть от 2 до 30 символов';
              constsList.registerButton.setAttribute('disabled', true);
              constsList.registerButton.classList.remove('button-active');
            }
            else {
                constsList.registerButton.removeAttribute('disabled');
                constsList.registerButton.classList.add('button-active');
            }
        
          }  
    validateEmail(email, constsList.registerEmailError,reg);
    validateText(password, constsList.registerPasError);
    validateText(name, constsList.registerNameError);
}

export function validationSearch(event) {
  const keyword = constsList.searchForm.elements.searchName;
  constsList.searchError.textContent = '';
  function validateText(field, errorElement) {
       
            if (field.value.length === 0) {
        
              errorElement.textContent = 'Это обязательное поле';

              constsList.searchButton.setAttribute('disabled', true);
              constsList.searchButton.classList.remove('button-active');
        
            }
            else if ((field.value.length > 30) || (field.value.length < 2)) {
              errorElement.textContent = 'Должно быть от 1 до 30 символов';
              constsList.searchButton.setAttribute('disabled', true);
              constsList.searchButton.classList.remove('button-active');
            }
            else {
                constsList.searchButton.removeAttribute('disabled');
                constsList.searchButton.classList.add('button-active');
            }
        
          }
          
          validateText(keyword, constsList.searchError);
}