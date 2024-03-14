//Dats
let myDate = new Date();
 console.log(myDate);
 console.log(myDate.toString());//utput = Thu Mar 14 2024 07:55:17 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toDateString());//utput = hu Mar 14 2024
 console.log(myDate.toISOString());//utput = 2024-03-14T07:55:17.391Z
 console.log(myDate.toLocaleDateString());//output=3/14/2024
 console.log(myDate.toLocaleString());//utput = 3/14/2024, 7:58:26 AM
 console.log(myDate.toLocaleTimeString());//utput = 7:58:26 AM
 console.log(myDate.toTimeString()); //utput = 07:59:44 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toUTCString());//utput = hu, 14 Mar 2024 08:00:32 GMT

console.log(typeof myDate);//utput = object

// let myCreatDate = new Date(2023, 0, 23);//javaScript me month Zero se start hote he like jan 1 nhi blki 0 hoga
 //let myCreatDate = new Date(2023, 0, 23, 5, 3);
 console.log(myCreatDate.toLocaleString());
//let myCreatDate = new Date("2024-01-14");//month zero se tab start hota he jab single digit me likhte he month ko
console.log(myCreatDate.toLocaleDateString());////utput = 1/14/2024

let myCreatDate = new Date("01-14-2023");//India me date ka syntex is trah hota he
//console.log(myCreatDate.toLocaleDateString());//utput = 1/14/2023

let myTimeStemp = Date.now();//new likhe ya ese bhi likha sakte he
console.log(myTimeStemp);//utput = 1710404600311 ye mili secend he January 1, 1970 jab javascript ne ye sab banaya tha tab se ab tak ye mili second me he

console.log(myCreatDate.getTime());//gettime ka use karke hamne 01/14/2023 ka mili second me nikal diya he, //utput = 1673654400000 

console.log(Date.now());//curent Date mili second me aayegi
console.log(Date.now()/1000);//dived 1000 karne se second me covert ho jayega par value decimal me aayegi
console.log(Math.floor(Date.now()/1000));//value decimal me lane se bachne ke liye Math.floor ka use karte he

let newDate =  new Date();//current date aayegi 
console.log(newDate.getDate());//sirf current date aajayegi month vagera kuch bhi nhi aayega, //utput = 14
console.log(newDate.getDay());//utput = 4 matlab wednesday jo current day he
console.log(newDate.getMonth());//abi current month march chal rha he to output me 2 aayega kyoki month 0 se javascript me suru hota he
console.log(newDate.getMonth()+1);//month me +1 kardenge to 0 ki jagh 1 se suru hoga month

newDate.toLocaleString('default', {//loacalString ko object me bhi difine kar sakte he
    weekday:"long",
    timeZone:''
})