const fam = document.querySelector('#fam')
const input = document.querySelector('#gari');
const list = document.querySelector('#food');

fam.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = data;
    list.appendChild(newLi);
    input.value = '';
})