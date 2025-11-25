function delay(message) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(message), 1000);
        });
    }
   
    function highlight(li) {
        li.style.fontWeight = "bold";          
        setTimeout(() => {
            li.style.fontWeight = "normal";    
        }, 1000);
    }

    async function runSteps() {
        const ul = document.getElementById("steps");

     
        let li1 = document.createElement("li");
        li1.textContent = "Running Step 1...";
        ul.appendChild(li1);
        highlight(li1);

        const step1 = await delay("Step 1 done");
        li1.textContent = step1;

        
        let li2 = document.createElement("li");
        li2.textContent = "Running Step 2...";
        ul.appendChild(li2);
        highlight(li2);

        const step2 = await delay("Step 2 done");
        li2.textContent = step2;

      
        let li3 = document.createElement("li");
        li3.textContent = "Running Step 3...";
        ul.appendChild(li3);
        highlight(li3);

        const step3 = await delay("Step 3 done");
        li3.textContent = step3;
    }

    runSteps();