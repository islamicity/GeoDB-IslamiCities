const fetch = require('node-fetch');

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8722edb201msh9a067fc2063bd93p1fa1e9jsn7a7604452e0a',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));