// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const div = document.querySelector('#container');


for(let i = 1; i <= 151; i++){
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    div.appendChild(newImg);
    const num = document.createElement('span');
    num.append('#',i);
    div.appendChild(num)
}

div.classList.add('pokemon')
div.nextElementSibling.classList.add('pokemon');