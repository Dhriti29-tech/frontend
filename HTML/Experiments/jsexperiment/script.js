// console.log("Hello, World!");

// alert("Welcome to JavaScript Experiments!");

// const userName = prompt("Please enter your name:");
// alert("Hello, " + userName + "! Welcome to JavaScript Experiments!");


// TASK-2


// let age=prompt("Enter your age:");
// // let result=age>18? "you can vote" : "you cannot vote";
// // alert(result);
// age>18
// ? document.write("<h1>you can vote</h1>")
// : document.write("<h1>you cannot vote</h1>")



// Arrays........

// const arr=[1,2,3,4,5];
// const lastvalue=arr.shift(0);
// console.log(arr);
// console.log("last value is: "+lastvalue);


// const arr=[1,3,4,5,8,9,5];
// const arr2=[6,7,8,9];
// const mergedarray=arr.concat(arr2);
// console.log(mergedarray);

// const index5=arr.indexOf(5);
// console.log("index of 5 is: "+index5);

// const lastindex=arr.lastIndexOf(5);
// console.log("last index of 5 is: "+lastindex);


// function calc(calculatofn, num1,num2){
//     console.log(calculatofn(num1,num2));
// }
// function sum(num1,num2){
//     return  num1+num2;
// }
// function sub(num1,num2){
//     return num1-num2;
// }
// calc(2,5);


const arr=[1,2,3,4,5,6,66,7,8,99];

// const divisible=function(num){
//     return num%33===0;
// }

// const ans=arr.find(divisible);

// const ans=arr.find(num => {
//     return num%33===0;
// });

// const indexAns=arr.findIndex(num => {
//     return num%33===0;
// });

// const Ans=arr.filter(num => {
//     return num%33===0;
// });

// console.log(Ans);


const newArr=arr.map((num,index)=>{
    return num*index;
});
console.log(newArr);