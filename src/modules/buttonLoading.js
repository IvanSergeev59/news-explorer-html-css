import {loginButton, registerButton, searchButton} from "../modules/Const.js";
function buttonLoginLoading (){
loginButton.textContent = 'Загрузка...';

function load() {loginButton.textContent = 'Войти';}
setTimeout(load, 500)
}


function buttonRegisterLoading () {
registerButton.textContent = 'Загрузка...';
}
 
 function buttonSearchLoading (){
 searchButton.textContent = 'Загрузка...';

}

function buttonSearchLoadingEnd (){
    function search() {
        searchButton.textContent = 'Искать';
    }
    setTimeout(search, 500);
}
export {buttonLoginLoading, buttonRegisterLoading, buttonSearchLoading, buttonSearchLoadingEnd}