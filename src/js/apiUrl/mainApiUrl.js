import {MainApi} from "../api/MainApi.js";
import {token, serverUrl} from "../consts/api.js";
export const mainApi = new MainApi(serverUrl, token);



