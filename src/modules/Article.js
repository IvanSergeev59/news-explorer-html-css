 import {api} from "ApiUrl.js";
 export class Article {
 	constructor(date, title, text, source) {
 		this.articleElement = this.createArticle (date, title, text, source);
 		this.articleElement.querySelector('.card-block-image').addEventListener('click', this.addArticle);
 	}
 

addArticle(dateValue, titleValue, textValue, sourceValue) {
	const article = document.createElement('div');
	const articleTopBlock = document.createElement('div');
	const articleKeyBlock = document.createElement('div');
	const articleCardBlockImage = document.createElement('div');
	const articleCardBottomBlock = document.createElement('div');
	const articleCardDate = document.createElement('h3');
	const articleCardTitle = document.createElement('h2');
	const articleCardText = document.createElement('p');
	const articleCardSource = document.createElement('h4');
}
 }