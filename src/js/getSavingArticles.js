import {buttonSearchLoading} from "../modules/buttonLoading.js";
import {ArticleList} from "../modules/ArticleList.js";
import {Article} from "../modules/Article.js";

import {mainApi} from "../js/apiUrl/mainApiUrl.js";
const articleList = new ArticleList('#savingCards');
export function getSavingArticles() {
	event.preventDefault();
	console.log('olololo')
	mainApi.getCurrentArticles()
	.then((date) => {
		date.articles.forEach(function(item, i,id) {
		const article=new Article(dat.data[i].date, dat.data[i].title, dat.data[i].text, dat.data[i].source, dat.data[i].image, dat.data[i]._id);
			articleList.getArticle(article)
		})
		})
	.catch((err) =>{
		console.log(err);
	})

}