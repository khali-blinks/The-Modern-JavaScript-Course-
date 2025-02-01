const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1display')
const p2Display = document.querySelector('#p2display')
const resetButton = document.querySelector('#reset')
const select = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(select.value);
let isGameOver = false;

p1Button.addEventListener('click',()=>{
    if(!isGameOver){
        p1Score+=1
    }
    if (p1Score === winningScore){
        isGameOver = true;    
    } 
    p1Display.innerText = p1Score;
})

select.addEventListener('change',()=>{
    winningScore = parseInt(this.value);
    reset();
})

p2Button.addEventListener('click',()=>{
    if(!isGameOver){
        p2Score+=1
    }
    if (p2Score === winningScore){
        isGameOver = true;    
    } 
    p2Display.innerText = p2Score;
})

resetButton.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
}