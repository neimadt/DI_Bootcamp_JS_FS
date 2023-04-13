const questions=[
    {
        question: "You have 2 cows, 2 birds, and 1 cat. How many legs do you have?",
        answers:[
            { text: "5 legs", correct:false},
            { text: "2 legs", correct:true},
            { text: "3 legs", correct:false},
            { text: "4 legs", correct:false},
        ],
    },

    {
        question: "Which one is heavier? A pound of rock or a pound of cotton?",
        answers:[
            { text: "A pound of rock", correct:false},
            { text: "A pound of cotton", correct:false},
            { text: "They both weigh the same", correct:true},
            { text: "None of them", correct:false},
        ] ,
    }, 
    {
        question: "Mr. Smith has 4 daughters. Each of his daughters has a brother. How many children does Mr. Smith have?",
        answers:[
            { text: "5", correct:true},
            { text: "8", correct:false},
            { text: "12", correct:false},
            { text: "7", correct:false},
        ] ,
    },   
    {
        question: "What number do you get when you multiply all of the numbers on a telephone's number pad?",
        answers:[
            { text: "1670", correct:false},
            { text: "450", correct:false},
            { text: "0", correct:true},
            { text: "358", correct:false},
        ] ,
    },   
    {
        question: "If you multiply this number by any other number, the answer will always be the same. What is the number?",
        answers:[
            { text: "0 (Zero)", correct:true},
            { text: "1 (One)", correct:false},
            { text: "2 (Two)", correct:false},
            { text: "10 (Ten)", correct:false},
        ] ,
    },  
    {
        question: "When I was six, my sister was half my age. Now I'm 70, how old is she?",
        answers:[
            { text: "My sister is 35 years old", correct:false},
            { text: "My sister is 40 years old ", correct:false},
            { text: "My sister is 67 years old", correct:true},
            { text: "None of them", correct:false},
        ],
    },   
    {
        question: "What 3 positive numbers give the same result when multiplied and added together?",
        answers:[
            { text: "2, 4 and 8", correct:false},
            { text: "1, 2 and 3", correct:true},
            { text: "4, 6 and 8", correct:false},
            { text: "2, 3 and 4", correct:false},
        ],
    },  
    {
        question: "I’m an odd number. But if you take away a letter from my name, I will become even. What number am I?",
        answers:[
            { text: "7", correct:true},
            { text: "5", correct:false},
            { text: "3", correct:false},
            { text: "9", correct:false},
        ],
    },   
    {
        question: "Continue the sequence: 2, 4, 8, 16, 32…",
        answers:[
            { text: "48", correct:false},
            { text: "68", correct:false},
            { text: "38", correct:false},
            { text: "64", correct:true,}
        ],
    },
    {
        question: "The number of jelly beans in a jar doubles every minute.If the jar is full of jelly beans in an hour, when was it half full?",
        answers:[
            { text: "At 59 minutes", correct:true},
            { text: "At 30 minutes", correct:false},
            { text: "At 45 minutes", correct:false},
            { text: "At 35 minutes", correct:false},
        ],
    }   
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;


startQuizz(); 
function startQuizz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ".  "+ currentQuestion.question;
    
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
   
function showScore() {
    resetState();
    questionElement.innerHTML=`Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuizz(); 
    }
})


const progressBar = document.getElementById("myBar");
const progressIncrement = 11;
const numClicksNeeded = 11;

let numClicks = 0;

nextButton.addEventListener("click", function() {
  numClicks++;
  progressBar.style.width = `${numClicks * progressIncrement}%`;
  if (numClicks === numClicksNeeded) {
    popUp();
    numClicks = 0;
    progressBar.style.width = `${numClicks}%`;
  }
});

function popUp() {
   
  alert("Let's try again!");
}

