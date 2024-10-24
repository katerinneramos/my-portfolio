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
let count = 11;
let countdown;

//10 questions with options and answer array
const quizArray = [
    {
        id: "0",
        question: "Dado el siguiente código: SELECT * FROM empleados WHERE salario > 3000;, ¿qué hace esta consulta?",
        options: [
            "Selecciona todos los registros de la tabla empleados con un salario mayor a 3000.",
            "Actualiza todos los registros de la tabla empleados con un salario mayor a 3000.",
            "Elimina todos los registros de la tabla empleados con un salario mayor a 3000.",
            "Selecciona los primeros 3000 registros de la tabla empleados.",
        ],
        correct: "Selecciona todos los registros de la tabla empleados con un salario mayor a 3000.",
    }, {
        id: "1",
        question: "¿Cuál sería el resultado de ejecutar: SELECT COUNT(*) FROM productos;?",
        options: [
            "Devuelve la suma de los valores en la columna productos.",
            "Devuelve el número total de columnas en la tabla productos.",
            "Devuelve el número total de filas en la tabla productos.",
            "Devuelve todos los registros en la tabla productos.",
        ],
        correct: "Devuelve el número total de filas en la tabla productos.",
    }, {
        id: "2",
        question: "Dada una tabla empleados con columnas nombre y salario, ¿cuál es la forma correcta de incrementar el salario en un 5% solo para empleados con un salario menor a 3000?",
        options: [
            "UPDATE empleados SET salario = salario * 1.05;",
            "UPDATE empleados SET salario = salario + 3000 WHERE salario < 3000;",
            "UPDATE empleados SET salario = salario * 1.05 WHERE salario < 3000;",
            "ALTER empleados SET salario = salario * 1.05 WHERE salario < 3000;",
        ],
        correct: "UPDATE empleados SET salario = salario * 1.05 WHERE salario < 3000;",
    }, {
        id: "3",
        question: "¿Cuál es la forma correcta de insertar un registro en una tabla llamada clientes?",
        options: [
            "INSERT INTO clientes (nombre, edad) VALUES ('Juan', 30);",
            "ADD TO clientes (nombre, edad) VALUES ('Juan', 30);",
            "INSERT clientes VALUES ('Juan', 30);",
            "INSERT INTO clientes VALUES (nombre='Juan', edad=30);",
        ],
        correct: "INSERT INTO clientes (nombre, edad) VALUES ('Juan', 30);",
    }, {
        id: "4",
        question: "Dada la tabla ventas con las columnas fecha y monto, ¿cómo se calcularía el total de ventas en un año específico?",
        options: [
            "SELECT SUM(monto) FROM ventas WHERE fecha = '2024';",
            "SELECT SUM(monto) FROM ventas WHERE YEAR(fecha) = 2024;",
            "SELECT TOTAL(monto) FROM ventas WHERE fecha = '2024';",
            "SELECT COUNT(monto) FROM ventas WHERE fecha = '2024';",
        ],
        correct: "SELECT SUM(monto) FROM ventas WHERE YEAR(fecha) = 2024;",
    }, {
        id: "5",
        question: "¿Cuál de las siguientes consultas eliminaría todos los registros de la tabla clientes?",
        options: [
            "DELETE * FROM clientes;",
            "DELETE FROM clientes;",
            "DROP clientes;",
            "REMOVE FROM clientes;",
        ],
        correct: "DELETE FROM clientes;",
    }, {
        id: "6",
        question: "¿Cómo se cambiaría el valor de la columna precio en la tabla productos para que sea un 10% mayor?",
        options: [
            "UPDATE productos SET precio = precio + 10;",
            "UPDATE productos SET precio = precio * 1.1;",
            "SET productos.precio = productos.precio * 1.1;",
            "ALTER productos SET precio = precio * 1.1;",
        ],
        correct: "UPDATE productos SET precio = precio * 1.1;"
    }, {
        id: "7",
        question: "¿Qué comando se usa para crear una nueva tabla en una base de datos?",
        options: [
            "CREATE NEW TABLE",
            "INSERT TABLE",
            "ADD TABLE",
            "CREATE TABLE",
        ],
        correct: "CREATE TABLE",
    }, {
        id: "8",
        question: "¿Cuál es la manera correcta de seleccionar registros únicos de la columna ciudad en la tabla clientes?",
        options: [
            "SELECT ALL ciudad FROM clientes;",
            "SELECT DIFFERENT ciudad FROM clientes;",
            "SELECT UNIQUE ciudad FROM clientes;",
            "SELECT DISTINCT ciudad FROM clientes;",
        ],
        correct: "SELECT DISTINCT ciudad FROM clientes;",
    }, {
        id: "9",
        question: "Si quieres devolver los 5 registros con los precios más altos de la tabla productos, ¿cuál sería la consulta?",
        options: [
            "SELECT * FROM productos ORDER BY precio ASC LIMIT 5;",
            "SELECT * FROM productos WHERE precio TOP 5;",
            "SELECT TOP 5 * FROM productos ORDER BY precio DESC;",
            "SELECT * FROM productos ORDER BY precio DESC LIMIT 5;",
        ],
        correct: "SELECT * FROM productos ORDER BY precio DESC LIMIT 5;",
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
        count = 11;
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
    count = 11;
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