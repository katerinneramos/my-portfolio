let currentLesson = 0;
let currentQuestionIndex = 0;
let points = 0;
let timeLeft = 60;
let timer;
let totalQuestions = 0;
let answeredQuestions = 0;

const motivationMessages = [
    "¡Sigue así!",
    "¡Vas muy bien!",
    "¡Genial, sigue así!",
    "¡Aún puedes mejorar, sigue intentándolo!"
];

const lessons = [
    {
        title: "Diseño de Sistemas de Procesamiento de Datos",
        questions: [
            {
                type: "text",
                question: "¿Qué patrón de diseño es recomendado para manejar cargas de trabajo en Dataflow y optimizar costos?",
                answer: "Autoscaling y Ventanas de procesamiento"
            },
            {
                type: "text",
                question: "¿Cómo se garantiza la consistencia eventual en sistemas distribuidos en GCP?",
                answer: "Usando Pub/Sub con acknowledgments y almacenamiento distribuido como Spanner"
            },
            {
                type: "truefalse",
                question: "¿Cloud Spanner ofrece consistencia fuerte y escalabilidad horizontal?",
                answer: true
            },
            {
                type: "dragdrop",
                question: "Ordena las etapas de un pipeline de procesamiento de datos en GCP",
                options: ["Ingesta", "Procesamiento", "Almacenamiento", "Análisis"],
                correct: ["Ingesta", "Procesamiento", "Almacenamiento", "Análisis"]
            },
            {
                type: "match",
                question: "Une las herramientas con sus características avanzadas",
                pairs: [
                    { option1: "BigQuery", option2: "Almacenamiento en columnas y particionamiento" },
                    { option1: "Cloud Spanner", option2: "Base de datos relacional con escalabilidad horizontal" },
                    { option1: "Dataflow", option2: "Procesamiento distribuido basado en Apache Beam" }
                ]
            }
        ]
    },
    {
        title: "Ingesta y Procesamiento de Datos",
        questions: [
            {
                type: "text",
                question: "¿Qué estrategia de procesamiento usarías en Dataflow para minimizar latencia en datos en tiempo real?",
                answer: "Procesamiento con ventanas deslizantes (sliding windows)"
            },
            {
                type: "text",
                question: "¿Qué formato de datos es más eficiente para consultas analíticas en BigQuery?",
                answer: "Parquet"
            },
            {
                type: "truefalse",
                question: "¿Cloud Pub/Sub garantiza orden estricto de los mensajes sin necesidad de claves de orden?",
                answer: false
            },
            {
                type: "dragdrop",
                question: "Arrastra los métodos de ingesta de datos según su aplicación",
                options: ["Streaming", "Batch", "Event-driven", "Micro-batching"],
                correct: ["Streaming", "Batch", "Event-driven", "Micro-batching"]
            },
            {
                type: "match",
                question: "Une las estrategias de optimización con su propósito en procesamiento de datos",
                pairs: [
                    { option1: "Ventanas de sesión", option2: "Agrupar eventos basados en actividad del usuario" },
                    { option1: "Triggering", option2: "Controlar cuándo emitir resultados en Dataflow" },
                    { option1: "Sharding en Pub/Sub", option2: "Distribuir carga y evitar cuellos de botella" }
                ]
            }
        ]
    }
];



// Función para iniciar el temporizador
const startTimer = () => {
    stopTimer();
    timeLeft = 60;
    document.getElementById("timer").innerText = `${timeLeft}s`;
    document.getElementById("timer").classList.remove("timer-urgent");

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `${timeLeft}s`;

        if (timeLeft <= 10) {
            document.getElementById("timer").classList.add("timer-urgent");
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
        }
    }, 1000);
};

// Función para detener el temporizador
const stopTimer = () => {
    if (timer) clearInterval(timer);
};

// Cargar la lección
const loadLesson = (lessonIndex) => {
    currentLesson = lessonIndex;
    currentQuestionIndex = 0;
    answeredQuestions = 0;
    totalQuestions = lessons[currentLesson].questions.length;
    points = 0;

    document.getElementById("lesson-selection").style.display = 'none';
    document.getElementById("lesson-container").style.display = 'block';
    document.getElementById("certification-container").style.display = 'none';

    loadNextQuestion();
};

// Cargar la siguiente pregunta
const loadNextQuestion = () => {
    stopTimer();

    const lesson = lessons[currentLesson];

    if (currentQuestionIndex < lesson.questions.length) {
        const question = lesson.questions[currentQuestionIndex];
        loadQuestionByType(question);
    } else {
        showCertification();
    }
};

