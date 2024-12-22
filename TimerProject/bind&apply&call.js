// Bind
const person = {
    name: 'Alice',
    greet: function(greeting) {
      console.log(`${greeting}, my name is ${this.name}`);
    }
  };
  
  const anotherPerson = { name: 'Bob' };
  
  // Create a new function with `this` bound to `anotherPerson`
  const greetBob = person.greet.bind(anotherPerson, 'Hello');
  greetBob(); // Output: "Hello, my name is Bob"
  
// Call
function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  }
  
  const person = { name: 'Alice' };
  
  // Call the function with `this` set to `person`
  greet.call(person, 'Hi', '!'); // Output: "Hi, my name is Alice!"

// Apply
function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  }
  
  const person = { name: 'Alice' };
  
  // Call the function with `this` set to `person` and arguments in an array
  greet.apply(person, ['Hello', '!']); // Output: "Hello, my name is Alice!"

  
// Determining the value of this
// const colors = {
//     printColr(){
//         console.log(this);
//         const printThis = () => {
//         console.log(this);
//         };
//         printThis();
//     }
// }
// colors.printColr()

// // Using bind,call or apply to invoke the function
// const printThis = function(){
//     console.log(this);
// }
// printThis.call({fish:'tilapia'}) // overrides the value of this in the function
  