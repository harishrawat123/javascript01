// let myDate = new Date();
// console.log(myDate);
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 9);
// console.log(myCreatedDate.toString());
let myCreatedDate = new Date(2024, 0, 9, 5,14);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp.getTime);


