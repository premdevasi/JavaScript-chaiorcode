const myArr = [];
 //%DebugPrint(myArr);
 //% vale jitne bhi method hote he ye by defalt js me nhi hote he ye Debuing ke liye hote ye v8 ki Debuing kim jati he 

 const arrTow = [1,2,3,4,5]
 //ye array PACKED_SMI_ELEMENTS he isliye he koyoki es array ke andhar koi hole nhi he
 
 arrTow.push(6.0);
 //ab ye PACKED_DOUBLE_ELEMENTS ho chuka he kyoki eske andhar double value aa chuki he

arrTow.push('7');
//PACKED_ELEMENTS

arrTow[10] = 11;
//HOLEY_ELEMENTS ban chuka he kyoki eske andhar multipal types inkuled he eske andhar number,double,string or gap bhi he to eska optimise alga trike se hoga


console.log(arrTow);
console.log(arrTow.length);
console.log(arrTow[9]);
//[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
//11
//undefined
//array me jo empty items aaye esi ne hamare array ko kam optimise banaya he or esine hi holes intertues kiya he


//  const arrTow3 = [1,2,,4,5]
 //es array ke andhar hole kyoki index 2 par value nhi he


 //agar hole he to js ko itni checking krni padegi or ye bohut expensive pad jata he itni bar hasOwenProperty ko run kiya he to optimistion ki to band baj jayegi es liye jayadha tar recomntndtd kiya jata he ki arrays me holes nhi hone chahiye
 //bound check
 //hasOwenProperty(arrTwo, 10)
 //hasOwenProperty(arrTwo.prototype, 10)
 //hasOwenProperty(object.prototype, 10)

 //holes are very expensive in js

 const  arrThree = [1,2,3,4,5];
 console.log(arrThree[2]);

 //continus arrays optimise ranke 
 //SMI > DOUBLE > PACKED

 //Holey arrays optimise ranke 
 //H_SMI > H_DOUBLE > H_PACKED


 const arrFour = new Array[3];
 //just 3 holes. HOLEY_SMI_ELEMENTS
 arrFour[0] = '1' //HOLEY_ELEMENTS
 arrFour[1] = '2' //HOLEY_ELEMENTS
 arrFour[2] = '3' //HOLEY_ELEMENTS 

 //this approch is battwer then upare apporch
 const arrFive = [];
 arrFive.push('1')//PACKED_ELEMENTS
 arrFive.push('2')//PACKED_ELEMENTS
 arrFive.push('3')//PACKED_ELEMENTS


 const arrSix = [1,2,3,4,5];
 arrSix.push(NaN);


