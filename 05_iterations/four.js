//itreet on object using forin loop
const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObject) {
   //console.log(myObject[key]);
   //console.log(`${key} shortcut is for ${myObject[key]}`);//es trike se ham for in loop ka use karke object ki key or value dond ko print karva sakte he
}

//agar ham forof loop ka use es trike se object ki key or value print karane par nhi hoga error aa jayega
// for (const key of myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


//printing array using forin loop
const programing = ["js", "rb", "py", "java", "cpp"]
for (const key in programing) {
  //console.log(key);//forin loop use karke array ki key printing
  //console.log(programing[key]);//es trike se value print kar sakte he
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// for (const key in map) {
//  console.log(key);//es trike se ham map ke upar iterat nhi kar sakte he 
//   }
