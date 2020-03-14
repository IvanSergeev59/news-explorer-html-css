import {Article} from "../js/Article.js";
import { getUserName } from "../js/getUserName";
const check = document.querySelector('.header__authorization');
export class ArticleList {
	constructor(articleContainer, arr) {
		this.articleContainer = articleContainer;
		this.articles = [];
	}
	addArticle(date, title, text, source, urlToImage, id) {
		
		const {articleElement} = new Article(date, title, text, source, urlToImage);
		const imda = articleElement.querySelector('.card-block-image')
		const imdao = articleElement.querySelector('.card__key-text');
		this.articles.push(articleElement);
		
		this.articleContainer.appendChild(articleElement);
		if(check.classList.contains('inactive')) {
			articleElement.setAttribute('auth', false);
			imda.classList.add('block-image__non-auth');
			imdao.textContent="Войдите, чтобы сохранять статьи"
		}
		else {
			articleElement.setAttribute('auth', true);
			imda.classList.add('block-image__non-marked');
			imda.setAttribute('auth', true)
			imdao.textContent="Нажмите, чтобы сохранить"
		}
	
		
	}
	getArticle(date, title, text, source, urlToImage, id) {
		
		
		const {articleElement} = new Article(date, title, text, source, urlToImage);
		this.articles.push(articleElement);
		this.articleContainer.appendChild(articleElement);
		articleElement.setAttribute('id', id);
		const imda = articleElement.querySelector('.card-block-image')
		const imdao = articleElement.querySelector('.card__key-text');
	
		if(check.classList.contains('inactive')) {
			articleElement.setAttribute('saved', false);
			
		}
		else {
			articleElement.setAttribute('saved', true);
			
		}
		if (articleElement.hasAttribute('saved')) {
			
			imda.classList.add('block-image__delete');
			imda.setAttribute('saved', true)
			imdao.textContent="Нажмите, чтобы удалить"
		}

	
	}
}