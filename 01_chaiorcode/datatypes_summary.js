//Primitive 
// 7 types: String, Number, Boolean, null, undefined, symbole(avence js me jyada use hota he. koi agar button he jise unique bana he to ham usko symbole me rap kar sakte he),
// BigInt(to handle big values of number)

// Reference type(non Primitive)
// Arrays, Objects, Functions

//symbole
const id =  Symbol(123);
const anotherId = Symbol(123);
//console.log(id === anotherId);//output is false because symbole me same value difiend karne par bhi vah same nhi hoti he

const myFunction = function(){
    //console.log("Hellow World");
}

//console.log(typeof myFunction);//typeof se ham varaibles ka data type pata kar sakte he
//non primitive data types ka return type object hi hota he
// https://262.ecma-international.org/5.1/#sec-11.4.3 this link for documents of javaScript


/**************************************************** Stack and Heap memory in javascript *************************************************/
//Stack(Primitive), Heap(non-Primitive)
let myYoutubeName = "ChaiorCode"
let anotherName = myYoutubeName;
anotherName = "prem_encodding"
console.log(anotherName);
console.log(myYoutubeName);

let userOne ={
    email:"prem@gmail.com",
    upiId:"user@ybl"
}

let userTow = userOne;
userTow.email = "officialorem@gmail.com"
console.log(userOne.email);