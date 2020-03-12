import {Api} from "../modules/Api.js";
const token = localStorage.getItem('token');
export const api = new Api({
  serverUrl :'http://api.praka59.site'
}, token);


