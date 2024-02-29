// let isEven = (ele)=>{
//     return ele % 2 == 0;
// }

// console.log([2,4,6,8,11].every(isEven));

// const callback = (n)=>{
//     return n**2
// }

// const cube = (callback,n)=>{
//     return callback(n) * n;
// }
// // 2:29:40
// console.log(cube(callback,3));

// important ->setTimeout
// function course(){
//     console.log("welcome to the course");
// }

// let id = setInterval(() => {
//     console.log(Date());
// }, 1000);


// setTimeout(() => {
//     clearTimeout(id);
// }, 5000);

// console.log(id);

// let arr = [1,2,4,5,6,7,8];

// function display(ele){
//     console.log(ele);
// }
// arr.forEach(display);

// map -> iterating the elements and modify the elements

// let nums = [1,2,3,4,5,6];

// let res = nums.map(function(ele){
//     return ele > 2;
// });

// console.log(nums);
// console.log(res);


// let names = ["sumukha","sureban"];

// uNames = names.map((ele)=>ele.toUpperCase());
// console.log(uNames);

// filter -> it will return a new array

// let country = ["Bharat","USA","Russia","Germany"];

// let nums = [1,2,3,4,5,6];
// let res = nums.filter((ele)=>ele>2);
// console.log(res);

// reduce 

let nums = [2,2,3,4,5,6];
let res = nums.reduce((acc,curr)=>acc + curr);
console.log(res);