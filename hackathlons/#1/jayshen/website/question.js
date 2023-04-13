



const quizData = [
    {
        questionNumber: "Question No 1",
        question: "A feeder cable needs to be selected that feed a staircase pressurisation fan from a distribution board. Which cable type will you recommed among the below available types?",
        a: "5C x 10 mm2 PVC",
        b: "5C x 10 mm2 XLPE SWA",
        c: "5C x 10 mm2 FR200",
        d: "5C x 10 mm2 LSFH",
        correct: "d",
    },
    {
        questionNumber: "Question No 2",
        question: "Which of the following cable is of type SWA?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        questionNumber: "Question No 3",
        question: "What does XLPE stand for?",
        a: "Expanded Low Density Poly Ethene",
        b: "Extra low Pole Electrons",
        c: "Expansion Loop Pile Energy",
        d: "Explosion Low Peer Error",
        correct: "a",
    },
    {
        questionNumber: "Question No 4",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 5",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 6",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 7",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 8",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 9",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 10",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 11",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 12",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 13",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 14",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },

    {
        questionNumber: "Question No 15",
        question: "What does 600/1000 nomenclature on cable means ?",
        a: "Cable length",
        b: "Fabrication Batch",
        c: "Nominal Voltage",
        d: "Maximum Voltage ",
        correct: "b",
    },


];
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionNumber = document.getElementById('questionNumber')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
let currentQuiz = 0
let score = 0

/*quizRules()


function quizRules(){
  
                quiz.innerHTML = `
                    <h2>There are 30 multiple choice questions.</h2>
                    <h2>Answer all Questions.</h2>
                    <h2>You have 60 minutes to complete the Assessment.</h2>
                    <h2>Your time start when the start button is pressed.</h2>
                    <button onclick ="loadQuiz()">Start Assessment </button>
                `
               
    
};*/

loadQuiz()

function loadQuiz() {
    deselectAnswers()
 
    const currentQuizData = quizData[currentQuiz]
    questionNumber.innerText = currentQuizData.questionNumber
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 
function getSelected() {
    let answer
 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
 
    return answer
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
 
                <button onclick="location.reload()">Start Again</button>
            `
        }
    }
})

/* Timer*/
let button = document.getElementById('submit');
let timer = document.getElementById('counter');
let mins =10;

button.addEventListener('click',() => {
    let interval = setInterval(() => {
        if(mins == 0) {
            timer.innerText = mins;
            clearInterval(interval);
            return;

        }
        timer.innerText = mins + ' Minutes Remaining';
        mins--;
    },60000);
});