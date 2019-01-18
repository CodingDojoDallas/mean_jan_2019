class Bike {
    price: number;
    max_speed:number;
    miles: number
    constructor(price,max_speed){
        this.price=price;
        this.max_speed=max_speed;
        this.miles= 0;
    }
    displayInfo() {
        console.log('Bike info'+this.price+this.max_speed+this.miles);
    }
    public ride(): this {
        console.log("Riding");
        this.miles+=10;
        return this
    }
    reverse(): this {
        console.log("Reversing");
        this.miles-=5;
        return this;
    }
}
const bike1=new Bike(100,50);
const bike2=new Bike(200,70);
const bike3=new Bike(10,1);

bike1.ride().ride().ride().reverse().displayInfo();
