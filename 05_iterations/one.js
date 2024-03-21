//for
for(let index=1;index<=10;index++){
    if(index==5){
        //console.log("5 is best number");
    }
   // console.log(index);
}

//neted loop
for (let i = 1; i <= 10; i++) {
   // console.log(`outer loop value:  ${i}`);
   for (let j = 1; j <= 10; j++) {
  // console.log(`inner loop value  ${j} and inner loop ${i}`);
    //console.log(i + ' * ' + j + ' =' + i*j);//table
   }
    
}


// let myArray = ["flash", "batman", "superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     //console.log(element);
// }


// //breck and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         break
//     }
//     console.log(`Value of i is:  ${index}`);
    
    
// }



//breck and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){//5 gaayb ho jayega baki print ho jayenga
        continue
    }
    console.log(`Value of i is:  ${index}`);
    
    
}