// Función para cargar la pregunta según su tipo
const loadQuestionByType = (question) => {
    document.getElementById("lesson-container").innerHTML = `
        <h2>${lessons[currentLesson].title}</h2>
        <p id="question-text">${question.question}</p>
        ${question.type === "text" ? `<input type="text" id="answer" placeholder="Escribe tu respuesta...">` : ''}
        ${question.type === "truefalse" ? `
            <button class="truefalse" onclick="checkAnswer(true)">Verdadero</button>
            <button class="truefalse" onclick="checkAnswer(false)">Falso</button>` : ''}
        ${question.type === "dragdrop" ? `
            <div id="drag-drop-container">${generateDragDropOptions(question.options)}</div>` : ''}
        ${question.type === "match" ? `
            <div id="match-container">${generateMatchOptions(question.pairs)}</div>` : ''}
        <button id="submit-answer">Enviar Respuesta</button>
        <button id="next-response" style="display:none;">Siguiente Pregunta</button>
        <p>Tiempo restante: <span id="timer">${timeLeft}</span>s</p>
        <div id="feedback"></div>
        <div class="progress-bar">
            <div id="progress-bar-fill" class="progress-bar-fill"></div>
        </div>
        <p class="motivation-message" id="motivation"></p>
        <p>Puntos: <span id="points">${points}</span></p>
        <button id="exit-game">Salir al Inicio</button>
    `;

    updateProgressBar();
    startTimer();
    document.getElementById("submit-answer").addEventListener('click', checkAnswer);
    document.getElementById("next-response").addEventListener('click', nextQuestion);
    document.getElementById("exit-game").addEventListener('click', exitGame);
};

// Función para verificar la respuesta
const checkAnswer = (isTrue) => {
    const lesson = lessons[currentLesson];
    const question = lesson.questions[currentQuestionIndex];
    let feedback = document.getElementById("feedback");

    stopTimer();

    if (question.type === "text") {
        const answer = document.getElementById("answer").value.trim().toLowerCase();
        if (answer === question.answer.toLowerCase()) {
            points += 10;
            feedback.innerHTML = `<p class="correct">¡Respuesta correcta!</p>`;
        } else {
            feedback.innerHTML = `<p class="incorrect">Respuesta incorrecta. La respuesta correcta era: ${question.answer}</p>`;
        }
    } else if (question.type === "truefalse") {
        if (isTrue === question.answer) {
            points += 10;
            feedback.innerHTML = `<p class="correct">¡Respuesta correcta!</p>`;
        } else {
            feedback.innerHTML = `<p class="incorrect">Respuesta incorrecta. La respuesta correcta era: ${question.answer ? "Verdadero" : "Falso"}</p>`;
        }
    }

    updateScore();
    answeredQuestions++;
    updateProgressBar();

    document.getElementById("submit-answer").style.display = 'none';
    document.getElementById("next-response").style.display = 'inline-block';
};

// Función para generar opciones arrastrables con colores aleatorios
const generateDragDropOptions = (options) => {
    return `
        <div id="drag-options">
            ${options.map((option, index) => `
                <div class="drag-item" id="drag-${index}" draggable="true" ondragstart="drag(event)" 
                    style="background-color: #${Math.floor(Math.random() * 16777215).toString(16)};">
                    ${option}
                </div>
            `).join('')}
        </div>
        <div id="drop-area" ondragover="allowDrop(event)" ondrop="drop(event)">
            <p>Arrastra las opciones aquí</p>
        </div>
    `;
};

// Función para manejar el evento "drag"
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Función para permitir soltar un elemento
function allowDrop(ev) {
    ev.preventDefault();
}

// Función para manejar el "drop"
function drop(ev) {
    ev.preventDefault();
    let draggedItemId = ev.dataTransfer.getData("text");
    let draggedItem = document.getElementById(draggedItemId);

    if (!draggedItem) return;

    let dropArea = document.getElementById("drop-area");
    dropArea.appendChild(draggedItem);
}

// Verificar si las respuestas en la zona de drop son correctas
const checkDragDropAnswer = (correctOrder) => {
    let dropArea = document.getElementById("drop-area");
    let droppedItems = Array.from(dropArea.children)
        .filter(item => item.classList.contains("drag-item"))
        .map(item => item.textContent.trim());

    let isCorrect = JSON.stringify(droppedItems) === JSON.stringify(correctOrder);

    document.getElementById("feedback").innerHTML = isCorrect
        ? '<p class="correct">¡Correcto!</p>'
        : '<p class="incorrect">Respuesta incorrecta</p>';

    if (isCorrect) points += 10;

    document.getElementById("submit-answer").style.display = 'none';
    document.getElementById("next-response").style.display = 'inline-block';
};

// Mostrar el puntaje
const updateScore = () => {
    document.getElementById("points").innerText = points;
};

// Actualizar la barra de progreso
const updateProgressBar = () => {
    const progress = (answeredQuestions / totalQuestions) * 100;
    document.getElementById("progress-bar-fill").style.width = progress + '%';
};

// Pasar a la siguiente pregunta
const nextQuestion = () => {
    currentQuestionIndex++;
    loadNextQuestion();
};

// Mostrar certificación
const showCertification = () => {
    document.getElementById("certification-container").style.display = 'block';
    document.getElementById("lesson-container").style.display = 'none';
    document.getElementById("certification-container").innerHTML = `
        <h2>Certificación Completada</h2>
        <p>¡Felicidades, has completado el cuestionario!</p>
        <p>Puntaje Final: ${points}</p>
        <button onclick="exitGame()">Volver al inicio</button>
    `;
};

// Salir del juego
const exitGame = () => {
    document.getElementById("lesson-selection").style.display = 'block';
    document.getElementById("lesson-container").style.display = 'none';
    document.getElementById("certification-container").style.display = 'none';
};
