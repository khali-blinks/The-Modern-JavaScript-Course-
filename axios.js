axios
.get('https://swapi.tech/api/planets/')
.then((response)=>{
    const planets = response.data['results']
    for (let planet of planets){
        console.log(planet.name)
    }
})
.catch((err) => {
    console.log(err)
})

// Chaining Axios
const fetchNextPlanets = (url = 'https://swapi.tech/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR!!', err);
	});
