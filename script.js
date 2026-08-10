let questions = [
    {
        question: "What is the capital of India?",
        options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: 0
    },
    {
        question: "Which language is used to structure a webpage?",
        options: ["HTML", "Python", "C", "Java"],
        answer: 0
    },
    {
        question: "Which language is used to style a webpage?",
        options: ["HTML", "CSS", "C++", "Python"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let questionData = questions[currentQuestion];

    document.getElementById("question").innerHTML = questionData.question;

    let buttons = document.querySelectorAll("#options button");

    buttons[0].innerHTML = questionData.options[0];
    buttons[1].innerHTML = questionData.options[1];
    buttons[2].innerHTML = questionData.options[2];
    buttons[3].innerHTML = questionData.options[3];

    document.getElementById("score").innerHTML = "Score: " + score;
}

function checkAnswer(option) {
    let questionData = questions[currentQuestion];

    if (option === questionData.answer) {
        score++;
        alert("Correct! 🎉");
    } else {
        alert("Wrong answer! ❌");
    }

    document.getElementById("score").innerHTML = "Score: " + score;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question").innerHTML =
            "Quiz Finished! 🎉 Your score is " + score + "/" + questions.length;

        document.getElementById("options").style.display = "none";
        document.getElementById("nextButton").style.display = "none";
    }
}

function startQuiz() {
    document.getElementById("startButton").style.display = "none";
    showQuestion();
}