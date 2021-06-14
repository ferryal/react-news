import config from '../config';

export function fetchCustomNews(source, relevance){
	return function(dispatch){
		fetch(`${config.base_url}/articles?source=${source}&sortBy=${relevance}&apiKey=${config.api_key}`)
		.then(res => {
			return res.json();
		})
		.then(res => {
			dispatch({type:"FETCH_CUSTOM_NEWS", payload: res.articles});
		})
		.catch(err => {
				console.log(err);
		})
	}
}