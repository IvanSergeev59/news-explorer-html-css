import {Article} from "../js/Article.js";
import {constsList} from "../js/consts/const.js";
export class ArticleList {
	constructor(articleContainer, arr) {
		this.articleContainer = articleContainer;
		this.articles = [];
	}
	addArticle(date, title, text, source, urlToImage, id) {
		
		const {articleElement} = new Article(date, title, text, source, urlToImage);
		const cardBlockImage = articleElement.querySelector('.card-block-image')
		const cardKeyText = articleElement.querySelector('.card__key-text');
		this.articles.push(articleElement);
		
		this.articleContainer.appendChild(articleElement);
		if(constsList.headerAuth.classList.contains('inactive')) {
			articleElement.setAttribute('auth', false);
			cardBlockImage.classList.add('block-image__non-auth');
			cardKeyText.textContent="Войдите, чтобы сохранять статьи"
		}
		else {
			articleElement.setAttribute('auth', true);
			cardBlockImage.classList.add('block-image__non-marked');
			cardBlockImage.setAttribute('auth', true)
			cardKeyText.textContent="Нажмите, чтобы сохранить"
		}
		
		
	}
	getArticle(date, title, text, source, urlToImage, id) {
		
		
		const {articleElement} = new Article(date, title, text, source, urlToImage);
		this.articles.push(articleElement);
		this.articleContainer.appendChild(articleElement);
		articleElement.setAttribute('id', id);
		const cardBlockImage = articleElement.querySelector('.card-block-image')
		const cardKeyText = articleElement.querySelector('.card__key-text');
		
		if(constsList.headerAuth.classList.contains('inactive')) {
			articleElement.setAttribute('saved', false);
			
		}
		else {
			articleElement.setAttribute('saved', true);
			
		}
		if (articleElement.hasAttribute('saved')) {
			
			cardBlockImage.classList.add('block-image__delete');
			cardBlockImage.setAttribute('saved', true)
			cardKeyText.textContent="Нажмите, чтобы удалить"
		}

		
	}
}