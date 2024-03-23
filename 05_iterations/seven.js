 const myNumers = [1,2,3,4,5,6,7,8,9,10]

//const newNums =  myNumers.map( (num)=> num+10)//map value ko automatically return kar deta he
//const newNums =  myNumers.map( (num)=> { return num+10})//agar value ko breckats{} dalne ke badh me hame return kkarna hi padega. 
//console.log(newNums);

//add number using forEach loop
const addNum = myNumers.forEach( (num)=> {
     return num+10
})
//console.log(addNum);

//chaning- ek sath bahut sare method ko use kar sakte he
//const newNums = myNumers.map().map().filter()
const newNums = myNumers
                .map( (num) => num*10)
                .map( (num)=>  num+1)//jab bhi chaning hoti first chane par jo opreation lalega vo second chane me paas hojayega. 
                .filter( (num) => num >= 40)
  
        console.log(newNums);