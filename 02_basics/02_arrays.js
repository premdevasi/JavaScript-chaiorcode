const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["suprman", "flash", "batman"]

//marvel_heros.push(dc_heros)//arrray kisiko bhi as a data le sakta he chahe vo boolean ho,String ho array array ko bhi as a data le leta he

// console.log(marvel_heros);//output = [ 'thor', 'Ironman', 'spiderman', [ 'suprman', 'flash', 'batman' ] ], to esne array ko as a data le liya he
// console.log(marvel_heros[3]);//index 3 nikalenge to dc_heros vala array hoga marvel_heros ne dc_heros ko as a element ki trag treatkar rha he kyoki usne dc_heros ko as a data leliya he 
// console.log(marvel_heros[3][1]);//output = flash;

// const all_heros = marvel_heros.concat(dc_heros);//concat ye array ko aaps me jod dega ye return karega nya array
// console.log(all_heros);//output =  [ 'thor', 'Ironman', 'spiderman', 'suprman', 'flash', 'batman' ]

const all_heros = [...marvel_heros, ...dc_heros];//spred karke kinte bhi arrays ko ek sath jod sakate he
console.log(all_heros);//output = [ 'thor', 'Ironman', 'spiderman', 'suprman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]//jab es trah ka array ho to usko ko hum flat ki help se sahi kar sakte he.

const real_another_array  = another_array.flat(Infinity)//flat me as a parameater ham likh sakte ki kitna defth jana he Infinity likhne se ham autometacly pta laga leg ki kitane defth me jana he
                                                                    
console.log(real_another_array);//[ 1, 2, 3, 4, 5,
                                    //     6, 7, 6, 7, 4,
                                    //     5
                                    //   ]



console.log(Array.isArray("Prem"));//isArray karke ham pata laga sakte he ki ye array he ya nhi, output = false
console.log(Array.from("Prem"));//from ka use karke ham String ya kisi bhi ko array me convert karsakte he, output = [ 'P', 'r', 'e', 'm' ]
console.log(Array.from({name:"prem"}));//object ko agar conver karange to [ 'P', 'r', 'e', 'm' ] par ek khali array bhi dega esko batana padega ki key ko alag array me rakhana he ya nhi

let score1 = 100;
let score2 = 200;
let score3 = 200;
console.log(Array.of(score1, score2, score3));//Array.of ka use karke ham varibles ko bhi convert kar sakte he Array me, output=[ 100, 200, 200 ]