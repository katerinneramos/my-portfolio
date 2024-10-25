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
        question: "¿Cuál es la función de la palabra clave 'FOREIGN KEY' en una base de datos relacional?",
        options: [
            "Definir una relación entre dos tablas.",
            "Garantizar que todas las filas sean únicas en una tabla.",
            "Mejorar el rendimiento de las consultas.",
            "Eliminar duplicados en una consulta.",
        ],
        correct: "Definir una relación entre dos tablas.",
    }, {
        id: "1",
        question: "¿Cuál es la diferencia principal entre un 'INNER JOIN' y un 'LEFT JOIN'?",
        options: [
            "El 'INNER JOIN' devuelve todas las filas de ambas tablas, mientras que el 'LEFT JOIN' devuelve solo las filas coincidentes.",
            "El 'LEFT JOIN' devuelve todas las filas de la tabla de la derecha, mientras que el 'INNER JOIN' solo devuelve filas coincidentes.",
            "El 'INNER JOIN' devuelve filas coincidentes de ambas tablas, mientras que el 'LEFT JOIN' devuelve todas las filas de la tabla de la izquierda y las filas coincidentes de la derecha.",
            "El 'LEFT JOIN' devuelve filas no coincidentes, mientras que el 'INNER JOIN' no devuelve ninguna fila.",
        ],
        correct: "El 'INNER JOIN' devuelve filas coincidentes de ambas tablas, mientras que el 'LEFT JOIN' devuelve todas las filas de la tabla de la izquierda y las filas coincidentes de la derecha.",
    }, {
        id: "2",
        question: "¿Para qué se usa la cláusula 'HAVING' en una consulta SQL?",
        options: [
            "Filtrar filas individuales antes de la agrupación.",
            "Filtrar el resultado después de usar funciones de agregación.",
            "Cambiar el orden de los resultados de la consulta.",
            "Eliminar filas duplicadas en la consulta.",
        ],
        correct: "Filtrar el resultado después de usar funciones de agregación.",
    }, {
        id: "3",
        question: "¿Qué resultado devolverá la consulta 'SELECT COALESCE(NULL, 'a', 'b')'? ",
        options: [
            "NULL",
            "'a'",
            "'b'",
            "Error",
        ],
        correct: "'a'",
    }, {
        id: "4",
        question: "¿Cuál es el propósito de la palabra clave 'INDEX' en SQL?",
        options: [
            "Crear un índice en una tabla para mejorar el rendimiento de las consultas.",
            "Eliminar filas de una tabla.",
            "Definir la estructura de una tabla.",
            "Agrupar resultados en una consulta.",
        ],
        correct: "Crear un índice en una tabla para mejorar el rendimiento de las consultas.",
    }, {
        id: "5",
        question: "¿Cómo se eliminaría una columna de una tabla existente?",
        options: [
            "DELETE COLUMN nombre_columna FROM tabla;",
            "DROP nombre_columna FROM tabla;",
            "ALTER TABLE tabla REMOVE COLUMN nombre_columna;",
            "ALTER TABLE tabla DROP COLUMN nombre_columna;",
        ],
        correct: "ALTER TABLE tabla DROP COLUMN nombre_columna;",
    }, {
        id: "6",
        question: "¿Cuál es el resultado de la consulta 'SELECT COUNT(DISTINCT columna) FROM tabla;'?",
        options: [
            "Devuelve el número total de filas en la tabla.",
            "Devuelve el número de filas únicas para la columna especificada.",
            "Devuelve el número de columnas en la tabla.",
            "Devuelve el número de filas duplicadas en la columna especificada.",
        ],
        correct: "Devuelve el número de filas únicas para la columna especificada.",
    }, {
        id: "7",
        question: "¿Cuál es el propósito de la función 'PARTITION BY' en una función de ventana?",
        options: [
            "Dividir el resultado en bloques de filas para aplicar una función de ventana.",
            "Ordenar las filas de una tabla en bloques separados.",
            "Eliminar filas duplicadas en una consulta.",
            "Cambiar el orden de los resultados de la consulta.",
        ],
        correct: "Dividir el resultado en bloques de filas para aplicar una función de ventana.",
    }, {
        id: "8",
        question: "¿Qué sucede cuando se ejecuta un 'UPDATE' sin una cláusula 'WHERE'?",
        options: [
            "Actualiza solo la primera fila de la tabla.",
            "No realiza ningún cambio en la tabla.",
            "Actualiza todas las filas de la tabla.",
            "Devuelve un error de sintaxis.",
        ],
        correct: "Actualiza todas las filas de la tabla.",
    }, {
        id: "9",
        question: "¿Cuál es la forma correcta de realizar una inserción condicional que evita duplicados?",
        options: [
            "INSERT INTO tabla (columna) VALUES (valor) ON DUPLICATE KEY UPDATE;",
            "INSERT IGNORE INTO tabla (columna) VALUES (valor);",
            "MERGE INTO tabla USING otra_tabla ON condicion;",
            "INSERT INTO tabla (columna) VALUES (valor) WHERE NOT EXISTS (SELECT 1 FROM tabla WHERE columna = valor);",
        ],
        correct: "INSERT INTO tabla (columna) VALUES (valor) WHERE NOT EXISTS (SELECT 1 FROM tabla WHERE columna = valor);",
    }, {
        id: "10",
        question: "¿Qué resultado se obtiene al ejecutar 'SELECT NULLIF(5, 5)'?",
        options: [
            "5",
            "NULL",
            "Error",
            "0"
        ],
        correct: "NULL",
    }, {
        id: "11",
        question: "¿Cuál es la diferencia entre 'ROW_NUMBER()' y 'RANK()' en funciones de ventana?",
        options: [
            "'ROW_NUMBER()' asigna números consecutivos, mientras que 'RANK()' puede asignar el mismo número a filas con valores iguales.",
            "'RANK()' asigna números consecutivos, mientras que 'ROW_NUMBER()' puede asignar el mismo número a filas con valores iguales.",
            "Ambas funciones devuelven el mismo resultado.",
            "'ROW_NUMBER()' solo se puede usar con 'ORDER BY'.",
        ],
        correct: "'ROW_NUMBER()' asigna números consecutivos, mientras que 'RANK()' puede asignar el mismo número a filas con valores iguales.",
    }, {
        id: "12",
        question: "¿Cómo se eliminarían filas duplicadas de una tabla llamada 'clientes'?",
        options: [
            "DELETE FROM clientes WHERE fila_id IN (SELECT fila_id FROM clientes GROUP BY columna HAVING COUNT(*) > 1);",
            "DELETE DUPLICATES FROM clientes;",
            "DELETE FROM clientes WHERE columna IS DUPLICATE;",
            "DELETE FROM clientes WHERE RANK() OVER (PARTITION BY columna ORDER BY columna) > 1;",
        ],
        correct: "DELETE FROM clientes WHERE fila_id IN (SELECT fila_id FROM clientes GROUP BY columna HAVING COUNT(*) > 1);",
    }, {
        id: "13",
        question: "¿Qué hace la instrucción 'TRUNCATE TABLE' en SQL?",
        options: [
            "Elimina todas las filas de una tabla sin eliminar la tabla en sí.",
            "Elimina una columna específica de una tabla.",
            "Elimina la estructura de la tabla y todos sus datos.",
            "Actualiza todas las filas de la tabla con valores predeterminados.",
        ],
        correct: "Elimina todas las filas de una tabla sin eliminar la tabla en sí.",
    }, {
        id: "14",
        question: "¿Cuál es la diferencia entre 'UNION' y 'UNION ALL'?",
        options: [
            "'UNION' elimina los duplicados, mientras que 'UNION ALL' incluye duplicados.",
            "'UNION ALL' elimina los duplicados, mientras que 'UNION' incluye duplicados.",
            "'UNION' combina tablas horizontalmente, 'UNION ALL' las combina verticalmente.",
            "No hay diferencia entre ambas.",
        ],
        correct: "'UNION' elimina los duplicados, mientras que 'UNION ALL' incluye duplicados.",
    }, {
        id: "15",
        question: "¿Qué tipo de índice debería usarse en una columna con muchos valores repetidos?",
        options: [
            "Índice único",
            "Índice hash",
            "Índice clusterizado",
            "Índice bitmap",
        ],
        correct: "Índice bitmap",
    }, {
        id: "16",
        question: "¿Qué sucede si se intenta agregar una fila que viola una restricción 'UNIQUE'?",
        options: [
            "La fila se inserta con un valor por defecto.",
            "Se lanza un error y la fila no se inserta.",
            "La fila se inserta pero se elimina la restricción 'UNIQUE'.",
            "Se inserta la fila con un valor NULL.",
        ],
        correct: "Se lanza un error y la fila no se inserta.",
    }, {
        id: "17",
        question: "¿Cuál es el propósito de la cláusula 'CROSS JOIN'?",
        options: [
            "Devuelve las filas que coinciden entre dos tablas.",
            "Devuelve todas las combinaciones posibles de filas entre dos tablas.",
            "Elimina filas duplicadas de una tabla.",
            "Devuelve las filas únicas de la tabla de la izquierda.",
        ],
        correct: "Devuelve todas las combinaciones posibles de filas entre dos tablas.",
    }, {
        id: "18",
        question: "¿Cuál es el propósito de la cláusula 'GROUP BY'?",
        options: [
            "Filtrar filas después de usar funciones de agregación.",
            "Ordenar los resultados en una consulta.",
            "Agrupar filas que tienen valores idénticos en columnas específicas.",
            "Eliminar filas duplicadas en el resultado de una consulta.",
        ],
        correct: "Agrupar filas que tienen valores idénticos en columnas específicas.",
    }, {
        id: "19",
        question: "¿Qué resultado se obtendría al ejecutar 'SELECT ROUND(123.456, 1)'?",
        options: [
            "123.5",
            "123.46",
            "123",
            "124",
        ],
        correct: "123.5",
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