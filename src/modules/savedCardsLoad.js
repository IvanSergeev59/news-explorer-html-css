import { api } from "./apiUrl";
import {ArticleList} from "../modules/ArticleList.js";
const articleList = new ArticleList(document.querySelector('#savingCards'));
export function savedCardsLoad() {
    api.getCurrentArticles()
    .then((dat) => {
        console.log(dat);
		dat.data.forEach(function(item, i,id) {
			articleList.getArticle(dat.data[i].date, dat.data[i].title, dat.data[i].text, dat.data[i].source.name, dat.data[i].image)
		})
     
	})
		
	.catch((err) =>{
		console.log(err);
	})
	
}
