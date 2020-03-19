import {buttonSearchLoading, buttonSearchLoadingEnd} from "../buttonLoading.js";
import {ArticleList} from "../ArticleList";
import {newsApi} from "../apiUrl/newsApiUrl.js";

import {constsList} from "../consts/const.js"

const articleList = new ArticleList(document.querySelector('.cards__block'));
export function searchFormSend(event) {
	event.preventDefault();
	const form = constsList.searchForm;
	const searchName = form.elements.searchName;
	const name = searchName.value;
	
	
	while (constsList.cardsBlock.firstChild) {
		constsList.cardsBlock.removeChild(constsList.cardsBlock.firstChild);
	};
	

	
	newsApi.search(name)
	.then((dat) => {
		if (dat.articles.length>0) {
			constsList.cardsFoundTitle.classList.remove('inactive');
			constsList.cardsFoundMore.classList.remove('inactive');
		}
		console.log(dat.articles.length);
		let articlesLength = 3;
		if(dat.articles.length>0){
			for (let i=0; i < articlesLength; i++) {
				
				articleList.addArticle(dat.articles[i].publishedAt, dat.articles[i].title, dat.articles[i].description, dat.articles[i].source.name, dat.articles[i].urlToImage, dat.articles[i].id)
			}
		}
		else {}
			constsList.cardsFoundMore.addEventListener('click', cardsMore);
		function cardsMore() {
			for (let o = 0; o<3; o++){
				if(articlesLength<dat.articles.length){
					articlesLength = articlesLength +1;
				}
				else {
					articlesLength = articlesLength+0;
					constsList.cardsFoundMore.classList.add('inactive');
				}
				
			}
			
			while (constsList.cardsBlock.firstChild) {
				constsList.cardsBlock.removeChild(constsList.cardsBlock.firstChild);
			};
			
			for (let i=0; i < articlesLength; i++) {
				
				articleList.addArticle(dat.articles[i].publishedAt, dat.articles[i].title, dat.articles[i].description, dat.articles[i].source.name, dat.articles[i].urlToImage, dat.articles[i].id)
			}
		}

		
		if(dat.articles.length === 0) {
			constsList.noCards.classList.remove('inactive');
			constsList.cardsFound.classList.add('inactive')
		}
		else {
			constsList.noCards.classList.add('inactive');
			constsList.cardsFound.classList.remove('inactive')
		}
	})
	

	.catch((err) =>{
		console.log(err);
	})

	buttonSearchLoading();

	buttonSearchLoadingEnd()
}