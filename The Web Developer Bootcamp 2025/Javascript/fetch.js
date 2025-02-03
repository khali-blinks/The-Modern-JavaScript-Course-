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

axios.get("https://swapi.tech/api/people/1/")
.th