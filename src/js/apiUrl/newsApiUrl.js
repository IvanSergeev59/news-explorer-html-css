import {NewsApi} from "../api/NewsApi.js";
import {newsParams} from "../consts/newsApi.js";
export const newsApi = new NewsApi(newsParams);