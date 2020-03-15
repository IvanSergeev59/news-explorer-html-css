import {buttonSearchLoading, buttonSearchLoadingEnd} from "../js/buttonLoading.js";
import {ArticleList} from "../js/ArticleList";
import {api} from "../js/apiUrl.js";

import {noCards, cardsFound, cardsFoundTitle} from "../js/consts/const.js"
const cardsFoundMore = document.querySelector('.cards__found_more')
const articleList = new ArticleList(document.querySelector('.cards__block'));
export function searchFormSend(event) {
	event.preventDefault();
	const form = document.forms.search;
	const searchName = form.elements.searchName;
	const name = searchName.value;
	
	const cardsBlock = document.querySelector('.cards__block');
	while (cardsBlock.firstChild) {
		cardsBlock.removeChild(cardsBlock.firstChild);
	};
	

	
	api.search(name)
	.then((dat) => {
		if (dat.articles.length>0) {
			cardsFoundTitle.classList.remove('inactive');
			cardsFoundMore.classList.remove('inactive');
		}
	console.log(dat.articles.length);
		let articlesLength = 3;
		if(dat.articles.length>0){
		for (let i=0; i < articlesLength; i++) {
			
			articleList.addArticle(dat.articles[i].publishedAt, dat.articles[i].title, dat.articles[i].description, dat.articles[i].source.name, dat.articles[i].urlToImage, dat.articles[i].id)
		}
	}
		else {}
		cardsFoundMore.addEventListener('click', cardsMore);
		function cardsMore() {
			for (let o = 0; o<3; o++){
				if(articlesLength<dat.articles.length){
					articlesLength = articlesLength +1;
				}
				else {
					articlesLength = articlesLength+0;
					cardsFoundMore.classList.add('inactive');
				}
			
			}
			const cardsBlock = document.querySelector('.cards__block');
			while (cardsBlock.firstChild) {
				cardsBlock.removeChild(cardsBlock.firstChild);
			};
			
			for (let i=0; i < articlesLength; i++) {
			
				articleList. addArticle(dat.articles[i].publishedAt, dat.articles[i].title, dat.articles[i].description, dat.articles[i].source.name, dat.articles[i].urlToImage, dat.articles[i].id)
			}
		}

		
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