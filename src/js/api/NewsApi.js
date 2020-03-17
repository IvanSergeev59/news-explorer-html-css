export class NewsApi {
	constructor(newsParams) {
		this.newsParams = newsParams;
	}
	search(name) {
	
	const url = `http://newsapi.org/v2/everything?q=${name}&from=${this.newsParams.from}&to=${this.newsParams.to}&pageSize=${this.newsParams.pageSize}&apiKey=${this.newsParams.key}`;
	return fetch(url, {
		method:'GET'})
		.then(res =>{
			if(res.ok) {

				return res.json()
			}
			return Promise.reject(`Ошибка: ${res.status}`)
		})
	}
}