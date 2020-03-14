 import {api} from "../js/apiUrl.js";
 export class Article {
 	constructor(date, title, text, source, urlToImage) {
		this.date=date;
		 this.articleElement = this.createArticle (date, title, text, source, urlToImage);
		 
		this.articleElement.querySelector('.card-block-image').addEventListener('click', this.articleConsole);
		this.articleElement.querySelector('.card-block-image').addEventListener('mouseover', this.imageWinPopup);
		this.articleElement.querySelector('.card-block-image').addEventListener('mouseout', this.imageWinPopupClose);
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
	articleCardBlockImage.setAttribute('disabled', true)

	articleTopBlock.appendChild(keyTextHidden);
	keyTextHidden.classList.add('card__key-block');
	keyTextHidden.classList.add('key-text-hidden');
	keyTextHidden.classList.add('inactive');
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
	
}
imageWinPopup() {
	const po = event.target.closest('.card');
	const pol = po.querySelector('.key-text-hidden');


	pol.classList.remove('inactive');
	
	
}

imageWinPopupClose() {
	const po = event.target.closest('.card');
	const pol = po.querySelector('.key-text-hidden');
	pol.classList.add('inactive');
	
}
articleConsole() {
	
	
	if(event.target.hasAttribute('saved')){

const child = event.target.closest('.card');
const parent = document.querySelector('#savingCards')

function par(parent,child) {
	parent.removeChild(child)
}
api.removeArticle(child.getAttribute('id'))
.then(() =>{
par(parent,child)
	
})
	
	.catch((err) =>{ 
		console.log(err);
	});
}
	if(event.target.hasAttribute('auth')) {
		const card = event.target.closest('.card');
		const mark = card.querySelector('.card-block-image')
		const keyword = document.querySelector('.search__form_text-default').value;
		const title = card.querySelector('.card__title').textContent;
		const text = card.querySelector('.card__text').textContent;
		const date = card.querySelector('.card__date').textContent;
		const source = card.querySelector('.card__source').textContent;
		const linkCard = card.querySelector('.card__top-block');
		const linkBackground = linkCard.style.backgroundImage;
		const link = linkBackground.substr(5,linkBackground.length - 7);
		const image = link;
		
		api.addArticle(keyword,title,text, date, source, link, image)
		.then(()=> {
			
				mark.classList.remove('block-image__non-marked');
				mark.classList.add('block-image__marked');
				mark.removeAttribute('auth');
				
			})
			.catch((err) =>{ 
				console.log(err);
			});
		
	
	}
	event.stopPropagation();
}


}