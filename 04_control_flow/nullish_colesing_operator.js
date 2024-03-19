//Nullish Coalesing operator(??): null undefined
//ye ?? operator sirph null or undefind ke liye bana he matlab agar hmare paas  deteBase se null or 10 value aayi he to ab agar ham null??10 karnge to 10 hi value aayegi null nhi aayegi
let val1;
//val1 = 5 ?? 10;
///console.log(val1);//output = 5

// val1 = null ?? 10;
// console.log(val1);//output = 10

// val1 = undefined ?? 15;
// console.log(val1);//output - 15

val1 = null ?? 10 ?? 15//es case me jo first value milrgi vo asain ho jayegi
console.log(val1);//output = 10 