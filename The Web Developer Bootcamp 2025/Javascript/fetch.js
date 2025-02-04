// fetch("https://swapi.tech/api/people/1/")
//   .then((res)=>{
//     console.log('resolved',res)
//     return res.json();
//   })
//   .then((data)=>{
//     console.log(data.result.properties);
//     fetch("https://swapi.tech/api/people/2/")
//     .then((res)=>{
//         console.log('RESOLVED 2',res)
//         return res.json();
//     }).then((data) =>{
//         console.log(data.result.properties)
//     })
//   })
//   .catch((err)=>{
//     console.log("ERROR",err)
//   })

//   const starWars = async ()=>{
//     const req = await fetch("https://swapi.tech/api/people/1/");
//     const data = await req.json();
//     console.log(data.result.properties)
//   }
//   starWars()


// axios.get("https://icanhazdadjoke.com/api",config)
// .then((res)=>{
//     console.log(res)
// }) 
const btn = document.querySelector('button');
const ul = document.querySelector('ul');


const dadJoke = async ()=>{
    try{
        const config = { headers : { Accept : 'application/json'}}
        const joke = await axios.get("https://icanhazdadjoke.com",config);
        return joke.data.joke
     } catch(e){
        console.log('CANNOT GET ACCESS TO SERVER :(',e)
     }
    }


const addJoke = async() => {
    const msg = await dadJoke();
    const newLi = document.createElement('li');
    newLi.innerText = msg;
    ul.appendChild(newLi);
}

btn.addEventListener('click',addJoke)