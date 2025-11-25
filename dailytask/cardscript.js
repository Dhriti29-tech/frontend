const quizData = [
    {
        question: "1. What is your name?",
        options: ["Dhriti","Gauri","Jatin","Aman"],
        answer: 0        
    },
    {
        question: "2. What's your age?",
        options: ["19","20","21","18"],
        answer: 0        
    },
    {
        question: "3. Which course?",
        options: ["BTech","BPharma","BSc","BBA"],
        answer: 0        
    },
    {
        question: "4. Which state?",
        options: ["UP", "Maharastra", "Andhra Pradesh","MP"],
        answer: 1       
    },
    {
        question: "5. What is your fav food?",
        options: ["Burger", "Pizza", "Momos", "Home Food"],
        answer: 3      
    }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function load() {
    let q = quizData[index];   
    questionEl.textContent = q.question;

    optionsEl.innerHTML = "";  

    q.options.forEach((opt, i) => {
        let div = document.createElement("div");
        div.classList.add("option");
        div.textContent = opt;

        div.onclick = () => checkAnswer(div, i);

        optionsEl.appendChild(div);
    });
}

function checkAnswer(selectedDiv, selectedIndex) {

    let correct = quizData[index].answer;
    let all = document.querySelectorAll(".option");

    if (selectedIndex === correct) {
        selectedDiv.classList.add("correct");
        score++;
    } else {
        selectedDiv.classList.add("wrong");
        all[correct].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    index++;

    if (index < quizData.length) {
        load();
    } 
};

load();
