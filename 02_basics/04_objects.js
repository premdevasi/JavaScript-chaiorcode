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


//console.log(tinderUser);

//console.log(Object.keys(tinderUser));//keys sari array ke andar aajayegi, output = [ 'id', 'name', 'isLoggedIn' ], jis pe loop lag sakte he
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//es property se ham key he ya nhi pta kar sakte he output true or false me aayega



const cours={
  coursName:"jsinhindi",
  price:"999",
  coursIns:"hitesh"
}

//de-structure of object
const {coursIns} = cours;//es synatx ko use karke bar bar cours.coursIns nhi likhana padega
const {coursIns: instructor} = cours;//agar aap ko lagta he ki value badi he aap apne hisab se name de sakte he
//console.log(coursIns);//output hitesh aajayega cours.coursIns likhane ki jarurat nhi he
console.log(instructor);//output = instructor

//recat me de-structure es trike se kiya jata he
const navbar =({company})  =>{

}
navbar(company = "prem")


//Apies
// {
// "Name":"hitesh",
// "coursName":"jsInHindi",
// "Price":"free"
// }

//es trike se apies call aati he, yi api json formet me he
// {
//   "login": "hiteshchoudhary",
//   "id": 11613311,
//   "node_id": "MDQ6VXNlcjExNjEzMzEx",
//   "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/hiteshchoudhary",
//   "html_url": "https://github.com/hiteshchoudhary",
//   "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
//   "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
//   "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
//   "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
//   "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
//   "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Hitesh Choudhary",
//   "company": null,
//   "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
//   "location": "India",
//   "email": null,
//   "hireable": null,
//   "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
//   "twitter_username": "hiteshdotcom",
//   "public_repos": 82,
//   "public_gists": 4,
//   "followers": 17686,
//   "following": 0,
//   "created_at": "2015-03-23T13:03:25Z",
//   "updated_at": "2024-02-12T12:11:50Z"
// }

//Arays ki form me apes aati he
[
  {},
  {},
  {}
]
