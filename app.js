// If Statements
// Example 1
if (1 == 1){
    console.log("it is ture!")
}

// Example 2
let oldRating = 5;
if (oldRating == 5){
    console.log("YOU ARE A SUPERSTAR")
}

// Example 3
let num = 29;
if (num % 2 !== 0){
    console.log("This is an ODD number.")
}

// Else if & Else
// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - try again

// Example 1
let rating = 3;
if (rating == 1){
    console.log("needs improvement")
}else if(rating == 2){
    console.log("meets expectations")
}else if(rating == 3){
    console.log("superstar!")
}else{
    console.log("Invalid rating, please try again")
}

// Example 2
let highScore = 2500;
let userScore = 400;

if (userScore >= highScore){
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore; // updating high score
}else{
    console.log(`Good Game ! Your score of ${userScore} did not beat the high score of ${highScore}`)
}

// Nesting Conditionals

// Example 1
let password = 'wiz khalifa';

if (password.length >= 7){
    if (password.indexOf(' ') === -1){
        console.log('Valid Password')
    }else{
        console.log('Password is longer, but cannot contain spaces')
    }
} else{
    console.log('Password must be longer')
}

// Truthy & Falsy Values
// Falsy values : false, 0, ""(empty string),null, undefined, NaN
// Everything else is truthy !

// Example 1
let loggedInUser = null;

if (loggedInUser){
    console.log('YOU ARE LOGGED IN!')
} else{
    console.log('PLEASE LOG IN!')
}

// logical AND (&&), OR (II), NOT Operator (!)

// Example 1
let passwrd = 'bangawanga'

if (passwrd.length >= 8 && passwrd.indexOf(' ') === -1){
    console.log('VALID PASSWORD')
} else {
    console.log('INVALID PASSWORD')
}

// Example 2
let age = 75;

if(age < 6 || age >= 65){
    console.log('YOU GET IN FOR FREE')
} else {
    console.log('YOU MUST PAY $10')
}

// Example 3
let user;

// Of there isn't a logged in user...
if (!user){
    console.log('KINDLY EXIT!')
}

// Example 4
let flavor = 'pineapple'

if (flavor !== 'grape' && flavor !== 'mint'){
    console.log('Sorry, we do not have that flavor')
} else if (!(flavor ==='pineapple' || flavor ==='cherry')){
    console.log('yay! we have your flavor')
}


// Switch Statement
// Example 1
let day = 2;

switch(day){
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6:
        console.log('SATURDAY');
        break;
    case 7:
        console.log('SUNDAY');
        break;
    default:
        console.log("INVALID DAY")               
}

// Example 2
let emoji = 'heart';

switch(emoji){
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;                
}

// Ternary Operator
// Example 1
let digit = 7;

digit === 7? console.log('Bingo!') : console.log('Ouch !')

// Example 2
let status = 'offline';

let color = status === 'offline' ? 'red' : 'green';

// For Loops
// Example 1

for (let i = 1; i <= 20; i+=1){
    console.log(` The perfect square of ${i} is ${i * i}`)
}

// Example 2
const examScores = [98,77,84,91,57,66];

for (let i = 0; i < examScores.length ;i+=1){
    console.log(` Your score is ${examScores[i]}`)
}

// Example 3
const myStudent = [
    {
        firstName : 'Zeus',
        grade : 86
    },
    {
        firstName : 'Artemis',
        grade : 97
    },
    {
        firstName : 'Hera',
        grade : 72
    },
    {
        firstName : 'Apollo',
        grade : 90
    }
];

for (let i = 0; i < myStudent.length; i+=1){
    console.log(`${myStudent[i].firstName} had a score of ${myStudent[i].grade}`)
}

// Finding Avergae grade of students
let total = 0;
for (let i =0 ; i < myStudent.length; i++){
    total += myStudent[i].grade   
}
console.log(total/myStudent.length); 

// Example 4
const word = 'wabingozango';
let reveresedWord = '';
for (let i = word.length -1; i > -1 ;i-=1 ){
    reveresedWord += word[i];
    console.log(reveresedWord);
}

// Nested Loops
// Example 1
const gameBoard = [
    [4,32,8,4],
    [64,8,32,2],
    [8,32,16,4],
    [2,8,4,2]
];

let totalPoint = 0;
for (let i = 0; i < gameBoard.length ; i+=1){
    let val = gameBoard[i]
    for (let j = 0; j < val.length; j+=1){
        totalPoint += val[j];
    }
}
console.log(totalPoint)

// While Loops
// Example 1
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !==target){
    console.log(`Target : ${target} Guess : ${target}`);
    guess = Math.floor(Math.random() * 10);
}

// FOR...OF
// Example 1

let games = ['soccer','lotto','baseball','NFL']
for (let item of games){
    console.log(item);
}

// Example 2
const magicSquare = [[2,7,6],[9,5,1],[4,3,8]];

for (let i = 0; i < magicSquare.length; i++){
    let sum = 0;
    let row = magicSquare[i];
    for (let j = 0; j < row.length; j++){
        sum += row[j];   
    }
    console.log(`${row} sums to ${sum}`)     
}

for (num of magicSquare){
    let bam = 0;
    for (it of num){
        bam += it;
    }
    console.log(`${num} sums to ${bam}`) 
}

// Example 3

const words1 = ['mail','milk','bath','black']
const words2 = ['box','shake','tub','berry']

for ( let i = 0; i < words1.length; i++){
    console.log(words1[i]+words2[i]);
}

// Example 4
const movieReviews = {'killZone' : 5.5, GameBoy : 6.5, "Lord of the Rings" : 4.8, 'Merlin': 5}

let totalRating = 0;
for ( movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie])
}

for (rat of Object.values(movieReviews)){
    console.log(rat)
    totalRating += rat
}   
console.log(`Total Rating is ${totalRating/Object.keys(movieReviews).length}`) 

// FOR...IN
// Example 1

const jeopardyWinnings ={
    regularPlay : 2522700,
    watsonChallenge : 100000,
    tournamentOfChamps : 200000,
    battleOfHeroes : 10000
}

for ( let key in jeopardyWinnings){
    console.log(key)
}

let totalPay = 0;
for (let cash in jeopardyWinnings){
    totalPay += jeopardyWinnings[cash];
}
console.log(`CR. 7 has a total of $${totalPay}`)