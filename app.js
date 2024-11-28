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