const images = ["img1.png","img2.png","img3.png"];

let index=0;
const slide=document.getElementById("im");
const nextBtn=document.getElementById("nextBtn");
const prevBtn=document.getElementById("prevBtn");

function showImage(){
    slide.src=images[index];
}

nextBtn.addEventListener("click",()=>{
    index=(index+1)%images.length;
    showImage();
});

prevBtn.addEventListener("click",()=>{
    index=(index-1+images.length)%images.length;
    showImage();
});

// let auto = setInterval(() => {
//   index = (index + 1) % images.length;
//   showImage();
// }, 3000);


