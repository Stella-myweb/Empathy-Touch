let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = vocabularyTest.questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => selectChoice(choice.id);
        choicesDiv.appendChild(button);
    });
}

function selectChoice(choiceId) {
    const question = vocabularyTest.questions[currentQuestion];
    if (choiceId === question.correct) {
        score++;
    }
    
    currentQuestion++;
    if (currentQuestion < vocabularyTest.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    
    const result = vocabularyTest.calculateResult(score);
    document.getElementById('result-text').innerHTML = `
        <h3>${result.level}</h3>
        <p>${result.description}</p>
        <p>점수: ${score}/${vocabularyTest.questions.length}</p>
    `;
}

function restartQuiz() {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
} 
