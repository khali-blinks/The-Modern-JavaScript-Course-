fetch('https://swapi.co/api/planetsuy21/')
// Returns a Promise that resolves to a Response object if the request succeeds or rejects if there’s a network error.
	.then((response) => {
		if (!response.ok)
            //A boolean property indicating whether the response status code is in the range 200-299 (successful responses).
			throw new Error(`Status Code Error: ${response.status}`);
            // If the status code is not okay, the code:Throws a new Error object. 
            // Includes the response status code (response.status) in the error message.
            // This error is caught in the .catch() block.
		response.json().then((data) => {
            // response.json(): A method to parse the response body as JSON. 
            // It returns a Promise that resolves to the parsed JSON object.
            // .then((data) => {...}): Handles the resolved JSON data. The data argument contains the parsed JSON.
			for (let planet of data.results) {
				console.log(planet.name);
			}
		});
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});