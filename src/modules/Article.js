 import {api} from "../modules/apiUrl.js";
 export class Article {
 	constructor(date, title, text, source, urlToImage) {
 		this.articleElement = this.createArticle (date, title, text, source, urlToImage);
 		this.articleElement.querySelector('.card-block-image').addEventListener('click', this.articleClick);
 	}
 

createArticle(dateValue, titleValue, textValue, sourceValue, urlToImage,imageUni) {
	const article = document.createElement('div');
	const articleTopBlock = document.createElement('div');
	const articleKeyBlock = document.createElement('div');
	const articleCardBlockImage = document.createElement('div');
	const keyTextHidden = document.createElement('div');
	const cardKeyText = document.createElement('p');
	const articleCardBottomBlock = document.createElement('div');
	const articleCardDate = document.createElement('h3');
	const articleCardTitle = document.createElement('h2');
	const articleCardText = document.createElement('p');
	const articleCardSource = document.createElement('h4');
	article.classList.add('card');
	article.appendChild(articleTopBlock);
	articleTopBlock.classList.add('card__top-block');
	articleTopBlock.setAttribute('style', 'background-image: url(' + urlToImage + ')');
	articleTopBlock.appendChild(articleKeyBlock);
	articleKeyBlock.classList.add('card__key-block');
	articleKeyBlock.classList.add('right-key-block');

	articleKeyBlock.appendChild(articleCardBlockImage);
	articleCardBlockImage.classList.add('card-block-image');

	articleTopBlock.appendChild(keyTextHidden);
	keyTextHidden.classList.add('card__key-block');
	keyTextHidden.classList.add('key-text-hidden');
	keyTextHidden.appendChild(cardKeyText);
	cardKeyText.classList.add('card__key-text');
	
	article.appendChild(articleCardBottomBlock);
	articleCardBottomBlock.classList.add('card__bottom-block');

	article.appendChild(articleCardDate);
	articleCardDate.classList.add('card__date');
	articleCardDate.textContent = dateValue;
	article.appendChild(articleCardTitle);
	articleCardTitle.classList.add('card__title');
	articleCardTitle.textContent = titleValue;
	article.appendChild(articleCardText);
	articleCardText.classList.add('card__text');
	articleCardText.textContent = textValue;
	article.appendChild(articleCardSource);
	articleCardSource.classList.add('card__source')
	articleCardSource.textContent = sourceValue;
	return article;
	console.log(article);
}

remove() {
	const articleChild = event.target.closest('.card');
	function removeChild (parent, child) {
		parent.removeChild(child);
	}
api.removeArticle(articleChild.getAttribute('id'))
.then(() => {
	removeChild(articleList, articleChild)
})
.catch((err) =>{ 
	console.log(err);
});
  event.stopPropagation();

 }
}