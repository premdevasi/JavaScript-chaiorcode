// let myName = "hitesh    ";
// let mychannel


// = "hitesh    ";
// console.log(myName.truelength);

let myHero = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

  gtSpiderPower: function(){
    //console.log(`Spidy power is ${this.spiderman} `)
  }
}

Object.prototype.hitesh = function(){
    //console.log(`hitesh is present in all object`);
}

Array.prototype.heyHitesh = function(){
    //console.log(`Hitesh says hello`);
}

//heroPower.hitesh()
// myHero.hitesh();
// myHero.heyHitesh();
// heroPower.heyHitesh();


//prototyepal in inheritance
const User = {
name:"chai",
email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASpourt = {
    makeAssigment:'Js assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


//modern syntx for prototypal inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)




let anotherUsername = "chaiAurCode    "

 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();