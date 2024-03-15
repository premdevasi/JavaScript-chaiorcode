//diclarying using consturcotar and singletone consepat
// const  tinderUser = new Object()
// console.log(tinderUser);//output = {} 

  const tinderUser = {};
// console.log(tinderUser);//output = {}, output dono me same hi aayega kese bhi diclary kro

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);//output = { id: '123abc', name: 'sammy', isLoggedIn: false }

const regularUser = {
    email:"some@gmail.com",
    fullname:{//Nasted object ko bhi creat kar sakte he
          userFullName:{
             firstName:"prem",
             lastName:"devasi"
          }
    }
}

//console.log(regularUser.fullname.userFullName.fullname);//es trike se Nasted loop ko access kar sakte he
//console.log(regularUser.fullname?.userFullName.fullname);//fullName? questionmark symbole ka use karke agar fullName nhi huaa to nesed object me aage bad jayenge


const obj1 = {1: "a", 2: "b"};//number ko bhi as a key use kar sakte he
const obj2 = {3: "c", 4: "d"};

//const obj3 = {obj1, obj2};es trah se bind karne par output = { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } } jo ki right nhi he ek andar ek
//console.log(obj3);
//const obj3 = Object.assign(obj1, obj2)//es trah se objects ko bind kar sakte he
//const obj3 = Object.assign({}, obj1, obj2)//{} use karne se sare object es {} ke andar bind honge.
//const obje3 = Object.assign(...obj1, ...obj2)//(...) ko Spred kha jata he eski help se bhi ham objects bind(jodna) kar sakte he.
//console.log(obj3);//output = { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [//daraBase se value es trah aati he, jaya tar ArrayOfObject(user =[]) ki form me aata he
  {
    id: 1,
    email: "h@gmail.com"
  },
  {
    id: 1,
    email: "h@gmail.com"
  },

] 

users[1].email//es trike se ham esko access kar sakte he


console.log(tinderUser);

console.log(Object.keys(tinderUser));//keys sari array ke andar aajayegi, output = [ 'id', 'name', 'isLoggedIn' ], jis pe loop lag sakte he
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//es property se ham key he ya nhi pta kar sakte he output true or false me aayega
