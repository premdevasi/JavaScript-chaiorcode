const clock = document.getElementById('clock')

setInterval( function(){
//     let date = new Date();
//  clock.innerHTML = date.toLocaleTimeString();
let date = new Date();
let options = { hour12: true };
clock.innerHTML = date.toLocaleTimeString([], options);
},1000)