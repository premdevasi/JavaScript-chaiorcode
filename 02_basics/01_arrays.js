//arrays 
let myArr  = [0, 1, 2, 3, 4, 5];
let myHeros = ["shaktiman", "Naagraj"]
const myArr2 = new Array(1,2,3,4)

//console.log(myArr[1]);//we can access array like this

//Arrays Methods
// myArr.push(6)//we can value in array like this
// myArr.push(7)
// console.log(myArr);

// myArr.pop();//array ki last value remove ho jayegi
// console.log(myArr);

// myArr.unshift(9);//array ke start me add hogi values
// console.log(myArr);

// myArr.shift();//ye pop ki trah hi remove krata he value aage se
// console.log(myArr);

// console.log(myArr.includes(9));//pata karna he 9 es array ke andar include he ya nhi.
// console.log(myArr.indexOf(9));//9 es array me index he ya nhi nhi he to output -1 aayega

// const newArr = myArr.join()//array bind hojhega or usko String me bhi convert kar dega
// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);

//slice, splice
console.log("A ", myArr);//output = A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)//slice me last vala count nhi hota he 3 likha he to 2 tak hi Jyega slice use karane par original array par koi bhi fark nhi padata he
console.log(myn1);//output = [ 1, 2 ]
console.log("B ", myArr);//output = B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)//splice melast vala count hota he or original array bhi manuplate ho jata he
console.log("c", myArr);//output = c [ 0, 4, 5 ] original array manuplate hogya 
console.log(myn2);//output = [ 1, 2, 3 ]