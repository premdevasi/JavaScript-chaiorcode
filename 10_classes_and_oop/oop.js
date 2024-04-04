//object literal
const user = {
username:"prem",
longincount:8,
singnedIn:true,

getUserDetails: function(){
    //console.log("Got user details from databse");
    //console.log(`Username: ${this.username}`);
    //console.log(this);

}
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

function User(username, loginCount, isLoggedIn){
 this.username = username; 
 this.loginCount = loginCount;
 this.isLoggedIn = isLoggedIn;

 this.greeting = function(){
    console.log(`welcome ${this.username}`);
 }

 return this;
}

//const userOne = new User("hitesh", 12, true)
//const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);



//instanceOf - The instanceof operator in JavaScript is used to check whether an object belongs to a particular class or constructor function. It returns true if the object is an instance of the specified class or constructor function, otherwise it returns false.
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks!`);
    }
}

class Cat extends Animal {
    meow() {
        console.log(`${this.name} meows!`);
    }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

console.log(dog instanceof Animal); // Output: true
console.log(cat instanceof Animal); // Output: true
console.log(dog instanceof Dog);    // Output: true
console.log(cat instanceof Cat);    // Output: true

// Instances of subclasses are also instances of the superclass
console.log(dog instanceof Cat);    // Output: false
console.log(cat instanceof Dog);    // Output: false