document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            question: "¿Cuál es el servicio de almacenamiento de objetos en GCP?",
            answer: "Cloud Storage",
            type: "multiple",
            options: [
                "Cloud SQL",
                "Cloud Storage",
                "BigQuery",
                "Firestore"
            ]
        },
        {
            question: "¿Qué servicio se usa para ejecutar código sin servidores?",
            answer: "Cloud Functions",
            type: "multiple",
            options: [
                "Compute Engine",
                "Cloud Functions",
                "GKE",
                "App Engine"
            ]
        },
        {
            question: "Escribe el nombre del servicio para bases de datos SQL en GCP.",
            answer: "Cloud SQL",
            type: "text"
        },
        {
            question: "¿Qué herramienta permite gestionar clusters de Kubernetes?",
            answer: "Google Kubernetes Engine",
            type: "multiple",
            options: [
                "App Engine",
                "Cloud Run",
                "Google Kubernetes Engine",
                "Compute Engine"
            ]
        },
        {
            question: "Escribe el nombre del servicio de análisis de Big Data en GCP.",
            answer: "BigQuery",
            type: "text"
        },
        {
            question: "¿Qué servicio proporciona redes privadas virtuales en GCP?",
            answer: "Cloud VPC",
            type: "multiple",
            options: [
                "Cloud VPC",
                "Cloud CDN",
                "Cloud Load Balancing",
                "Cloud DNS"
            ]
        },
        {
            question: "¿Qué servicio se usa para la autenticación de usuarios en GCP?",
            answer: "Firebase Authentication",
            type: "multiple",
            options: [
                "Firebase Authentication",
                "Identity-Aware Proxy",
                "Cloud Identity",
                "Cloud Identity Platform"
            ]
        },
        {
            question: "Escribe el nombre del servicio para almacenamiento de datos estructurados en GCP.",
            answer: "Firestore",
            type: "text"
        },
        {
            question: "¿Qué servicio permite el despliegue de aplicaciones sin servidores en GCP?",
            answer: "Cloud Run",
            type: "multiple",
            options: [
                "App Engine",
                "Cloud Run",
                "Compute Engine",
                "Firebase Hosting"
            ]
        },
        {
            question: "Escribe el nombre del servicio para la administración de identidades en GCP.",
            answer: "Cloud Identity",
            type: "text"
        }
    ];

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const shuffledQuestions = shuffleArray(questions);

    let currentIndex = 0;
    let score = 0;
    const totalQuestions = shuffledQuestions.length;
    let playerName = "";
    let timer;
    let timeLeft = 30; // Timer: 30 segundos por pregunta

    const questionElement = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const answerInput = document.getElementById("answer-input");
    const nextButton = document.getElementById("next-btn");
    const timerElement = document.getElementById("timer");
    const scoreElement = document.getElementById("score");
    const resultMessage = document.getElementById("result-message");
    const questionCounter = document.getElementById("question-counter");
    const startScreen = document.getElementById("start-screen");
    const gameScreen = document.getElementById("game-screen");
    const playerNameInput = document.getElementById("player-name");
    const startGameButton = document.getElementById("start-game-btn");
    const backButton = document.getElementById("back-btn");
    const quitButton = document.getElementById("quit-btn");

    // Función para cargar el ranking
    function loadRanking() {
        const rankingElement = document.getElementById("ranking");
        const rankings = JSON.parse(localStorage.getItem("rankings")) || [];
        rankingElement.innerHTML = "<h2>Ranking de Mejores Puntajes</h2>";
        rankings.slice(0, 5).forEach((entry, index) => {
            const rankingItem = document.createElement("p");
            rankingItem.textContent = `${index + 1}. ${entry.name} - ${entry.score} puntos`;
            rankingElement.appendChild(rankingItem);
        });
    }

    // Función para iniciar el juego
    startGameButton.addEventListener("click", () => {
        playerName = playerNameInput.value.trim();
        if (playerName) {
            startScreen.style.display = "none";
            gameScreen.style.display = "block";
            loadQuestion();
        } else {
            alert("Por favor, ingresa tu nombre.");
        }
    });

    // Volver a la pantalla de inicio
    backButton.addEventListener("click", () => {
        resetGame(); // Reiniciar el estado del juego
        startScreen.style.display = "block";
        gameScreen.style.display = "none";
    });

    // Salir del juego
    quitButton.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que quieres salir del juego?")) {
            resetGame(); // Reiniciar el estado del juego
            startScreen.style.display = "block";
            gameScreen.style.display = "none";
        }
    });

    // Función para reiniciar el juego
    function resetGame() {
        currentIndex = 0;
        score = 0;
        resultMessage.textContent = "";
        scoreElement.style.display = "none";
        nextButton.style.display = "none";
        timeLeft = 30; // Reiniciar el temporizador
        clearInterval(timer);
        timerElement.textContent = `Tiempo: ${timeLeft}s`;
    }

    // Función para cargar la pregunta actual
    function loadQuestion() {
        const currentQuestion = shuffledQuestions[currentIndex];
        questionElement.textContent = `¡Hola, ${playerName}! Juguemos: ${currentQuestion.question}`;
        optionsContainer.innerHTML = "";
        resultMessage.textContent = "";
        questionCounter.textContent = `Pregunta ${currentIndex + 1} de ${totalQuestions}`;

        // Temporizador
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Tiempo: ${timeLeft}s`;
            if (timeLeft === 0) {
                clearInterval(timer);
                nextButton.style.display = "block"; // Si el tiempo se acaba, permitir pasar
                resultMessage.textContent = `¡Tiempo agotado! La respuesta correcta es: ${currentQuestion.answer}`;
                resultMessage.style.color = "red";
            }
        }, 1000);

        // Si la pregunta es de opción múltiple
        if (currentQuestion.type === "multiple") {
            answerInput.style.display = "none";
            currentQuestion.options.forEach(option => {
                const button = document.createElement("button");
                button.textContent = option;
                button.classList.add("option-btn");
                button.addEventListener("click", () => checkAnswer(option));
                optionsContainer.appendChild(button);
            });
        } else {
            answerInput.style.display = "block";
            answerInput.value = "";
        }

        nextButton.style.display = "none"; // Ocultar el botón "Siguiente" hasta que se responda
    }

    // Función para comprobar si la respuesta es correcta
    function checkAnswer(answer) {
        const currentQuestion = shuffledQuestions[currentIndex];
        const userAnswer = currentQuestion.type === "text" ? answerInput.value.trim().toLowerCase().replace(/\s+/g, '') : answer.toLowerCase().replace(/\s+/g, '');

        if (userAnswer === currentQuestion.answer.toLowerCase().replace(/\s+/g, '')) {
            score += 10;
            resultMessage.textContent = "¡Respuesta correcta!";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = `Incorrecto. La respuesta correcta es: ${currentQuestion.answer}`;
            resultMessage.style.color = "red";
        }

        nextButton.style.display = "block"; // Mostrar el botón "Siguiente"
    }

    // Función para manejar la acción de presionar Enter en el campo de respuesta
    answerInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkAnswer(answerInput.value);
        }
    });

    // Función para avanzar a la siguiente pregunta
    nextButton.addEventListener("click", () => {
        currentIndex++;
        timeLeft = 30; // Reiniciar el temporizador para la siguiente pregunta
        clearInterval(timer);
        if (currentIndex < totalQuestions) {
            loadQuestion();
        } else {
            endGame();
        }
    });

    // Función para terminar el juego
    function endGame() {
        scoreElement.textContent = `¡Juego terminado! Tu puntaje final es: ${score}`;
        scoreElement.style.display = "block";
        nextButton.style.display = "none";
        saveScore();
    }

    // Guardar el puntaje en el ranking local
    function saveScore() {
        let rankings = JSON.parse(localStorage.getItem("rankings")) || [];
        rankings.push({ name: playerName, score, date: new Date().toLocaleString() });
        rankings.sort((a, b) => b.score - a.score);
        rankings = rankings.slice(0, 10); // Mantener solo el top 10
        localStorage.setItem("rankings", JSON.stringify(rankings));
        loadRanking(); // Actualizar el ranking después de guardar el puntaje
    }

    // Cargar el ranking en la pantalla de inicio
    loadRanking();

    // Iniciar la pantalla de bienvenida
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
});
