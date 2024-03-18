
//var c = 300;//hamne ya pe c ki value 300 initialse ki he phir ham scope me c ko use karnge to vha par ab c ki value 30 me change hogyi hogi ye hi problem he var ke sath 
let a = 300;//agar let ko bar initaialse kiya he to if ke andar change kiya he to sirph vahi change hoga if se bar agar ham uska use karnge to vah change nhi hoga
if(true){
let a = 10;
//console.log("Inner: "+a);//ya pe a ki value 10 hogi
const b = 20;
var c = 30;
}

//console.log(a);//a ko scope({}) ke andar initialse kiya to bar use nhi hona chaye or ho bhi nhi rha he asi bat he
//console.log(b);//b ko scope({}) ke andar initialse kiya to bar use nhi hona chaye or ho bhi nhi rha he asi bat he
//console.log(c);//par c ko scopre({})  initialse fhir agar ham console log kayange to output me 30 aajayega ye problem he var ke sath ki vo scope ke bar bhi use ho jata he
//console.log(a);//ya ki value 300 hogi usko if ke andar use kiya he he to sirph vhi change hogi if se var vhi value rhegi jo upar initialse ki he


//Nested Scope
function one(){
    const userName = "prem"

    function tow(){
        const website = "youtube"
        console.log(userName);
    }
    //console.log(website);
    //tow();
}
one();
if(true){
    const userName = "prem"

    if(userName === "prem"){
        const website = " youtube"
       // console.log(userName+website);//output = prem youtube
    }
    //console.log(website);//ye nhi chalega error aajayega kyoki if bar ham esko access nhi kar sakte he
}
//console.log(userName);//esme bhi error aayega kyoki esko bhi if bar use kiya he


/************************************** intersting  **************************/

console.log(addOne(5));//ya par sirph function declar he variable ke andhar soter nhi ye decration se pahale bhi chal jayega
function addOne(num){
 return num+ 1;
}

console.log(addTow(5));//par ya par function variable ke andar declar he to ye declartion se paale nhi chalega
const  addTow = function(num){//js ke anda variable bhi function ko hold kar sakte he
    return num+2;
}
