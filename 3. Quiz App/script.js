const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican city", correct: true },
            { text: "Napal", correct: false },
            { text: "Bhutan", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gopi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    }
];

// Selecting elements
const questionElement = document.querySelector('.question');
const answerBtns = document.querySelector('.answerBtns');
const btnNext = document.querySelector('#btnNext');

// Initializing variables
let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    showQuestions();
}

// Reset state
const resetState = () => {
    btnNext.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

// Show questions
const showQuestions = () => {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNum}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach((answer) => {
        const btn = document.createElement('button');
        btn.innerHTML = answer.text;
        btn.classList.add('btn');
        answerBtns.appendChild(btn);
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer);
    });
}

// Select answer
const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    selectedBtn.style.background = isCorrect ? "rgb(41, 137, 41)" : "lightcoral";
    if (isCorrect) {
        score++;
    }
    Array.from(answerBtns.children).forEach((btn) => {
        if (btn.dataset.correct === "true") {
            btn.style.background = "rgb(41, 137, 41)";
        }
        btn.disabled = true;
    });
    btnNext.style.display = "block";
}

// Handle next button
const handleNextBtn = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

// Event listener for next button
btnNext.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
        btnNext.innerHTML = "Next";
    }
});

// Show score
const showScore = () => {
    resetState();
    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}!`;
    btnNext.style.display = "block";
    btnNext.innerHTML = "Play Again.";
}

// Start quiz
startQuiz();
