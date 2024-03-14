const score = 400;
console.log(score)
const balance = new Number(100);
console.log(balance);

 console.log(balance.toString().length)
 console.log(balance.toFixed(2))

//const otherNumber = 23.8966
const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3));

const hunders = 1000000;
console.log(hunders.toLocaleString(''));//output = 1,000,000 ye us stanted ke hisab se he
console.log(hunders.toLocaleString('en-IN'));//en-IN use karne se India number ke hisab se coma lagegi 

/****************************** Math ******************************/
console.log(Math);
console.log(Math.abs(-4));//we can convert nagrtive value to positive value using abs mehtod,output-4
console.log(Math.round(4.6));//round matlab me agar decimal value nhi chiye to ham round ka use kar sakte he,output-4
console.log(Math.ceil(4.2))//math.celi(esko siling bolte he)ab top ki value aayegi 4.2 he 5 five hoga output
console.log(Math.floor(4.6));//esme niche vali value lega matlab agar 4.6 he to output 4 aayega
console.log(Math.min(4, 5 ,1 ,7 ));// agar pta karna he arry ke andar sabse loaset value konsi he,output=1
console.log(Math.max(4, 5 ,1 ,7 ));//maximum value in array,output=7

console.log(Math.random());//math.random ka use karne par hmesa value 0 or 1 ke bich me aati he ex-0.5451548515,0.58946254 esi value aayegi
 console.log(Math.random()*10);//Math.random ko *10 karange to ek value sift ho jayegi point ke left side me EX-5.45666262444,8.26232626,3.5154456
 console.log(Math.random()*10+1);//+1 esliye kiya kyoki 0.0234 decimal ke bad bhi 0 aa sakta he to +1 karne se decimal ke bad kabhi bhi 0 nhi aayega
 console.log((Math.random()*10)+1)//ye shi trika he +1 karne ka
 console.log(Math.floor(Math.random()*10)+1)//math.floor ka use karte taki value lowear aaye math.floor ko upar explan kiya he EX-4.656265652 hoga to us 4 me convwrt kar dega


const min = 10;
const max = 20; 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//esko pura samje agar math.ramdom*10 karte to ek value sift ho jati he decimal ke left side ab hamne value to shift car di ab value 0 bhi to aa sakti he to usko avoid karne ke liye +1 kate he ab math.floor karne se lowest value aa jayegi or decimal hat jayega, ab hame kabhi kabhi min or max value bhi di hoti he to usko karne ke liye math.ramdon*(max-min) karne se ek averge value mil jayegi +1 jod  denge taki 0 vala case na ho fir math.floor kardenge ab kya hoga ki value minmum 10 to ususe kam value bhi aa jayegi usko avoid karne ke liye ham pur ko + min kar denge Math.floor(Math.random() * (max - min + 1)) + min