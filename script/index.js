let user = {
    name:"John",
    age:30,
};
let clone={};
for(let key in user){
    clone[key] = user[key];
}
let permissions1 = {canView:true,};
let permissions2 = {canEdit:true,};
Object.assign(user,permissions1,permissions2);
let newClone = Object.assign({},user);
clone.name = "Pete";
console.log(user);
console.log(clone);
console.log(newClone);

let newCard = {
    header:"CARDS",
    sizes:{
        height:182,
        width:50,
    }
};

let newClone2 = structuredClone(newCard);
console.log(newClone2);