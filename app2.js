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

// Map
const numbers = [20,40,50,21,62,54];
const words = ['asap','byob','rsvp','diy'];

// Example 1
const double = numbers.map(function(num){
    return num * 2;
})

// Example 2
const dict = numbers.map(function(num){
    return { 
        value : num,
        isEven : num % 2 == 0
    }
})

// Example 3
const abbrevs = words.map(function(word){
    return word.toUpperCase().split('').join('.')
})

// Example 4
const bookTitle = books.map(function(bk){
    return bk.title
})

// Arrow Functions with Implicit Returns
const degits = [1,2,2,3,4,5,6,7,8]

// Example 1
const db1 = x => {
    return x**2
}

// Example 2
const db2 = x => x * 3;
const db3 = degits.map(x => x % 2 === 0? 'even' : 'odd');

// Find
let movies = ['Venom','The last dance','The Dean of Thieves', 'Crazy dudes']

// Example 1
const guz = movies.find(x => {return x.includes('The')});
const guzz = movies.find(x => {return x.indexOf('The')=== 0});

// Example 2
const highR = books.find(x => x.rating > 4);

// Filter
// Example 1
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(y => y % 2 === 1)

// Example 2
const bookz = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const rat = bookz.filter( bk => bk.rating > 3.5);
const genres = bookz.filter( bk => bk.genres.includes('fantasy')||bk.genres.includes('essays'));

const query = 'The';
const search = bookz.filter(bk => {
    let tit = bk.title.toLowerCase();
    return tit.includes(query.toLowerCase())
})

// Every & Some
// Example
const wordss = ['dog','bag','dig','log','bag','nag']

const threeLetter = wordss.every( word => word.length === 3);
const endG = wordss.every(word => word[word.length - 1] === 'g' );

const letterD = wordss.some( word => word[0] === 'd');

// Reduce
// Example 1
const numm = [3,5,4,50,6];
const product = numm.reduce((preV, curV)=>{
    return preV * curV
})

// Example 2
const grades = [ 54,65,87,69,74,59,41,36,75,92];
const maxGrade = grades.reduce((max,curGrade) => {
    if (curGrade > max){
        return curGrade
    }return max
})
const minGrade = grades.reduce((min, curGrade)=> (Math.min(min,curGrade)));