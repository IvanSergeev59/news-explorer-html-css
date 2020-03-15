import {api} from "./apiUrl";
import {headerUserName} from "../js/consts/const.js"
export function getUserName() {
	api.authorization()

.then((dat) => {
console.log(dat.name)
	headerUserName.textContent = dat.name;
})
.catch((err) =>{
	console.log(err);
})

}