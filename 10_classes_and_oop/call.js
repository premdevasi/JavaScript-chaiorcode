function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
};

function creatUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const chai = new creatUser("chai", "chai@fb.com", "123");
console.log(chai);
