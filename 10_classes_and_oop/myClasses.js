//classes add in javaScritp after ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassworld(){
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai.encryptPassworld());//output = 123abc
// console.log(chai.changeUsername());//output = CHAI


//if calsses are not avelabal then we can do same work like this
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassworld = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassworld());//output = 123abc
console.log(tea.changeUsername());//output = TEA