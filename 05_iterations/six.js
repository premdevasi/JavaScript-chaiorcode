 const coding = ["js", "ruby", "java", "pythoin", "cpp"]

  const values =  coding.forEach( (item)=>{
//    //console.log(item);
    return item
  })

 // console.log(values);//foEach es trike se variable me store karke return nhi kar sakte he

 //filter ka use karke ham value ko return kar skate he
   const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums =  myNums.filter( (num) => num>4 )
// console.log(newNums);

//   const newNums =  myNums.filter( (num) =>{
//    return num>4
//   } )
 //console.log(newNums);



 //agar hame forEach ka use karke value ko return karna he es trike se kar sakte he
const newNums = []
myNums.forEach( (num) =>{
    if(num>4){
      return  newNums.push(num)
    }
} )
//console.log(newNums);


//es trike ka data aata he data base se
const books = [
    {
        titel:'Book One', genre:'Fiction', publish:1981, edition:2004
    },
    {
        titel:'Book Two', genre:'Non-Fiction', publish:1992, edition:2008
    },
    {
        titel:'Book Three', genre:'History', publish:1999, edition:2007
    },
    {
        titel:'Book Four', genre:'Non-Fiction', publish:1989, edition:2010
    },
    {
        titel:'Book Five', genre:'Science', publish:2009, edition:2014
    },
    {
        titel:'Book Six', genre:'Fiction', publish:1987, edition:1996
    },
    {
        titel:'Book Eight', genre:'History', publish:2011, edition:2016 
    },
    {
        titel:'Book Nine', genre:'Non-Fiction', publish:1981, edition:1989
    },
]

let userBooks  = books.filter( (bk)=> bk.genre === 'History')
  userBooks  = books.filter( (bk)=>{
  return   bk.publish >= 1995 && bk.genre === 'History'
  })
console.log(userBooks);