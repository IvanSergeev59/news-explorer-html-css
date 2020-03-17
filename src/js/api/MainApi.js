
export class MainApi {
	constructor(options,token) {
	this.options = options;
	this.token = token;
}
/* add all cards from server */
getCurrentArticles() {
	return fetch(this.options + '/articles', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.token}`
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
	return fetch(this.options + `/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
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
	return fetch(this.options + `/signin`, {
		method:'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email:userEmail,
			password: userPassword
	})})
.then(res => res.json())
	.then((data) => {
		localStorage.setItem('token', data.token);
	})
	
}
addArticle(articleKeyword, articleTitle, articleText, articleDate, articleSource,articleLink, articleImage) {
	return fetch(this.options + `/articles`, {
		method:'POST', 
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.token}`
		},
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
			return res.json()
		}
		else {
			return Promise.reject(`Ошибка: ${res.status}`)
		}
	})
	
}

removeArticle(id) {
	return fetch(this.options + `/articles/`+id, {
		method:'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.token}`
    }
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

authorization() {
	return fetch(this.options + `/users/me`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.token}`
    }
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




}