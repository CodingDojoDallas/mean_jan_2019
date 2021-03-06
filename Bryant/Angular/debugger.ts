// 1.

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";
// I put quotes around the 9, because myString can only be a string  type variable.


// 2.

function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9"));
// Again, // I put quotes around the 9, because myString can only be a string  type variable, otherwise it won't take the place of name.


// 3.

function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "", "Jones"));
// I just put in empty quotes in place of the middlename, since it requires 3 arguments.


// 4.

interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
   // There was a missing s after belt to make belts. The key values must all line up.
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));


// 5. 

class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:

const shane = new Ninja("Shane", "Dawson");

// Added new in front of Ninja to tell it to make a new Ninja object. Also gave shane a first and last name in the parameters.
// Since I'm having trouble making an instance of Ninja, I decided to do this:

const turing = new Ninja("Alan", "Turing")

//Recreated how to initialize turing constant as same way I setup shane Ninja object.
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));



// 6.

var increment = x => x + 1;
console.log(increment(3));
var square = x => {x * x};
console.log(square(4));
var multiply = (x,y) => x * y;
// Put parentheses around the x and y.

var math = (x, y) => {
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
};
//put curly brackets after the arrow function, since it is a statement.


// 7. 


class Elephant {
   constructor(public age: number){}
   birthday = function(){
      this.age++;
   }
}
var babar = new Elephant(8);
// Changed const to a var so that that age can be changed after initialization.

setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
