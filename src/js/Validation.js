import {loginEmailForm, searchButton, searchForm, searchError, loginEmailError, loginButton, loginPassError
  , regEmailError,regPasError, regNameError, registerEmailForm, registerButton} from "../js/consts/const.js";

export function validationLoginEmail(event) {
    const name = loginEmailForm.elements.loginMail.value;
    const pass = loginEmailForm.elements.loginPas;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    loginEmailError.textContent='';
    loginPassError.textContent = '';
 
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

          validateText(pass, loginPassError);
          validateEmail(name, loginEmailError, reg);
          
    }
export function validationRegister(event){
    const email = registerEmailForm.elements.regMail.value;
    const pas = registerEmailForm.elements.regPas;
    const name = registerEmailForm.elements.regNam;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    regNameError.textContent='';
    regPasError.textContent='';
    regEmailError.textContent='';
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
    validateEmail(email, regEmailError,reg);
    validateText(pas,regPasError);
    validateText(name,regNameError);
}

export function validationSearch(event) {
  const word = searchForm.elements.searchName;
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
          console.log('se')
          validateText(word, searchError);
}