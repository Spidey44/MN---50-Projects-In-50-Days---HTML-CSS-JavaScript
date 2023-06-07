// array of data qith Question, answer and correct
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
// list of answers
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// let can change value. currentQuiz 0 the first question, 
//currentQuiz 1 the second... question
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    // get current quiz data, set array with index currentQuiz set to 0, 
    const currentQuizData = quizData[currentQuiz]

    // get question / answers element inner text set to currentQuiz data
    // one of the object in array. replace with question value
    questionEl.innerText = currentQuizData.question
    // replace with answer A, B, C D values
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    // node list of answers element
    let answer

    // loop through them set to unchecked (false)
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

// click event
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log("selected", answer)

    // which one answer is checked?
    // then compare with correct answer
    if (answer) {
        // check if the match value = correct => increment score
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        // increment next quiz
        currentQuiz++

        // if current quiz is less than the length of array
        if (currentQuiz < quizData.length) {
            // move to the next
            loadQuiz()
            // if last passed, display answer
            // click button to reload the quiz
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})