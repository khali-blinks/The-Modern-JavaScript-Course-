const form = document.querySelector('#search')
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params : {q: searchTerm}}
    const req = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    makeImages(req.data);
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const newimg = document.createElement('img');
            newimg.src = result.show.image.medium;
            document.body.append(newimg)
        }
    }
}