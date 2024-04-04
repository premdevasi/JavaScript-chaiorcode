class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

     get email(){
        return this._email.toUpperCase();
     }

     set email(value){
        this._email = value;
     }


    get password(){
   return `${this._password} hitesh`
    }

    set password(value){
     this._password = value;  
    }

}
const hitesh = new User("prem@ai", "abc")
console.log(hitesh.email);





//jitni bhi proartyes bante unke name se automaticallly getter and setter as a method  ban jate he
//getter difined kar rhe ho to setter bhi difined karna hi padega
//getter simply get karta he matlab agar class ke bar se koi value get karna chahte ho esliye get hota he
//koi value set karna chahte class ke andhar to setter hota he

//ye error tabhi aata jab  constructor bhi value set kar raha ha or setter bhi value ko set kar rha he ye error aata he - error = RangeError: Maximum call stack size exceeded


//set matlab ja bhi dataBase me data ham set karnge to vah set se hoga 
//get matlab agar koi bhi value le rha ya acces karne ki kosis kar rha he use ham kis rup me value de vo get ke jariye bataya jata he

//jis bhi proparty ka getter ya setter bana chahte he proraty  or getter setter ka name same rakhana padega