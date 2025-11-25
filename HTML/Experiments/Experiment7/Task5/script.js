let input=document.getElementById("text-input");
let addbtn=document.getElementById("add-btn");
let list=document.getElementById("task-list");

addbtn.addEventListener("click",function(){
     let text=input.value.trim();                   
     if(text==""){
       return;
     } 
     let li=document.createElement("li");
     li.textContent=text;
     
let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "10px";

    editBtn.onclick = function () {
        let newText = prompt("Edit task:", text);

        if (newText && newText.trim() !== "") {
            li.firstChild.textContent = newText;
        }
    };

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);

    input.value = "";
})