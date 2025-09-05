let currentCert = null;
let currentModule = null;
let currentQuestions = [];
let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let timer, timeLeft = 90;

// Pantallas
const screens = {
    certs: document.getElementById("screen-certificaciones"),
    modulos: document.getElementById("screen-modulos"),
    quiz: document.getElementById("screen-quiz")
};

// Elementos UI
const certTitle = document.getElementById("cert-title");
const moduleList = document.getElementById("module-list");
const quizTitle = document.getElementById("quiz-title");
const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultMessage = document.getElementById("result-message");
const nextBtn = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const rankingElement = document.getElementById("ranking");

// Inicializar botones de certificación
document.querySelectorAll(".cert-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        currentCert = btn.dataset.cert;
        showScreen("modulos");
        certTitle.textContent = `Módulos de ${btn.textContent}`;
        loadModules();
    });
});

// Cambiar pantalla
function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
}

// Volver atrás
function goBackToCerts() { showScreen("certs"); }
function goBackToModules() { showScreen("modulos"); }

// Cargar módulos desde JSON
async function loadModules() {
    const res = await fetch(`json/${currentCert}.json`);
    const data = await res.json();
    moduleList.innerHTML = "";

    Object.entries(data.modules).forEach(([modKey, modObj], i) => {
        const btn = document.createElement("button");
        btn.textContent = modObj.name || `Módulo ${i + 1}`;
        btn.onclick = () => startQuiz(data, modKey);  // aquí usamos la clave correcta
        moduleList.appendChild(btn);
    });
}

// Iniciar quiz
function startQuiz(data, modKey) {
    currentModule = modKey;
    currentQuestions = data.modules[modKey].questions; // <--- aquí
    shuffledQuestions = shuffleArray(currentQuestions);
    currentIndex = 0;
    score = 0;

    // 🔥 Resetear score visual
    scoreElement.style.display = "none";
    scoreElement.textContent = "";

    quizTitle.textContent = `${data.cert} - ${data.modules[modKey].name}`;
    showScreen("quiz");
    showQuestion();
    loadRanking();
}

// Mostrar pregunta
function showQuestion() {
    clearInterval(timer);
    timeLeft = 90;
    timerElement.textContent = `Tiempo: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Tiempo: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            resultMessage.textContent = `⏰ Tiempo agotado. Respuesta: ${shuffledQuestions[currentIndex].answer}`;
            nextBtn.style.display = "block";
        }
    }, 1000);

    const q = shuffledQuestions[currentIndex];
    questionCounter.textContent = `Pregunta ${currentIndex + 1} de ${shuffledQuestions.length}`;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";
    resultMessage.textContent = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => {
            // Quitar selección previa
            document.querySelectorAll("#options-container .option-btn")
                .forEach(b => b.classList.remove("selected"));

            // Marcar el actual
            btn.classList.add("selected");

            // Revisar respuesta
            checkAnswer(opt, q.answer, q.explanation);
        };
        optionsContainer.appendChild(btn);
    });


    nextBtn.style.display = "none";
}
// Normalizar texto para comparación
function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

function checkAnswer(opt, correct, explanation) {
    clearInterval(timer);
    if (normalize(opt) === normalize(correct)) {
        score += 1;
        resultMessage.textContent = "✅ Correcto";
        resultMessage.style.color = "green";
    } else {
        resultMessage.innerHTML = `❌ Incorrecto. Correcta: <b>${correct}</b><br><i>${explanation}</i>`;
        resultMessage.style.color = "red";
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
});

// Fin del quiz
function endGame() {
    scoreElement.textContent = `🎉 Fin del quiz. Puntaje: ${score} de 20`;
    scoreElement.style.display = "block";
    nextBtn.style.display = "none";
    saveScore();
}

// Guardar ranking en localStorage
function saveScore() {
    let rankings = JSON.parse(localStorage.getItem("rankings")) || [];
    rankings.push({ name: currentCert, score, date: new Date().toLocaleString() });
    rankings.sort((a, b) => b.score - a.score);
    rankings = rankings.slice(0, 5);
    localStorage.setItem("rankings", JSON.stringify(rankings));
    loadRanking();
}

function loadRanking() {
    const rankings = JSON.parse(localStorage.getItem("rankings")) || [];
    rankingElement.innerHTML = "<h3>Ranking</h3>";
    rankings.forEach((r, i) => {
        const p = document.createElement("p");
        p.textContent = `${i + 1}. ${r.name} - ${r.score}`;
        rankingElement.appendChild(p);
    });
}

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
