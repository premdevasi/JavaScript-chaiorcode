//Apply, call, & bind in js

// let userDetails = {
//     name:"Prem Devasi",
//     Age:19,
//     Designation:"Software Engineer",

//     printDetails:function(){
//         console.log(this.name);
//     }

// }
// userDetails.printDetails();

// let userDetails2 = {
//     name:"Naresh Devasi",
//     Age:25,
//     Designation:"Software Engineer",
// }

// userDetails.printDetails.call(userDetails2);


//agar function object se bar ho to 
// let userDetails = {
//     name:"Prem Devasi",
//     Age:19,
//     Designation:"Software Engineer",
// }
// let printDetails = function(){
//     console.log(this);
// }



// printDetails.call(userDetails);


// let userDetails2 = {
//     name:"Naresh Devasi",
//     Age:25,
//     Designation:"Software Engineer",
// }

// printDetails.call(userDetails2);



//apply me arguments ko arrayList me pass kar sakte he
// let userDetails = {
//     name:"Prem Devasi",
//     Age:19,
//     Designation:"Software Engineer",
// }
// let printDetails = function(state, countary){
//     console.log(this.name+" "+state+" "+countary);
// }



// printDetails.apply(userDetails, ["Rajsthan", "Bhart"]);


// let userDetails2 = {
//     name:"Naresh Devasi",
//     Age:25,
//     Designation:"Software Engineer",
// }

// printDetails.apply(userDetails2,["Rajsthan", "Bhart"]);





//Bind
let userDetails = {
    name:"Prem Devasi",
    Age:19,
    Designation:"Software Engineer",
}
let printDetails = function(state, countary){
    console.log(this.name+" "+state+" "+countary);
}



printDetails.apply(userDetails, ["Rajsthan", "Bhart"]);


let userDetails2 = {
    name:"Naresh Devasi",
    Age:25,
    Designation:"Software Engineer",
}

printDetails.apply(userDetails2,["Rajsthan", "Bhart"]);


let newFun =   printDetails.bind(userDetails2,["Rajsthan", "Bhart"]);
newFun()









//notes
//thsi key word use for self refrancing 