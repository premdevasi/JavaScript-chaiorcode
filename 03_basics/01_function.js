

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
//         console.log("please  enter username");
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
//console.log(loginUserMessage())//jab arguments me value nhi likhate to undefined



// function calculateCartPrice(...num1){//...(isko rest oprator kahte he)  likhane ke bad arguments ham kintni bhi value pass karva sakte he
// return num1;
// }
// console.log(calculateCartPrice(200,300,780,410));

function calculateCartPrice(val1,val2,...num1){
     return num1;
    }
     //console.log(calculateCartPrice(200,300,780,410));//output =[780,410] val1=200,val2=300, to output 780,410 aayega

const user={
    userName:"prem",
   prices:199,//pricce ko agar prices likha output = user is prem and price is undefined aayega.
} 

function handleObject(anyObject){
//console.log(`user is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user);
 handleObject({
    userName:"sam",
    price:399,
 });

 //Arrays in function
 const myNewArray = [200,300,400,785,412,551,626]
 function returnSecondValue(getArray){
 return getArray[1]
 }
 //console.log(returnSecondValue(myNewArray));//output = 300
 console.log(returnSecondValue([200,300,400,785,412,551,626]));//ham ese bhi pass kar sakte he