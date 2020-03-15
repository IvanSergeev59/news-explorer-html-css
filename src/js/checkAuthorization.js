import { api } from "../js/apiUrl";
import {headerNonAuth, headerAuth} from "../js/consts/const.js";

export function checkAuthorization(){ 
   
   api.authorization()


.then((dat) => {

		headerAuth.classList.remove('inactive');
		headerNonAuth.classList.add('inactive')
		
		
		
	})
	
	.catch((err) =>{
		console.log(err);
	})

}
