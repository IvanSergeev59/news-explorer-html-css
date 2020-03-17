const popupAuth = document.querySelector('.non-authorization__margin');
const savePage = document.querySelector('#savePage');
const headerTitle = document.querySelector('.header__title');
const popupAuthWin = document.querySelector('.login-form');
const popupAuthClose = document.querySelector('#close2');
const popupRegi = document.querySelector('.login-form__signup-enter');
const popupRegClose = document.querySelector('#close1');
const popupRegiWin = document.querySelector('.login-form-register');
const popupRegiEnter = document.querySelector('#login-form__signup-enter');
const cardsFoundTitle = document.querySelector('.cards__found_title');
const cardsFoundMore = document.querySelector('.cards__found_more');
const loginEmailForm = document.forms.loginEmail;
const registerEmailForm = document.forms.regEmail;
const searchForm = document.forms.search;
const loginButton = document.querySelector('#loginButton');
const registerButton = document.querySelector('#registerButton');
const loginEmailError = document.querySelector('#loginEmailError');
const loginPasswordError = document.querySelector('#loginPassError');
const registerNameError= document.querySelector('#regNameError');
const registerEmailError= document.querySelector('#regEmailError');
const registerPasError= document.querySelector('#regPasError');
const searchError = document.querySelector('#searchError');
const searchButton = document.querySelector('.search__button');
const headerUserName = document.querySelector('.header__authorization-name')
const cardsFound = document.querySelector('.cards__found')
const headerAuth = document.querySelector('.header__authorization');
const headerNonAuth = document.querySelector('.header__non-authorization');
const headerAuthorizatioNameBlock = document.querySelector('.header__authorization-name-block')
const card = document.querySelector('.card');
const noCards = document.querySelector('.cards__no-cards');
const registerSuccess = document.querySelector('#registerSuccess');
const enterButton = document.querySelector('#enterButton');
const registerSuccessToLogin = document.querySelector('#closeRegisterSuccess');
const loginFormCloseSpace = document.querySelector('.login-form__close-space');
const mobileMenu = document.querySelector('.header__mobile-menu');
const mobileMenuBack = document.querySelector('.header__mobile-back');
export const constsList = {mobileMenuBack,mobileMenu,headerAuthorizatioNameBlock, headerAuth, headerNonAuth };
 
export {popupAuth,enterButton, loginFormCloseSpace, registerEmailError, loginPasswordError, registerNameError,  cardsFound, savePage, cardsFoundTitle,  headerTitle, popupRegiEnter, noCards, card, registerSuccess, registerSuccessToLogin, headerUserName, searchButton,  searchError, searchForm, 
    popupAuthWin, popupAuthClose, popupRegi, registerPasError, popupRegClose, popupRegiWin, loginEmailForm, registerEmailForm, cardsFoundMore, loginButton, 
    registerButton, loginEmailError}