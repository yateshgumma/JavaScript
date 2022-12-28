let user = {
    name:"John",
    age:30,
};

user.sayHi = function() {
    console.log(this.name)
};

console.log(user);
console.log(user.sayHi());

