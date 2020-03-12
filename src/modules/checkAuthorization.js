import { api } from "./apiUrl";
import {headerNonAuth, headerAuth} from "../modules/Const.js";
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