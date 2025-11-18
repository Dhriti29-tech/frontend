// console.log("hello");

// const mainHeading=document.getElementById("title");

// const triggerButton=document.getElementById("btn");

// triggerButton.onclick=()=>{
//     mainHeading.textContent="Hello from js";
// }

// const list=document.getElementsByClassName("list-item");
// console.log(list);
// item(0).textcontent=("hello hello");


// const alllist = document.querySelector(".list-item");
// console.log(alllist);

const chess= document.querySelector(".chessboard");

// const oddrow=  `<div class="square"></div>`.repeat(8);
// const evenrow=`<div class="square-rev"></div>`.repeat(8);


// const completeHtml=`${oddrow} ${evenrow}`.repeat(4);

// chess.innerHTML=completeHtml;

const chessboard = document.querySelector(".chessboard");

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");
        if (row % 2 === 0) {
            square.classList.add("square");
        } else {
            square.classList.add("square-rev");
        }

        chessboard.appendChild(square);
    }
}
