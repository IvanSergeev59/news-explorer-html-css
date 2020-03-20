import {Article} from "../js/Article.js";
import {constsList} from "../js/consts/const.js";
import { mainApi } from "../js/apiUrl/mainApiUrl";
export class ArticleList {
	constructor(articleContainer) {
		this.articleContainer = articleContainer;
		this.articles = [];
		
	}
	addArticle(article) {
		mainApi.getCurrentArticles()
		.then((dat) => {
	
		dat.data.forEach((item,index,array) => {
			if (item.link === article.urlToImage) {
				cardBlockImage.classList.remove('block-image__non-marked');
				cardBlockImage.classList.add('block-image__marked');
				cardBlockImage.removeAttribute('auth');
				cardKeyText.textContent="Новость уже сохранена"

	
			}
					})
			
		})

		
		.catch((err) => {
			console.log(err)
		})
		const cardBlockImage = article.articleElement.querySelector('.card-block-image');
		const cardKeyText = article.articleElement.querySelector('.card__key-text');
		
		
		if(constsList.headerAuth.classList.contains('inactive')) {
			article.articleElement.setAttribute('auth', false);
			cardBlockImage.classList.add('block-image__non-auth');
			cardKeyText.textContent="Войдите, чтобы сохранять статьи"
		}
		else {
			article.articleElement.setAttribute('auth', true);
			cardBlockImage.classList.add('block-image__non-marked');
			cardBlockImage.setAttribute('auth', true)
			cardKeyText.textContent="Нажмите, чтобы сохранить"
		}
		this.articles.push(article);
		
		this.articleContainer.appendChild(article.articleElement);
		
		
		
	}
	getArticle(article) {
	
		const cardBlockImage = article.articleElement.querySelector('.card-block-image');
		const cardKeyText = article.articleElement.querySelector('.card__key-text');
		if(constsList.headerAuth.classList.contains('inactive')) {
			article.articleElement.setAttribute('saved', false);
			
		}
		else {
			article.articleElement.setAttribute('saved', true);
			
		}
		if (article.articleElement.hasAttribute('saved')) {
			
			cardBlockImage.classList.add('block-image__delete');
			cardBlockImage.setAttribute('saved', true)
			cardKeyText.textContent="Нажмите, чтобы удалить"
		}
		this.articles.push(article);
		this.articleContainer.appendChild(article.articleElement);

		
	}
}