// function add(a,b){
//     return a+b;
// }

// console .log(add(5,6));

// const greet= function(){
//     console.log("hello");
// };
// greet();

// const add = (a,b)=>a+b;
// console.log(add(4,3));

// function greet(name="guest"){
//     console.log("hello"+name);
// }

// greet();

// function sum(...numbers){
//     return numbers.reduce((total,num)=> total+num,0);
// }
// console.log(sum(1,2,3,4));


function factorial(n){
    if(n===0)return 1;
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));


// call back function 

function fetchdata(callback){
    setTimeout(()=>{
        callback("data received");
    },1000);
}

fetchdata((msg)=>console.log(msg));