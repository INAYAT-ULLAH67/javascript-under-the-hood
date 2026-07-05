class User {
    // 1. The Constructor method (Runs automatically on 'new')
    // This is exactly like Python def __init__(self, username, age, email):
    constructor(username, age, email) {
        this.username = username;
        this.age = age;
        this.email = email;
    }

    // 2. Class Methods
    // No 'function' keyword needed! JS automatically puts this on the Prototype object.
    getUserDetails() {
        return `Username: ${this.username}, Email: ${this.email}`;
    }

    isAdult() {
        return this.age >= 18;
    }
}

// Creating an instance works exactly the same way:
const user1 = new User('inayat', 21, 'ullah55.492@gmail.com');

console.log(user1.getUserDetails()); 
console.log(user1.isAdult()); 


class Car{
    constructor(model,make){
        this.model=model
        this.make=make
    }
    get_carModel(){
        return `model of ${this.make} is ${this.model}`
    }
}


const myCar = new Car('Civic', 'Honda');
console.log(myCar.get_carModel())
console.log(myCar)



// why we say that classes are only wrap/classes are just syntactic sugar over constructor functions and prototypes in javascript
// we can see below and can examine! this fact


function car(model,make){
    this.model=model
    this.make=make


}
car.prototype.getCarDetails= function(){

    return `model of ${this.make} is ${this.model}`
}