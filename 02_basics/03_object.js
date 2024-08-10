// object literals
const mySym= Symbol("key1")
const user= {
    name:"harish",
    [mySym]:"key1",
    age:24, 
    location:"jaipur",
    email:"harish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","sunday"]
}
// console.log(user)
// console.log(user[mySym])
// console.log(typeof user[mySym])

// user.email="rawat@gmail.com"
// console.log(user.email)

user.greeting = function(){
    console.log("hello user");
}
console.log(user.greeting());

user.greeting2 = function(){
    console.log(`hello user ${this.name}`);
}
console.log(user.greeting2());

