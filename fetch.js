// fetch('https://www.swapi.tech/api/planets/')
// // Returns a Promise that resolves to a Response object if the request succeeds or rejects if there’s a network error.
// 	.then((response) => {
// 		if (!response.ok)
//             //A boolean property indicating whether the response status code is in the range 200-299 (successful responses).
// 			throw new Error(`Status Code Error: ${response.status}`);
//             // If the status code is not okay, the code:Throws a new Error object. 
//             // Includes the response status code (response.status) in the error message.
//             // This error is caught in the .catch() block.
// 		response.json().then((data) => {
//             // response.json(): A method to parse the response body as JSON. 
//             // It returns a Promise that resolves to the parsed JSON object.
//             // .then((data) => {...}): Handles the resolved JSON data. The data argument contains the parsed JSON.
// 			for (let planet of data.results) {
// 				console.log(planet.name);
// 			}
// 		});
// 	})
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});


// Chaining Fetch Requests
// fetch('https://swapi.tech/api/planets/')
// 	.then((response) => {
// 		if (!response.ok)
// 			throw new Error(`Status Code Error: ${response.status}`);

// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log('FETCHED ALL PLANETS (first 10)');
// 		const filmURL = data.results[0].url;
// 		return fetch(filmURL);
// 	})
// 	.then((response) => {
// 		if (!response.ok)
// 			throw new Error(`Status Code Error: ${response.status}`);

// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data)
// 		console.log('FETCHED FIRST FILM, based off of first planet');
// 		console.log(data.title);
// 	})
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});


// Refactoring Fetch Chains
const fetchNextPlanets = (url = 'https://swapi.tech/api/planets/') => {
	return fetch(url);
};

const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets...');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};


fetchNextPlanets()
	.then(checkStatusAndParse) // Process response from the first fetch
	.then(printPlanets)  // Print planets and return the `next` URL
	.then(fetchNextPlanets)  // Fetch the next page of planets
	.then(checkStatusAndParse) // Process response from the second fetch
	.then(printPlanets) // Print planets and return the `next` URL
	.then(fetchNextPlanets) // Fetch the next page of planets
	.then(checkStatusAndParse) // Process response from the third fetch
	.then(printPlanets) // Print planets
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});