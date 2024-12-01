// Functions
// Dice Roll Function
// Example 1
function rollDie(){
    let roll = Math.round(Math.random()*6);
    console.log(`Rolled : ${roll}`)
}
rollDie()

// Example 2
function multipleRolls(){
    rollDie();
    rollDie();
    rollDie();
}
multipleRolls()

// Arguments in functions
// Example 1
function greet (name){
    console.log(`This is the dude - ${name} I was talking about`)
}
greet('khaliblinks');

// Example 2
function multipleRolls(numRolls){
    for (let i = 0; i < numRolls; i++){
        rollDie();
    }
}

// Return Values
// Example

function isPurple(color){
    if (color.toLowerCase() === 'purple'){
        return true
    }
    return false
}
isPurple('blue')

function isPurple(color){
    return color.toLowerCase() === 'purple' // Useful for Yes or No kind of scenario
}

const colors = ['blue','pink','purple','gold','yellow']
function colorSimulator(color){
    for ( let item of color){
        if (item === 'gold'|| item === 'black'){
            return true
        }
    }
    return false
}

// Function Challenge 1 - Password Validator
function isValidPassword(username,password){
    if (password.length >= 8 && 
        password.indexOf(' ')=== -1 && 
        password.includes(username) == false)
        {
        return true
    }
    return false
}

function isValidPassword(username,password){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    if (tooShort || hasSpace || tooSimilar) return false;
    return true;
}

// Function Challenge 2 - Average
function avg (num){
    let total = 0;
    for (let item of num){
        total += item;

    }
    return total/num.length
}

// Function Challenge 3 - Pangrams
let alphabets = 'abcdefghijklmnopqrstuvwxyz';
function isPangram(sentence){
    let lowerSentence = sentence.toLowerCase();
    for (let letter of alphabets){
        if (sentence.includes(letter)){
            return true
        }
    }
    return false
}

// Function Challenge 4 - Get Playing Card
let suit = ['clubs','spades','hearts','diamonds']
let value = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']

function getCard(){
    // Generating random suit & value
    let selectSuit = suit[Math.floor(Math.random()* suit.length)];
    let selectValue = value[Math.floor(Math.random()* value.length)];
    // Object card
    return {
        suit : selectSuit,
        value : selectValue
    };
}

// Nested Functions
// Example 1
function favDessert(){
    let food = 'pizza';
    function favIceCream(){
        //let food = 'cookie';
        console.log(`i love ${food}`)
    }
    favIceCream();
}

// Example 2
function add(x,y){
    return x + y;
}
const subtract = function (x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
const divide = function (x,y){
    return x / y;
}

// Looping through functions
const operations = [add,subtract,multiply,divide]
for (let oper of operations){
    let result = oper( 10, 20);
    console.log(result); 
}

// Setting a function as an object
const methud = { perform : divide };

// Higher Order Functions
function favClub(){
    console.log('MANCHESTER UNITED IS THE BEST !')
}
const winT = function (){
    console.log('WE WILL WIN THE PREMIER LEAGUE')
}
function bing (f1,f2){
    f1();
    f2();
}
function multipleTimes (func, num){
    for (let i = 0 ; i < num ; i++){
        func();
    }
}
multipleTimes(favClub,10);

// Functions as Return Values
// Example
function trippler (num){
    return function (x){
        console.log(x * num);
    }
}
const tryn = trippler (5);
tryn(6);

function furtune (rich,poor){
    return function(wealth){
        if (rich === wealth || poor === wealth){
            console.log('burgande!')
        } else {
            console.log('bankudede!')
        }
    }
}
const dawa = furtune('kanzo','waakye');
dawa('fish');

// Array Callback Methods
// For Each
const books = [{
    title : 'Holy Quran',
    authors : ['Allah','Allah'],
    rating : 5
}, {
    title : 'Hadith',
    authors : ['Mohammed','S.A.W'],
    rating : 5
}, {
    title : 'Tafsir',
    authors : ['Ibn Kathim','Jadal'],
    rating : 5
}
]
books.forEach(function(item,idx){
    console.log(item['title'].toLocaleUpperCase(),idx)
})