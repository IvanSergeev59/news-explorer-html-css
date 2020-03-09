import {serverUrl} from "../modules/ApiUrl.js";
export class Api {
	constructor(options) {
	this.options = options;
}
/* add all cards from server */
getCurrentArticles() {
	return fetch(serverUrl + '/articles', {
		headers: {
			authorization: this.options.headers.authorization
		},
	})
	.then((res) => {
		if (res.ok) {
			return res.json()
		}
		else {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
	})
}

signUp(userEmail, userPassword, userName) {
	return fetch(serverUrl + `/signup`, {
		method: 'POST',
		headers: this.options.headers,
		body: JSON.stringify({
			email: userEmail,
			password: userPassword,
			name: userName
		})
	})
	.then((res) => {
		if (res.ok) {
			res.json()
		}
		else {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
	})
}

signIn(userEmail, userPassword) {
	return fetch(serverUrl + `signin`, {
		method:'POST',
		headers:this.options.headers,
		body: JSON.stringify({
			email:userEmail,
			password: userPassword
	})
})
	.then((res) => {
		if (res.ok) {
			res.json()
		}
		else {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
	})
}
addArticle(articleKeyword, articleTitle, articleText, articleDate, articleSource,articleLink, articleImage) {
	return fetch(serverUrl + `articles`, {
		method:'POST', 
		headers:this.options.headers,
		body:JSON.stringify({ 
			keyword: articleKeyword,
			title: articleTitle,
			text: articleText,
			date: articleDate,
			source: articleSource,
			link: articleLink,
			image: articleImage
	})
})
	.then((res) => {
		if (res.ok) {
			res.json()
		}
		else {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
	})
}

removeArticle(id) {
	return fetch(serverUrl + `articles`, {
		method:'DELETE',
		headers:this.options.headers,

	})
	.then((res) => {
		if (res.ok) {
			res.json()
		}
		else {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
	})
}
}