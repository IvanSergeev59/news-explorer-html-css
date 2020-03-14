import {api} from "./apiUrl";
import {headerUserName} from "../js/consts/const.js"
export function getUserName() {
	api.authorization()

.then((res) => {

	return res.json();
	
})
.then((data) => {
	headerUserName.textContent = data.name;
})
}