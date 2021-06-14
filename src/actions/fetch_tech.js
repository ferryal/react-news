import config from '../config';

export function fetchTech(){
	return function(dispatch){
		fetch(`${config.base_url}/articles?source=the-verge&sortBy=top&apiKey=${config.api_key}`)
		.then(res => {
			return res.json();
		})
		.then(res => {
			dispatch({type:"FETCH_TECH", payload: res.articles});
		})
		.catch(err => {
				console.log(err);
		})
	}   
}