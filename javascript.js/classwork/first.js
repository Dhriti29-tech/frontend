//console.log("hello world");

//console.log(a);
//var a=10;     // only possible with var it gives value undefined.


/*function sum(b){
    console.log(a+b);
}
let a=10;
sum(10);*/

// let age=15;
// if(age>13&&age<19){
//     console.log("teenager");
// }else{
//     console.log("not a teenager");
// }


//console.log("jatin"&& 1||undefined ||null); // and find false value and or find true value.

// for(let i=4;i>0;i--){
//     let str="";
//     for(let j=0;j<i;j++){
//         str+="*";
//     }
//     console.log(str);
// }

// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// let arr=[1,2,3,4,5];
// for(let num of arr){
//     console.log(num);
// }

//Arrow function
// this keyword
// let user={
//     name:"jatin",
//     age:25,
//     greet:function(){
//         console.log("Hello, my name is " + this.name);
//     }
// };
// user.greet();


// const greeting = (name="Guest") => {
//     return "Hello, " + name + "!";
// };
// console.log(greeting("jatin"));
// console.log(greeting());

// // rest gives us array of arguments
// function sum(...numbers){
//     let total=0;
//     for(let num of numbers){
//         total+=num;
//     }
//     return total;
// }

//{
// make calculator using function expression
//create a func calculate
//take atleast 3 params -operation-"add","sub,"mutiply","divide"
//num1-number
//num2-number
//there can eve more params
//based on the operation perform the operation on num1 and num2
//return the result
//c1(calculate("sub",1,2,3,4,5)); //15

// let calculate=function(num1,num2,operator,...rest){
//     if(operator=='+'){
//         return num1+num2+rest.reduce((acc,cur)=>acc+cur,0);
//     }else if(operator=='-'){
//         return num1-num2-rest.reduce((acc,cur)=>acc-cur,0);
//     }else if(operator=='*'){
//         return num1*num2*rest.reduce((acc,cur)=>acc*cur,1);
//     }else if(operator=='/'){
//         return num1/num2/rest.reduce((acc,cur)=>acc/cur,1);
//     }else{
//         return "Invalid operator";
//     }
// };

// console.log(calculate(10,5,'-',2,3,4));
//}



// let result=num1+num2;
// if(operator=='add'){
//     let result =num1+num2;
//     for(let num of rest){
//         result+=num;
//     }
// }

 <div id="outer" style="padding: 40px; background: #f88">
      Outer
      <div id="inner" style="padding: 40px; background: #8f8">Inner</div>
    </div>
      document
        .getElementById("outer")
        .addEventListener("click", () => console.log("Outer bubble"));
      document
        .getElementById("inner")
        .addEventListener("click", () => console.log("Inner bubble"));
      document
        .getElementById("outer")
        .addEventListener("click", () => console.log("Outer capture"), true);