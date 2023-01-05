function user(name){
    this.name=name;
    this.isAdmin=false;
};
let user1 = new user("user 1");
let user2 = new user("user 2");
console.log(user1.name);
console.log(user2.name);

function newUser(){
    console.log(new.target);
};
newUser();
new newUser();