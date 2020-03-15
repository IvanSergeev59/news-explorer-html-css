import { api } from "./apiUrl";
import {ArticleList} from "../js/ArticleList.js";
import {headerUserName} from "../js/consts/const.js";
const articleList = new ArticleList(document.querySelector('#savingCards'));
const pageTitle = document.querySelector('.saving-description__title');
const pageSubtitle = document.querySelector('.saving-description__subtitle');

export function savedCardsLoad() {

	
   api.getCurrentArticles()
    .then((dat) => {
	
		dat.data.forEach(function(item, i, arr, id) {
			articleList.getArticle(dat.data[i].date, dat.data[i].title, dat.data[i].text, dat.data[i].source, dat.data[i].image, dat.data[i]._id);
		
		
			
		})
		const keywordsList =[];
		dat.data.forEach(function(item, i ) {
			keywordsList.push(dat.data[i].keyword)
		})
		console.log(keywordsList);
		function unique(keywordsList) {
			const result = [];

  for (let str of keywordsList) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
const uniqueKeywords = unique(keywordsList) ;

const uniqueKeywordsSum = uniqueKeywords.length-2 ;
	
for (var len = keywordsList.length, i = len; --i >= 0;) {
	if (keywordsList[keywordsList[i]]) {
		keywordsList[keywordsList[i]] += 1;
		keywordsList.splice(i, 1);
	} else {
		keywordsList[keywordsList[i]] = 1;
	}
  }

 

  keywordsList.sort(function(a, b) {
	 return keywordsList[b] - keywordsList[a];
	 
  })
console.log(keywordsList)
		pageTitle.textContent =  headerUserName.textContent +', у вас '+ dat.data.length + ' сохраненных статей';
		pageSubtitle.textContent = 'По ключевым словам:'+ ' '+ keywordsList[0] +' ' + keywordsList[1] + ' и ' + uniqueKeywordsSum + ' другим'
	})
		
	.catch((err) =>{
		console.log(err);
	})
}
