class Bike {
    price: number;
    max_speed: number;
    miles: number;
   constructor(
       price: number,
       max_speed: number,
       miles: number,
   ) {
       this.price = price;
       this.max_speed = max_speed;
       this.miles = miles;
      }
    displayInfo() {
        return "Price: " + this.price + ", Max Speed: " + this.max_speed + ", Miles: " + this.miles + ".";
    }
    ride() {
        console.log("Riding");
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("Reversing");
        this.miles -= 5;
        return this;
   }
}


var jon = new Bike(100, 50, 10);
var jake = new Bike(200, 90, 30);
var jay = new Bike(50, 45, 5);

jon.ride().ride().ride().reverse().displayInfo;
jake.ride().ride().reverse().reverse().displayInfo;
jay.reverse().reverse().reverse().displayInfo;




//To prevent negative miles i would put an if statement in to the ride function before it can be exectuted.
// The ride and reverse methods can be used in chaining due to the return this.
