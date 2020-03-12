import {buttonSearchLoading, buttonSearchLoadingEnd} from "../modules/buttonLoading.js";
import {ArticleList} from "../modules/ArticleList.js";
import {api} from "../modules/apiUrl.js";
import {cardsMore} from "../modules/cardsMore.js";
import {noCards, cardsFound} from "../modules/Const.js"

const articleList = new ArticleList(document.querySelector('.cards__block'));
export function searchFormSend(event) {
	event.preventDefault();
	const form = document.forms.search;
	const searchNam = form.elements.searchName;
	const name = searchNam.value;
	const cardsFoundMore = document.querySelector('.cards__found_more').addEventListener('click', cardsMore);
	api.search(name)
	.then((dat) => {
		dat.articles.forEach(function(item, i,id) {
			articleList.addArticle(dat.articles[i].publishedAt, dat.articles[i].title, dat.articles[i].description, dat.articles[i].source.name, dat.articles[i].urlToImage)
		})
		if(dat.articles.length === 0) {
			noCards.classList.remove('inactive');
			cardsFound.classList.add('inactive')
		}
		else {
			noCards.classList.add('inactive');
			cardsFound.classList.remove('inactive')
	}
	})

	.catch((err) =>{
		console.log(err);
	})
	buttonSearchLoading();
	form.reset();
	buttonSearchLoadingEnd()
}