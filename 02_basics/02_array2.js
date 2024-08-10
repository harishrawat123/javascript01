const arr=[1,2,3,4,6]
const arr2=[7,8,9,6,5]
// arr.push(arr2)
// console.log(arr)
// const new_arr = arr.concat(arr2)
// console.log(new_arr)

const new_arr=[...arr, ...arr2]
console.log(new_arr)

const another_arr=[1,2,3,[5,5,6],[9],8, 9, [10,11]]
const new_another_arr=another_arr.flat(Infinity)
console.log(new_another_arr);


console.log(Array.isArray("harish"))
console.log(Array.isArray([1,2,3]))

console.log(Array.from({name: "harish"}))

const score1=200
const score2=300
const score3=500

console.log(Array.of(score1, score2, score3))



