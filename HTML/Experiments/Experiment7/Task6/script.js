let joke=document.getElementById("joke");
let punch=document.getElementById("punchline");
let nextBtn=document.getElementById("btn");

nextBtn.addEventListener("click",async()=>{
    try{
        const res= await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        joke.innerText=data.setup;
        punch.innerText=data.punchline;
    }
    catch(err){
    console.log(err)
    }

})

//Array method 
// object method 

