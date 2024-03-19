//if

// if (true) {//ya par value false aayegi to andhar vala code nhi chakega
    
// }

// if(2==2){

// }

const isUserloggedIn = true;
const temperature = 41;

// if(2==="2"){
// console.log("executed");
// }
// if(2!=="2"){
// console.log("executed");
// }

//<, >, <=, >=, ==, !=, ===(type check that is Sttrig or int), !==
// if(temperature < 50){
//     console.log("less then 50");
// }else{
// console.log("temperature is greater then 50");
// }

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`user power:  ${power}`);
// }
// console.log(`user power:  ${power}`);


//const balnce = 1000;
//if(balnce > 500) console.log("test");//we can also right like this console.log, vese to ham ek line hi likh sakte he par agar jyadha line likhani he to coma(,) ka use ksrke likh sakte he

//if(balnce > 500) console.log("test"), console.log("test2");

// if (balnce > 500) {
//     console.log("less then 500");
// }
// else if(balnce < 750){
//     console.log("less then 750");
// }
// else if(balnce < 900){
//     console.log("less then 900");
// }
// else{
//     console.log("less then 1200");
// }

const userLoggedIn = true;
const debitcard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if(userLoggedIn && debitcard){
console.log("Allow to buy course");
}

if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("user logged in");
}