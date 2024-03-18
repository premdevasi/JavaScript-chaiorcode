

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

// function addTwoNumber(number1, number2){
//  console.log(number1+number2);
// }
// addTwoNumber(3, 5);

//const result  = addTwoNumber(3, 5);
//console.log(result);//result console karnge to undefined aayega


function addTwoNumber(number1, number2){
   let result = number1+number2;
    return result;
    return number1+number2;//we can also return  like this 
    //console.log("prem");//ye line kbhi exicute nhi hogi kyoki return ke bad vala code nhi calta he
   }

const result = addTwoNumber(3, 5);
//console.log(result);//es trike se likhane par undefined nhi aayega, output = 8


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please a enter username");
//         return
//     }
// return `${username} just logged in`//we can also return like this
// }

// //console.log(loginUserMessage("prem"))
// console.log(loginUserMessage())//jab arguments me value nhi likhate to undefined

function loginUserMessage(username ="hari"){//agar koi value arguments me na ho usksi jag hari aajayega par undefined nhi aayega
    if(username === undefined){
        console.log("please a enter username");
        return
    }
return `${username} just logged in`//we can also return like this
}

//console.log(loginUserMessage("prem"))
console.log(loginUserMessage())//jab arguments me value nhi likhate to undefined
