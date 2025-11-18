// let name="Alice";
// let name="Bob";
// console.log(name);

// const check=num=> num%2===1;

// const greet= (name)=>{return "Hello, " + name + "!";}
// console.log(greet("Alice"));

// const add=(a,b)=> a+b;
// console.log(add(5,3));

// const isEven=num=> num%2===0;
// console.log(isEven(4));


// const numbers=[10,15,20,25,30,35,40];
// const square=numbers.map(num => num*num);
// console.log(square);


// const name="Riya";
// const age=21;
// console.log(`hello , my name is ${name} and i am ${age} years old, and i was born in the year ${2024-age}.`);


// const user="aman";
// const points=120;
// console.log(`User ${user} has ${points} points.`);

// const person={
//     firstName:"Nitin",
//     lastName:"sharma",
//     age:21,
//     introduce: function(){
//         console.log(`Hi may name is ${this.firstName}${this.lastName} and i am ${this.age} year old`);
//     }
// }

// // agar mujhe ek object ki property ko kisi key se value nikalni hai to dot or bracket notation use karenge.

// console.log(person.firstName);
// console.log(person.lastName);
// person.introduce();

// const person = {
//     firstName: "Nitin",
//     lastName: "Sharma",
//     age: 21,
//     introduce: function() {
//         console.log(`Hi, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
//     }
// }

// console.log(person.firstName);   // Nitin
// console.log(person.lastName);    // Sharma
// person.introduce();              // Hi, my name is Nitin Sharma and I am 21 years old.


// const h=[1,23,34,40,54,6,7,8,9];
// const[,s,,,w]=h;
// console.log([s+" "+w]);

// const arr=[1,2,3,4,5,6,7];
// const[first,second,...rest]=arr;
// console.log(first);
// console.log(second);
// console.log(arr);


// const arr=[1,3,4,5,6,7,8,9];
// const arr2=[10,11,12,13];
// const result=[...arr,...arr2];
// console.log(result);\

// const name="Ritik";
// const age=21;

// const person={
//     name:name,
//     age:age,
// }

// console.log(person);

// console.log(20);
// console.log(30);
// console.log(40);
// setTimeout(()=>console.log("hello"),2000);
// console.log(50);


// let count=0;
// const timer=setInterval(()=>{
//     console.log("hello"+count);
//     count++;
//     if(count>5)clearInterval(timer);},1000);

let count=10;
const timer=setInterval(()=>{
    console.log(count);
    count--;
    if(count<0)clearInterval(timer);},1000);
setTimeout(()=>console.log("bomb"),12000);



