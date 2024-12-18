// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
//     // This event is triggered when the HTTP request completes successfully (when the server responds with data).
//     // The callback function will execute when the event fires, allowing you to handle the server's response.
// 	console.log('IT WORKED!!!');
// 	const data = JSON.parse(this.responseText); // Converts the raw JSON string into a JavaScript object or array
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// });
// firstReq.addEventListener('error', () => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');//'GET': Specifies the HTTP method (GET retrieves data).
// firstReq.send(); // Sends the configured HTTP request to the server.
// console.log('Request Sent!');

// Chaining Requests
const firstReq1 = new XMLHttpRequest();
firstReq1.addEventListener('load', function() {
	console.log('FIRST REQUEST WORKED!!!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('SECOND REQUEST WORKED!!!');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq1.addEventListener('error', (e) => {
	console.log('ERROR!!!!!!');
});
firstReq1.open('GET', 'https://swapi.tech/api/planets/');
firstReq1.send();
console.log('Request Sent!');