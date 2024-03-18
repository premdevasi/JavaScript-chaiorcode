const user ={
      userName:"prem",
      price:999,

      welcomeMessage: function(){
           console.log(`${this.userName}, welcome to website`);
           console.log(this);//crrunt contex ki bat karta he this current contex(current value)
      }
}

// user.welcomeMessage();
// user.userName  = "sam";//ya pe hamne contex(value) change kar diya to ab usernamne me sam aayega
// user.welcomeMessage();
// console.log(this);//node invarment me this ki value {} hogi

// function chai(){
//        let userName = "prem"
//       //console.log(this);//function ke andar this ki value me global value or bot sari values aayegi
//       console.log(this.userName);//output = undefined 
// }
// chai();

// const chai = function(){//es trike se function ko defined karne par bhi this.userNa= undefined aayega
//        let userName = "prem"
//       console.log(this.userName);//output = undefined 
// }
// chai();


//es trike se arrow function ko initialize kar sakte he
// const chai = ()=>{
//       let userName = "prem"
//       // console.log(this.userName);//output = undefined 
//       console.log(this);//output = {}
// }
// chai();

// const addTwo = (num1, num2) =>{
//      return  num1+num2;
// }

//this is noraml arrow function syntex
// const addTwo = (num1, num2) =>{
//      return  num1+num2;
// }
// console.log(addTwo(3, 4))

//this syntex is implicit errow function
const addTwo = (num1, num2) =>  num1+num2;//implicit function me implicit man leta he ki aapko return likhane ki jarurat nhi he vo khud return kar dega or ek line ka code hota he
//const addTwo = (num1, num2) =>  (num1+num2);//you can also right like this also
//agar curly bracket ke andar he code to return likhana padega
//const addTwo = (num1, num2) =>  ({userNmae:"prem"});//we can also right object in implicit function
 console.log(addTwo(3, 4))