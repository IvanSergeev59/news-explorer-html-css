import {buttonSearchLoading, buttonSearchLoadingEnd} from "../js/buttonLoading.js";
import {ArticleList} from "../js/ArticleList";
import {api} from "../js/apiUrl.js";
import {cardsMore} from "../js/cardsMore.js";
import {noCards, cardsFound} from "../js/consts/const.js"

const articleList = new ArticleList(document.querySelector('.cards__block'));
export function searchFormSend(event) {
	event.preventDefault();
	const form = document.forms.search;
	const searchNam = form.elements.searchName;
	const name = searchNam.value;
	const cardsFoundMore = document.querySelector('.cards__found_more').addEventListener('click', cardsMore);
	const cardsBlock = document.querySelector('.cards__block');
	while (cardsBlock.firstChild) {
		cardsBlock.removeChild(cardsBlock.firstChild);
	};
	

	
	api.search(name)
	.then((dat) => {
	console.log(dat)
		dat.articles.forEach(function(item, i,arr, id) {
			articleList.addArticle(dat.articles[i].publishedAt, dat.articles[i].title, dat.articles[i].description, dat.articles[i].source.name, dat.articles[i].urlToImage, dat.articles[i].id)
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

	buttonSearchLoadingEnd()
}