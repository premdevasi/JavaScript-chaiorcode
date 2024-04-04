//we can create new promise like this
const promiseOne = new Promise( function(resolve, reject){
    //DO an async task 
    //DN calls, cryptography, networkCall
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then( function(){
    console.log("Promise consumed");
})



//we can also create promise without variable
new Promise( function(resolve, reject){
    setTimeout( function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//resolve parameater should be in promise consumed
const promiseThree = new Promise( function(resolve, reject){
    setTimeout( function(){
      resolve({userNmae:"chai", email:"chai@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
console.log(user);
})



//promise hell,promise chaining
const promiseFour = new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = false
        if(!error){
          resolve({userNmae:"prem", password:"prem123"}) 
        }else{
            reject('ERROR: Somthing went wrong')
        }
    }, 1000)
})


//jo hamne return kiya he vo ab niche vake then me jayega
promiseFour.then((user)=>{
console.log(user);
return user.userNmae
}).then( (userNmae)=>{
console.log(userNmae);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or reject"))




//handle promise using async and await
const promiseFive = new Promise( function(resolve,reject){
    setTimeout( function(){
        let error = true
        if(!error){
          resolve({userNmae:"javaScript", password:"java"}) 
        }else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
});


async function consumePromiseFive(){
  try {
    const response =   await promiseFive
  console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()

//sending request and handle respons
// async function getAllUser(){
//    try {
//     const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E: ", error);
//    }
// }

// getAllUser()


//sending request using then and catch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (respons)=>{
// return respons.json()
// })
// .then( (data)=>{
//     console.log(data);
// })
// .catch( (error)=> console.log(error))




fetch('https://api.github.com/users/premdevasi')
.then( (respons)=>{
return respons.json()
})
.then( (data)=>{
    console.log(data);
})
.catch( (error)=> console.log(error))