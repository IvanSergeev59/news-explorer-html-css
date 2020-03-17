import {buttonSearchLoading} from "../modules/buttonLoading.js";
import {ArticleList} from "../modules/ArticleList.js";
import {mainApi} from "../js/apiUrl/mainApiUrl.js";
const articleList = new ArticleList('#savingCards');
export function getSavingArticles() {
	event.preventDefault();
	mainApi.getCurrentArticles()
	.then((date) => {
		date.articles.forEach(function(item, i,id) {
			articleList.getArticles(dat.articles[i].date, dat.articles[i].title, dat.articles[i].description, dat.articles[i].source.name, dat.articles[i].urlToImage);
		})
		})
	.catch((err) =>{
		console.log(err);
	})

}