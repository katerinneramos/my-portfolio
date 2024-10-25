let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 61;
let countdown;

//20 questions with options and answer array
const quizArray = [
    {
        id: "0",
        question: "¿Cuál es la función del comando 'SET TRANSACTION ISOLATION LEVEL'?",
        options: [
            "Configura el nivel de aislamiento de una transacción.",
            "Elimina una transacción en curso.",
            "Establece el tiempo de espera de una transacción.",
            "Configura el tipo de datos de una columna en una tabla.",
        ],
        correct: "Configura el nivel de aislamiento de una transacción.",
    }, {
        id: "1",
        question: "¿Qué es un 'CTE' (Common Table Expression) en SQL?",
        options: [
            "Una subconsulta que se utiliza para mejorar la legibilidad de una consulta.",
            "Una función de agregación que se puede usar en una consulta.",
            "Un tipo de índice para acelerar las consultas.",
            "Un comando para crear una nueva tabla temporal.",
        ],
        correct: "Una subconsulta que se utiliza para mejorar la legibilidad de una consulta.",
    }, {
        id: "2",
        question: "¿Cuál es el propósito de la cláusula 'WITH (NOLOCK)' en SQL Server?",
        options: [
            "Permitir que la consulta acceda a datos bloqueados por otras transacciones.",
            "Ejecutar la consulta sin bloqueo, lo que puede provocar lecturas sucias.",
            "Aumentar la velocidad de las consultas al evitar la creación de índices.",
            "Eliminar automáticamente registros antiguos.",
        ],
        correct: "Ejecutar la consulta sin bloqueo, lo que puede provocar lecturas sucias.",
    }, {
        id: "3",
        question: "¿Qué resultado se obtiene al ejecutar la consulta 'SELECT 1/0'?",
        options: [
            "0",
            "1",
            "NULL",
            "Error de división por cero",
        ],
        correct: "Error de división por cero",
    }, {
        id: "4",
        question: "¿Cuál es la función de la cláusula 'ROLLBACK'?",
        options: [
            "Confirma los cambios realizados en la base de datos.",
            "Revierte los cambios realizados en la base de datos hasta el último 'SAVEPOINT'.",
            "Muestra todas las transacciones activas.",
            "Crea un punto de control en una transacción.",
        ],
        correct: "Revierte los cambios realizados en la base de datos hasta el último 'SAVEPOINT'.",
    }, {
        id: "5",
        question: "¿Cómo se crea un índice 'UNIQUE' en una tabla existente?",
        options: [
            "CREATE INDEX nombre_indice ON tabla (columna) UNIQUE;",
            "ALTER TABLE tabla ADD UNIQUE INDEX nombre_indice (columna);",
            "CREATE UNIQUE INDEX nombre_indice ON tabla (columna);",
            "ALTER TABLE tabla ADD CONSTRAINT nombre_indice UNIQUE (columna);",
        ],
        correct: "CREATE UNIQUE INDEX nombre_indice ON tabla (columna);",
    }, {
        id: "6",
        question: "¿Cuál es el efecto de usar 'EXPLAIN' en una consulta SQL?",
        options: [
            "Devuelve el resultado de la consulta ejecutada.",
            "Proporciona un plan de ejecución de la consulta para analizar su rendimiento.",
            "Muestra el tiempo de ejecución de la consulta.",
            "Elimina el índice de la tabla especificada.",
        ],
        correct: "Proporciona un plan de ejecución de la consulta para analizar su rendimiento.",
    }, {
        id: "7",
        question: "¿Qué hace la cláusula 'MERGE' en SQL?",
        options: [
            "Combina datos de dos tablas y realiza inserciones o actualizaciones según las coincidencias.",
            "Elimina registros duplicados en una tabla.",
            "Crea una copia de seguridad de los datos en una tabla temporal.",
            "Agrupa filas en una sola fila.",
        ],
        correct: "Combina datos de dos tablas y realiza inserciones o actualizaciones según las coincidencias.",
    }, {
        id: "8",
        question: "¿Cuál es la diferencia principal entre 'TRUNCATE' y 'DELETE'?",
        options: [
            "'TRUNCATE' no puede usar una cláusula 'WHERE', mientras que 'DELETE' sí puede.",
            "'DELETE' es más rápido que 'TRUNCATE' porque registra cada eliminación.",
            "'TRUNCATE' elimina la tabla, mientras que 'DELETE' solo elimina filas.",
            "'DELETE' se puede deshacer, mientras que 'TRUNCATE' no.",
        ],
        correct: "'TRUNCATE' no puede usar una cláusula 'WHERE', mientras que 'DELETE' sí puede.",
    }, {
        id: "9",
        question: "¿Qué resultado obtendrás al ejecutar 'SELECT ROW_NUMBER() OVER (ORDER BY columna) FROM tabla;'?",
        options: [
            "Devuelve el número total de filas en la tabla.",
            "Devuelve un número único para cada fila según el orden especificado.",
            "Devuelve filas duplicadas en la tabla.",
            "Devuelve un error de sintaxis.",
        ],
        correct: "Devuelve un número único para cada fila según el orden especificado.",
    }, {
        id: "10",
        question: "¿Qué es una vista en SQL?",
        options: [
            "Una tabla temporal que almacena resultados de una consulta.",
            "Una función que calcula valores a partir de una tabla.",
            "Un comando para eliminar registros de una tabla.",
            "Una copia de seguridad de una tabla.",
        ],
        correct: "Una tabla temporal que almacena resultados de una consulta.",
    }, {
        id: "11",
        question: "¿Qué significa la propiedad 'ACID' en el contexto de transacciones de bases de datos?",
        options: [
            "Atomicidad, Consistencia, Aislamiento, Durabilidad.",
            "Agrupamiento, Consistencia, Interacción, Durabilidad.",
            "Automatización, Consistencia, Aislamiento, Dependencia.",
            "Agrupamiento, Consistencia, Integridad, Durabilidad.",
        ],
        correct: "Atomicidad, Consistencia, Aislamiento, Durabilidad.",
    }, {
        id: "12",
        question: "¿Cuál es la función de la cláusula 'GROUP BY' en una consulta SQL?",
        options: [
            "Filtrar resultados después de una operación de agregación.",
            "Agrupar filas con valores idénticos en columnas específicas.",
            "Ordenar los resultados de la consulta.",
            "Eliminar filas duplicadas en el resultado de una consulta.",
        ],
        correct: "Agrupar filas con valores idénticos en columnas específicas.",
    }, {
        id: "13",
        question: "¿Qué hace la función 'CAST()' en SQL?",
        options: [
            "Convierte un valor de un tipo de datos a otro.",
            "Agrupa resultados en una consulta.",
            "Elimina filas duplicadas en una consulta.",
            "Ordena los resultados de la consulta.",
        ],
        correct: "Convierte un valor de un tipo de datos a otro.",
    }, {
        id: "14",
        question: "¿Cómo se realiza un 'FULL OUTER JOIN' entre dos tablas?",
        options: [
            "SELECT * FROM tabla1 LEFT JOIN tabla2 ON condicion FULL OUTER;",
            "SELECT * FROM tabla1 FULL OUTER JOIN tabla2 ON condicion;",
            "SELECT * FROM tabla1 JOIN tabla2 ON condicion FULL OUTER;",
            "SELECT * FROM tabla1, tabla2 WHERE condicion FULL OUTER;",
        ],
        correct: "SELECT * FROM tabla1 FULL OUTER JOIN tabla2 ON condicion;",
    }, {
        id: "15",
        question: "¿Qué hace la cláusula 'HAVING' en una consulta SQL?",
        options: [
            "Filtra los resultados después de aplicar la cláusula 'GROUP BY'.",
            "Filtra filas individuales antes de la agrupación.",
            "Ordena los resultados de la consulta.",
            "Elimina filas duplicadas en el resultado de una consulta.",
        ],
        correct: "Filtra los resultados después de aplicar la cláusula 'GROUP BY'.",
    }, {
        id: "16",
        question: "¿Qué resultado se obtiene al ejecutar 'SELECT CONCAT('Hola', ' ', 'Mundo');'?",
        options: [
            "'Hola Mundo'",
            "'HolaMundo'",
            "'Hola Mundo '",
            "Error de sintaxis",
        ],
        correct: "'Hola Mundo'",
    }, {
        id: "17",
        question: "¿Qué es un 'Trigger' en SQL?",
        options: [
            "Una instrucción que se ejecuta automáticamente en respuesta a eventos en una tabla.",
            "Un tipo de índice especial para optimizar consultas.",
            "Un método para eliminar registros duplicados.",
            "Una función que se puede llamar manualmente en consultas.",
        ],
        correct: "Una instrucción que se ejecuta automáticamente en respuesta a eventos en una tabla.",
    }, {
        id: "18",
        question: "¿Qué es un 'Stored Procedure'?",
        options: [
            "Un script SQL que se puede ejecutar de manera independiente y que puede aceptar parámetros.",
            "Una consulta SQL que devuelve un resultado específico.",
            "Un comando para eliminar registros de una tabla.",
            "Un índice creado en una tabla para optimizar las búsquedas.",
        ],
        correct: "Un script SQL que se puede ejecutar de manera independiente y que puede aceptar parámetros.",
    }, {
        id: "19",
        question: "¿Cómo se pueden manejar excepciones en una consulta SQL?",
        options: [
            "Usando la cláusula 'TRY...CATCH'.",
            "Usando la cláusula 'EXCEPTION'.",
            "No se pueden manejar excepciones en SQL.",
            "Usando la cláusula 'IF...ELSE'.",
        ],
        correct: "Usando la cláusula 'TRY...CATCH'.",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener("click", (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
        //hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        //user score
        userScore.innerHTML =
            "Your score is " + scoreCount + " out of " + questionCount;
    } else {
        //display questionCount
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + quizArray.length + " Question";
        //display quiz
        quizDisplay(questionCount);
        count = 61;
        clearInterval(countdown);
        timerDisplay();
    }
})
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 61;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};