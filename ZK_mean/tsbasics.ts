var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// put 9 in quotes to make it a string; or change type to number first;
myString = "9";

function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// put 9 in quotes to make it a string
console.log(sayHello("9"));

function fullName(firstName: string, lastName: string, middleName?: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// add a blank middle name, or make the middle name optional in the parameters
console.log(fullName("Jimbo", "Jones"));

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
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// belt was singular instead of plural
console.log(graduate(jay));

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
// needs 'new' method in order to create a new object instance. also needs a first and last name.
const shane = new Ninja("Alan","Turing");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
//change programmer input type to any
function study(programmer:any){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

var increment = x => x + 1;
// This works great:
console.log(increment(3));

//need to add return to make it explicit, or take out brackets to make it implicit
var square = x => {return x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
//put variables in parentheses
var multiply = (x,y) => x * y;
// Nor is this working:
// need brackets around entire function
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

class Elephant {
   constructor(public age: number){}
   birthday= age => age++;
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
}, 2000)
//fixed?
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

