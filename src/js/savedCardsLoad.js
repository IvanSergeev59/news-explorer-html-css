import { api } from "./apiUrl";
import {ArticleList} from "../js/ArticleList.js";
const articleList = new ArticleList(document.querySelector('#savingCards'));
const pageTitle = document.querySelector('.saving-description__title');

export function savedCardsLoad() {
    api.getCurrentArticles()
    .then((dat) => {
	
		dat.data.forEach(function(item, i, arr, id) {
			articleList.getArticle(dat.data[i].date, dat.data[i].title, dat.data[i].text, dat.data[i].source, dat.data[i].image, dat.data[i]._id)
		})
     
	})
		
	.catch((err) =>{
		console.log(err);
	})
	
}
