//singleton = constructors se object bnega to hmesa singleton banega
Object.create//es trike ko constructors method trika kahte he object creat karne ka esme hi singleton banta he


//objets literals

const mySym = Symbol("key1")//simble ko es trike se diclear kiya jata he

const jsUser = {
    name:"prem",
    "full name":"prem devasi",//es value ko ham jsuser.full name se access nhi kar sakte he esliye esko jsuser["full name"] se access karna padega
    //mySym:"key1",//es trike se simbole ko use karne par eska datatype symbol nhi blki String hoga
    [mySym]:"key1",//es trike se likhne par symbole use hoga
    age:18,
    location:"barmer",
    email:"prem@gmail.com",
    isLoggedIn: false,
    lastLoggenDays: ["Monday", "thuesday"]
}
//console.log(jsUser.email)
//console.log(jsUser["email"])//ese bhi object ko access kar sakte he, uper kha tha ki intarly key String("") ki trah difin kiya jata he
//object ko key and value dono trike se assecc kar sakte he left side me key and right me value, by defalt key bhi "name" string ki trah hi store hoti he
//console.log(typeof jsUser.mySym);//output = strng hoga
//console.log(typeof jsUser[mySym]);//es trike se difine krna he symbol ko

jsUser.email = "prme@goole.com"
//Object.freeze(jsUser)//es trike se ham object ko freeze kar sakte he eske bad ese ham change nhi kar sakte he
//jsUser.name  = "rahul"//ab name change nhi ho sakta kyoki jsUser ko freeze kar diya he.
//console.log(jsUser.name);//output = prem hoga koyoki jsUser ko freeze kar diya he

//add function in object
jsUser.greeting  = function(){
    console.log("Hello js user");
}
//console.log(jsUser.greeting);//output = [Function (anonymous)] kyoki method to greeting() ese use karna pedega
console.log(jsUser.greeting());//output= Hello js user


jsUser.greetingTwo  = function(){
    console.log(`Hello js user, ${this.name}`);//this ka use karke ham object ke andar ki proparty ko access kar sakte he
}
console.log(jsUser.greetingTwo());