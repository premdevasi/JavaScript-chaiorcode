const coding = ["js", "ruby", "java", "pythoin", "cpp"]

//array me sabse jyadha forEach loop hi kaam me late he
// coding.forEach( function(item) {//call back me name nhi hota he jese phale ham normal function name(){} es trike se likhate the par call back function me naem nnhi likhana hota he.
// console.log(item);
// } )

//forEcch ko as a arrow function ki trah use karsakte he
coding.forEach( (val)=>{
///console.log(val);
} )


// function printMe(item){
//     console.log(item);
// }
// //kisi or function ko ham as a parameter use karke use kar sakte he
// coding.forEach(printMe)//function ka referance dena he execute nhi karna he

//forech keval item par hi itraet nhi karta balki ham index bhi nikal sakte he arr ki puri list nikal sakte he
coding.forEach( (item, index, arr)=>{
//console.log(item, index, arr);
})

//[{},{},{},{}] es trike se agar kabhi array ke andhar object ho to ham forEach loop ka use kar sakte he
const myCoding = [
    {
        languageName:"javaScript",
        languageFile:"js"
    },
    {
        languageName:"java",
        languageFile:"java"
    },
    {
        languageName:"python",
        languageFile:"py"
    },
]

myCoding.forEach( (item)=>{
console.log(item.languageName);
})