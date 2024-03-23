const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)//ya pe ye 0 initialValue he
// console.log(myTotal);

//Reduce in arrow function
const myTotal = myNums.reduce( (acc, currVal) => acc+currVal,  0)//ya pe ye 0 initialValue he
console.log(myTotal);


//real life use of Reduce
const shoppingCart = [
{
    itemName:"js course",
    price:2999
},
{
    itemName:"python course",
    price:999
},
{
    itemName:"mobile dev course",
    price:5999
},
{
    itemName:"data scince course",
    price:12999
}
]

const priceToPay = shoppingCart.reduce( (acc, item)=> acc + item.price, 0);
console.log(priceToPay);//output = 22996