let name = " prem "
let repoCount = " 50 "
//console.log(name+repoCount+" value ");
// console.log(`${name}${repoCount} har har mhadev`);

const gameName = new String("prem-hc-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4);
//console.log(newString);

const anotherString = gameName.slice(-4, 4)
//console.log(anotherString);

const newStringOne = "   Prem    ";
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://prem.com/prem%20devasi"
 console.log(url.replace('%20', '-'));

 console.log(url.includes('prem'));

 console.log(gameName.split('-'));