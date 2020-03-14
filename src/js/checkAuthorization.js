import { api } from "../js/apiUrl";
import {headerNonAuth, headerAuth} from "../js/consts/const.js";

export function checkAuthorization(){ 
   
   api.authorization()


.then((res) => {
	if (res.ok) {
		
		headerAuth.classList.remove('inactive');
		return res.json();
		
		
		
	}
	
	else {
		headerNonAuth.classList.remove('inactive');
		return Promise.reject(`Ошибка: ${res.status}`);

	}
	
})

}
