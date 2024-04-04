
// const user = {
//     name: 'Codergyan',

//     printName(){
//         console.log(this.name);
//     }
// };

// const user2 = {
// name: 'johndoe'
// }

// let  rasualt = user.printName.bind(user2);
//   rasualt();



//function borrowing
//call
// const user = {
//     fname: 'Coders',
//     lname:'Gyan',

//     getFullName(){
// return `${this.fname} ${this.lname}`;
//     },
// };

// const user2 = {
//   fname:'John',
//   lname:'Done'
// }

// console.log(user.getFullName.call(user2));


//apply
// const user = {
//     fname: 'Coders',
//     lname:'Gyan',

//     getFullName(greeting, timeofTheDay){
// return `${greeting} ${timeofTheDay} ${this.fname} ${this.lname}`;
//     },
// };

// const user2 = {
//   fname:'John',
//   lname:'Done'
// }

// console.log(user.getFullName.apply(user2, ['hello', 'morning']));



//function curring 

function multiply(a,b){
    return a * b;
}

const doubleIt = multiply.bind(null, 2);

console.log(doubleIt(5));
