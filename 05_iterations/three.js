//for of
//["", "", ""]
//[{},{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {//jaruri nhi he ki sirph ye object ke liye use hota he aap kisi par bhi use kar sakte he 
    //console.log(num);
}


const greetings = "Hello world!"
for (const greet of greetings) {//ham forof ko string ke liye bhi use kar sakte he
   //console.log(`Each char is  ${greet}`);
}


//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")//ye unique value ke liye jane jate he ya par ham phir se india  ko add kardenge par print nhi hoga
//console.log(map);

//loop on Maps
for (const [key, value] of map) {
    //console.log(key, ':-', value);//key or value dono hi print karni he es trike se kar sakte he
}


//for of loop on object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {//es trike syntex se object par iterat nhi kar sakte he
    console.log(key, ':-', value);
}