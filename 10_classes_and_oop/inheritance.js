class User {
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{
    constructor(username, email, passworld){
        super(username)
       this.email = email;
       this.passworld = passworld;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.addCourse()

const masalaChai = new User("masalaChai")

//masalaChai.addCourse()
//console.log(chai == masalaChai);//output = false
//console.log(chai == Teacher);//output = false
//console.log(chai instanceof Teacher);//output = true
console.log(chai instanceof User);//output = true

