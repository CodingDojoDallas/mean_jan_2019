// 1
// console.log(hello);  // logs undefined                                 
// var hello = 'world';   

var hello;
console.log(hello); // logs undefined
hello = "world";

// 2
// var needle = 'haystack';
// test();
// function test(){
//	 var needle = 'magnet'; // logs magnet
//	 console.log(needle);
// }

var needle = 'haystack';
function test(){
	var needle = 'magnet';
	console.log(needle); // logs 'magnet'
}
test();

// 3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);     // logs super cool

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan); 
}
console.log(brendan); // logs 'super cool', print function never called upon

// 4 
// var food = 'chicken';
// console.log(food);   // logs chicken
// eat();
// function eat(){
//	food = 'half-chicken';   // logs half-chicken
//	console.log(food);
//	var food = 'gone';
// 

var food = 'chicken';
console.log(food);  // logs 'chicken' first
function eat(){
	food = 'half-chicken';
	console.log(food); //logs 'half-chicken'
	var food = 'gone';
}
eat();

// 5
// mean();    // error mean is not a function
// console.log(food);  // error food is not a defined
// var mean = function() {
//	food = "chicken";
//	console.log(food);
//	var food = "fish";
// 	console.log(food);
// }
// console.log(food); // error food is not defined

mean(); // error mean is not a function
console.log(food); //error food is not defined
var mean = function(){
	food = 'chicken';
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food); // error food is not defined

// 6
// console.log(genre);  // logs undefined
// var genre = "disco";
// rewind();            
// function rewind() {
// 	genre = "rock";	    
//	console.log(genre);  //logs rock
//	var genre = "r&b";
//	console.log(genre);  //logs r&b
// }
// console.log(genre);   //logs disco

var genre;          
console.log(genre);   // logs undefined
function rewind(){
	genre = "rock";
	console.log(genre);   //logs rock
	var genre = "r&b";
	console.log(genre);    //logs r&b
}
console.log(genre);      //logs disco

// 7
// dojo = "san jose";
// console.log(dojo);  // logs san jose
// learn();
// function learn() {
//	dojo = "seattle";
//	console.log(dojo);  // logs seattle
//	var dojo = "burbank";
//	console.log(dojo);   // logs burbank
// }
// console.log(dojo);   // logs san jose

dojo = "san jose";   
console.log(dojo);    // logs san jose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);    // logs seattle
	var dojo = "burbank";
	console.log(dojo);    // logs burbank
}
console.log(dojo);   // logs san jose
 
// 8
// console.log(makeDojo("Chicago", 65)); 
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//      const dojo = {};
//      dojo.name = name;
//      dojo.students = students;
//      if(dojo.students > 50){
//          dojo.hiring = true;
//      }
//      else if(dojo.students <= 0){
//          dojo = "closed for now";
//      }
//      return dojo;
// }

function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65));  // creates dojo object with chicago name and 65 students
console.log(makeDojo("Berkeley", 0));  // dojo closed for now

