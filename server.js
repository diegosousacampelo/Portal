/*server.js*/

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//const NewsAPI = require('newsapi');
//const newsapi = new NewsAPI('596cbdc712ba44f3a09a7fdb0e5200fc');
const fetch = require('node-fetch')

const server = http.createServer(function(req, res) {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.setHeader('Access-Control-Allow-Headers', "*")
	res.setHeader('Content-Type', 'application/json');
	
	/*newsapi.v2.topHeadlines({
		//q: 'bitcoin',
		//category: 'business',
		language: 'pt',
		country: 'br',
	}).then(response => {
		console.log(response);
		res.end(JSON.stringify(response));
	});*/
	fetch(`https://newsapi.org/v2/top-headlines${req.url}` ,{
		headers: {
			"X-Api-Key":"475e3379c59b4073a961f6e221c97587"
		}
	})
	.then(response => response.json())
	.then(response => {
		//console.log(response);
		res.end(JSON.stringify(response));
	})
});


server.listen(port, hostname, function() {
	console.log('Server running at http://'+ hostname + ':' + port + '/');
});