const score=200;
console.log(score);
const balance=new Number(100);
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2));

const otherNumber = 123.47
console.log(otherNumber.toPrecision(3))

const hundred=10000000
console.log(hundred.toLocaleString('en-IN'));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min =20;
const max =30;
console.log(Math.floor(Math.random()*(max-min+1) +min));
