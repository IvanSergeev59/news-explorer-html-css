import {mainApi} from "./apiUrl/mainApiUrl";
import {constsList} from "../js/consts/const.js"
export function getUserName() {
	mainApi.authorization()

.then((dat) => {
console.log(dat.name)
	constsList.headerUserName.textContent = dat.name;
})
.catch((err) =>{
	const p = document.querySelector('.saving-description');
	if(p) {
		window.location.href = "/"
	}
	console.log(err);
})

}