const questions = [
    { question: "What is the past tense of 'go'?", options: ["goed", "went", "gone"], answer: "went" },
    { question: "What is the past tense of 'see'?", options: ["saw", "seen", "seed"], answer: "saw" },
    { question: "What is the past tense of 'take'?", options: ["took", "taken", "taked"], answer: "took" },
    { question: "What is the past tense of 'come'?", options: ["comed", "came", "come"], answer: "came" },
    { question: "What is the past tense of 'eat'?", options: ["eated", "ate", "eaten"], answer: "ate" },
    { question: "What is the past tense of 'give'?", options: ["gived", "gave", "given"], answer: "gave" },
    { question: "What is the past tense of 'drink'?", options: ["drank", "drunk", "drinked"], answer: "drank" },
    { question: "What is the past tense of 'write'?", options: ["writed", "wrote", "written"], answer: "wrote" },
    { question: "What is the past tense of 'speak'?", options: ["speaked", "spoke", "spoken"], answer: "spoke" },
    { question: "What is the past tense of 'run'?", options: ["runned", "ran", "run"], answer: "ran" },
    { question: "What is the past tense of 'begin'?", options: ["began", "begun", "beginned"], answer: "began" },
    { question: "What is the past tense of 'break'?", options: ["breaked", "broke", "broken"], answer: "broke" },
    { question: "What is the past tense of 'choose'?", options: ["choosed", "chose", "chosen"], answer: "chose" },
    { question: "What is the past tense of 'drive'?", options: ["drived", "drove", "driven"], answer: "drove" },
    { question: "What is the past tense of 'fall'?", options: ["falled", "fell", "fallen"], answer: "fell" },
    { question: "What is the past tense of 'fly'?", options: ["flied", "flew", "flown"], answer: "flew" },
    { question: "What is the past tense of 'forget'?", options: ["forgetted", "forgot", "forgotten"], answer: "forgot" },
    { question: "What is the past tense of 'get'?", options: ["getted", "got", "gotten"], answer: "got" },
    { question: "What is the past tense of 'grow'?", options: ["growed", "grew", "grown"], answer: "grew" },
    { question: "What is the past tense of 'know'?", options: ["knowed", "knew", "known"], answer: "knew" },
    { question: "What is the past tense of 'leave'?", options: ["leaved", "left", "leaven"], answer: "left" },
    { question: "What is the past tense of 'make'?", options: ["maked", "made", "maked"], answer: "made" },
    { question: "What is the past tense of 'meet'?", options: ["meeted", "met", "meet"], answer: "met" },
    { question: "What is the past tense of 'read'?", options: ["readed", "read", "read"], answer: "read" },
    { question: "What is the past tense of 'sing'?", options: ["singed", "sang", "sung"], answer: "sang" }
];

function loadQuestions() {
    const form = document.getElementById('quizForm');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `
            <label>${index + 1}. ${q.question}</label><br>
            ${q.options.map((option, i) => `
                <input type="radio" id="q${index + 1}${i}" name="q${index + 1}" value="${option}">
                <label for="q${index + 1}${i}">${option}</label><br>
            `).join('')}
        `;
        form.appendChild(div);
    });
}

function checkAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });
    document.getElementById('result').textContent = `You got ${score} out of ${questions.length} correct!`;
}

window.onload = loadQuestions;
