import {api} from "./apiUrl";
import {headerUserName} from "../modules/Const.js"
export function getUserName() {
	api.authorization()

.then((res) => {

	return res.json();
	
})
.then((data) => {
	headerUserName.textContent = data.name;
})
}