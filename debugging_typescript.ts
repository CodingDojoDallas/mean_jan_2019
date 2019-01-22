//1
//changed parameter type to any
var myString: any;
myString = "Bee stinger";
myString = 9;

//2.
//change parameter type to any
function sayHello(name: any){
   return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
console.log(sayHello(9));

//3.
//added ? after middle name
function fullName(firstName: string, lastName: string, middleName?: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));

//4.
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
   //belt needed an s
   belts: 4
}
console.log(graduate(christine));
console.log(graduate(jay));

//5.
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
//Finished creating the instance Shane
const shane = new Ninja("Shane", "Red");
//Made an instance of class Ninja with turring
 const turing = new Ninja("Alan", "Turing");
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));

//6.
var increment = x => x + 1;
console.log(increment(3));
var square = x => {x * x};
console.log(square(4));
// x and y need parenthesis
var multiply = (x,y) => x * y;
// This needed to be turned into a function
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

//7
class Elephant {
   constructor(public age: number){}
 //took out function and added arrow function.
   birthday = () => {
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)