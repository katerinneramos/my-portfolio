document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            question: "Caso de Estudio 1: Análisis en Tiempo Real de Transacciones Bancarias: Un banco quiere detectar transacciones fraudulentas en tiempo real.Actualmente, los datos de transacciones se generan en una base de datos operativa y deben ser analizados en menos de 5 segundos.Los ingenieros diseñaron un pipeline con: Cloud Pub/ Sub para recibir las transacciones en tiempo real. Cloud Dataflow para procesarlas y aplicar reglas de detección de fraude. BigQuery para almacenar los datos y permitir análisis históricos. ¿Por qué se eligió Pub/Sub en este diseño en lugar de Cloud Storage?",
            answer: "Pub/Sub permite procesamiento en streaming, mientras que Cloud Storage es mejor para lotes.",
            type: "multiple",
            options: [
                "Pub/Sub es más barato que Cloud Storage.",
                "Pub/Sub permite procesamiento en streaming, mientras que Cloud Storage es mejor para lotes.",
                "Cloud Storage no puede almacenar datos estructurados.",
                "Pub/Sub aplica transformaciones en los datos antes de enviarlos a Dataflow."
            ],
            "explanation": "Pub/Sub está diseñado para la transmisión de datos en tiempo real, mientras que Cloud Storage se usa más para procesamiento por lotes."
        },
        {
            question: "Caso de Estudio 2: Integración de Datos de IoT en BigQuery. Una empresa de energía quiere monitorear sus sensores IoT que reportan datos de temperatura cada 5 segundos.Los requisitos incluyen: Baja latencia en la ingesta de datos. Almacenamiento eficiente en BigQuery para análisis históricos. Detección de anomalías en tiempo real. Para esto, diseñaron una solución donde: Los dispositivos IoT publican mensajes en Cloud Pub/ Sub. Cloud Dataflow convierte los datos en un formato estructurado. BigQuery almacena los datos para consultas analíticas. ¿Cómo debe ser el esquema en BigQuery para optimizar consultas sobre estos datos de IoT?",
            answer: "Debe usar particionamiento basado en la fecha/hora del evento.",
            type: "multiple",
            options: [
                "Debe almacenar todos los datos en una única tabla sin particionamiento.",
                "Debe usar particionamiento basado en la fecha/hora del evento.",
                "Es mejor usar Firestore en lugar de BigQuery para almacenamiento escalable.",
                "Debe almacenar los datos en formato JSON sin transformación."
            ],
            "explanation": "Debe usar particionamiento basado en la fecha/hora del evento. Explicación: El particionamiento por tiempo permite filtrar los datos más rápido y reducir costos."
        },
        {
            question: "¿Qué servicio de Google Cloud permite la ingesta de eventos en tiempo real de manera escalable?",
            answer: "Pub/Sub",
            type: "text"
        },
        {
            question: "Caso de Estudio 4: Monitoreo en Tiempo Real de Redes Sociales. Una empresa de marketing digital quiere analizar menciones en redes sociales en tiempo real para detectar tendencias.Diseñaron una solución que: Usa Pub/ Sub para recibir menciones en tiempo real. Procesa los datos con Dataflow, limpiando texto y clasificando sentimientos. Almacena los resultados en BigQuery para análisis y reportes. ¿Qué técnica en Dataflow permite manejar datos que llegan con retraso en el tiempo de evento?",
            answer: "Ventanas basadas en sesión (Session Windows).",
            type: "multiple",
            options: [
                "Ventanas fijas (Fixed Windows).",
                "Ventanas deslizantes (Sliding Windows).",
                "Ventanas globales (Global Windows).",
                "Ventanas basadas en sesión (Session Windows)."
            ],
            "explanation": "Las ventanas basadas en sesión agrupan eventos relacionados en función de la inactividad, lo que permite manejar retrasos en la llegada de eventos."
        },
        {
            question: "Caso de Estudio 3: Migración de Datos desde On-Premise a BigQuery. Una empresa minorista tiene datos de ventas almacenados en una base de datos local.Quieren migrarlos a BigQuery con actualizaciones diarias y permitir análisis en tiempo real. La solución diseñada es: Extraer datos diariamente con Cloud Dataflow desde la base de datos on- premise. Publicar eventos de ventas en Pub / Sub para análisis en tiempo real. Cargar los datos en BigQuery usando Dataflow. ¿Cuál es la mejor forma de cargar grandes volúmenes de datos en BigQuery eficientemente?",
            answer: "Usar cargas por lotes desde Cloud Storage en formato Avro o Parquet.",
            type: "multiple",
            options: [
                "Insertar datos uno por uno usando la API de BigQuery.",
                "Usar cargas por lotes desde Cloud Storage en formato Avro o Parquet.",
                "Hacer streaming directo a BigQuery sin particionamiento.",
                "Guardar los datos en Firestore y luego exportarlos a BigQuery."
            ],
            "explanation": "Avro y Parquet son formatos optimizados para procesamiento distribuido y compresión eficiente. TextIO(CSV o JSON) puede ser más lento y costoso en términos de rendimiento."
        },
        {
            question: "Caso de Estudio 5: Optimización de ETLs con Dataflow. Una empresa de logística quiere optimizar su ETL diario para procesar datos de entregas en Google Cloud.Actualmente: Los datos llegan como archivos CSV a Cloud Storage. Se usa Dataflow para limpiar y transformar los datos. Se almacenan los resultados en BigQuery para reportes. Para mejorar el rendimiento del pipeline, ¿qué técnica de Dataflow es más efectiva?",
            answer: "Habilitar auto-scaling en Dataflow para ajustar la cantidad de workers dinámicamente.",
            type: "multiple",
            options: [
                "Habilitar auto-scaling en Dataflow para ajustar la cantidad de workers dinámicamente.",
                "Usar un solo worker para evitar sobrecarga.",
                "Configurar Dataflow en modo batch y evitar paralelización.",
                "Ejecutar el pipeline en Cloud Dataproc en lugar de Dataflow."
            ],
            "explanation": "Auto-scaling permite ajustar automáticamente los recursos de Dataflow según la carga de trabajo, optimizando costos y rendimiento."
        },
        {
            question: "¿Qué formato de archivo es más eficiente para almacenar datos estructurados en Dataflow?",
            answer: "Parquet",
            type: "text"
        },
        {
            question: "Caso de Estudio 6: Streaming de Datos Financieros con Pub/Sub y BigQuery. Una empresa de inversiones necesita procesar datos de mercado en tiempo real.Diseñaron un pipeline que: Recibe datos desde API externas en Cloud Pub/ Sub. Usa Dataflow para filtrar valores inconsistentes. Almacena datos en BigQuery para consultas en dashboards. ¿Cómo garantizar la entrega exactamente una vez de eventos en Pub/Sub?",
            answer: "Activar exactly-once processing en Dataflow con checkpointing.",
            type: "multiple",
            options: [
                "Configurar Pub/Sub en modo at-least-once y eliminar duplicados en Dataflow.",
                "Usar Dead Letter Topics para almacenar eventos fallidos.",
                "Activar exactly-once processing en Dataflow con checkpointing.",
                "No es posible garantizar exactly-once en Pub/Sub."
            ],
            "explanation": "Pub/Sub garantiza at-least-once delivery, por lo que Dataflow debe manejar la deduplicación. Checkpointing y ID únicos en eventos permiten garantizar exactly- once en Dataflow."
        },
        {
            question: "En Apache Beam, ¿cuál es el propósito de las ventanas de tiempo (windowing)?",
            answer: "Agrupar datos en intervalos de tiempo para su procesamiento.",
            type: "multiple",
            options: [
                "Agrupar datos en intervalos de tiempo para su procesamiento.",
                "Repartir eventos en diferentes workers sin importar el tiempo de llegada.",
                "Reducir el número de registros procesados en BigQuery.",
                "Garantizar el procesamiento en orden estricto de llegada."
            ]
        },
        {
            question: "¿Qué tipo de procesamiento usa Dataflow para trabajar con datos en tiempo real?",
            answer: "Streaming",
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
    let timeLeft = 60; // Timer: 60 segundos por pregunta

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
        timeLeft = 60; // Reiniciar el temporizador
        clearInterval(timer);
        timerElement.textContent = `Tiempo: ${timeLeft}s`;
    }

    // Función para cargar la pregunta actual
    function loadQuestion() {
        const currentQuestion = shuffledQuestions[currentIndex];
        questionElement.innerHTML = `¡Hola, ${playerName}! Juguemos:<br> <br> ${currentQuestion.question}`;
        optionsContainer.innerHTML = "<br>";
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
        clearInterval(timer); // Detiene el temporizador cuando se responde

        const currentQuestion = shuffledQuestions[currentIndex];
        const userAnswer = currentQuestion.type === "text"
            ? answerInput.value.trim().toLowerCase().replace(/\s+/g, '')
            : answer.toLowerCase().replace(/\s+/g, '');

        if (userAnswer === currentQuestion.answer.toLowerCase().replace(/\s+/g, '')) {
            score += 10;
            resultMessage.textContent = "✅ ¡Respuesta correcta!";
            resultMessage.style.color = "green";
        } else {
            resultMessage.innerHTML = `❌ Incorrecto. La respuesta correcta es: <b>${currentQuestion.answer}</b>.<br><i>${currentQuestion.explanation}</i>`;
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
        timeLeft = 60; // Reiniciar el temporizador para la siguiente pregunta
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
