import {mainApi} from "./apiUrl/mainApiUrl";
import {headerUserName} from "../js/consts/const.js"
export function getUserName() {
	mainApi.authorization()

.then((dat) => {
console.log(dat.name)
	headerUserName.textContent = dat.name;
})
.catch((err) =>{
	console.log(err);
})

}