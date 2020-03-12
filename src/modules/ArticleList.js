import {Article} from "../modules/Article.js";
export class ArticleList {
	constructor(articleContainer, arr) {
		this.articleContainer = articleContainer;
		this.articles = [];
	}
	addArticle(date, title, text, source, urlToImage, id) {
		
		const {articleElement} = new Article(date, title, text, source, urlToImage);
		this.articles.push(articleElement);
		this.articleContainer.appendChild(articleElement);
		articleElement.setAttribute('id', id);
		const no = this.articles.length;
		if (no >3) {
			articleElement.classList.add('inactive');
		}
	}
	getArticle(date, title, text, source, urlToImage, id) {
		
		
		const {articleElement} = new Article(date, title, text, source, urlToImage);
		this.articles.push(articleElement);
		this.articleContainer.appendChild(articleElement);
		articleElement.setAttribute('id', id);
		articleElement.setAttribute('saved', true);
		
	
	}
}