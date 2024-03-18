//syntax of IIF function
(function chai(){
    console.log("DB CONNECTED");
})();//ya par hame semiclone lagani hi padegi kyoki IIFE excute to gaya  par iskko pata nhi he ki contex rokana kha he

//IFFE in arrow function 
// ( ()=>{
//     console.log(`DB CONNECTED TWO`);
// })()//uper (;) lagya he uske bad hi chlega agar semiclone nhi lagaya to ye function nhi chlega

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("prem")//outpit = DB CONNECTED TWO prem


