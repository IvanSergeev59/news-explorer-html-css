import { mainApi } from "../js/apiUrl/mainApiUrl";
import {constsList} from "../js/consts/const.js";

export function checkAuthorization(){ 
	
	mainApi.authorization()


	.then((dat) => {

		constsList.headerAuth.classList.remove('inactive');
		constsList.headerNonAuth.classList.add('inactive')
		
		
		
	})
	
	.catch((err) =>{
		console.log(err);
	})

}
