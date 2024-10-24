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
let count = 31;
let countdown;

//10 questions with options and answer array
const quizArray = [
    {
        id: "0",
        question: "¿Qué es SQL?",
        options: [
            "Un lenguaje de programación orientado a objetos.",
            "Un lenguaje para el diseño de sitios web.",
            "Un lenguaje para manipular y consultar bases de datos relacionales.",
            "Un sistema operativo",
        ],
        correct: "Un lenguaje para manipular y consultar bases de datos relacionales.",
    }, {
        id: "1",
        question: "¿Qué significa la cláusula WHERE en una consulta SQL?",
        options: [
            "Especifica qué columnas serán devueltas en la consulta.",
            "Filtra los registros que serán devueltos por la consulta.",
            "Cambia el orden de los registros devueltos.",
            "Especifica las bases de datos a las que se conectará.",
        ],
        correct: "Filtra los registros que serán devueltos por la consulta.",
    }, {
        id: "2",
        question: "¿Cuál de las siguientes opciones no es un tipo de dato común en SQL?",
        options: [
            "INTEGER.",
            "DATE.",
            "CHAR.",
            "OBJECT.",
        ],
        correct: "OBJECT.",
    }, {
        id: "3",
        question: "¿Qué es una clave primaria (primary key) en una base de datos?",
        options: [
            "Un campo que se utiliza para referenciar a otra tabla.",
            "Un campo único que identifica cada registro en una tabla.",
            "Una función que suma los valores de un campo.",
            "Un índice que optimiza las consultas.",
        ],
        correct: "Un campo único que identifica cada registro en una tabla.",
    }, {
        id: "4",
        question: "¿Qué es una transacción en SQL?",
        options: [
            "Una consulta que solo lee datos",
            "Un índice para mejorar el rendimiento de la base de datos.",
            "Una tabla que almacena registros eliminados.",
            "Un conjunto de operaciones que deben ejecutarse juntas.",
        ],
        correct: "Un conjunto de operaciones que deben ejecutarse juntas.",
    }, {
        id: "5",
        question: "¿Cuál de las siguientes no es una función de agregación en SQL?",
        options: [
            "SUM.",
            "AVG.",
            "COUNT.",
            "JOIN.",
        ],
        correct: "JOIN.",
    }, {
        id: "6",
        question: "¿Qué es un índice en una base de datos?",
        options: [
            "Una copia completa de una tabla.",
            "Un campo que contiene valores duplicados.",
            "Una estructura que mejora la velocidad de las consultas.",
            "Una función que calcula promedios.",
        ],
        correct: "Una estructura que mejora la velocidad de las consultas.",
    }, {
        id: "7",
        question: "¿Cuál de las siguientes opciones se usa para cambiar el nombre de una columna en el resultado de una consulta?",
        options: [
            "ALTER.",
            "RENAME.",
            "SET.",
            "AS.",
        ],
        correct: "AS.",
    }, {
        id: "8",
        question: "¿Qué tipo de JOIN devuelve todas las filas cuando hay una coincidencia en una de las tablas, y todas las filas de la otra tabla aunque no haya coincidencia?",
        options: [
            "INNER JOIN.",
            "LEFT JOIN.",
            "RIGHT JOIN.",
            "FULL OUTER JOIN.",
        ],
        correct: "FULL OUTER JOIN.",
    }, {
        id: "9",
        question: "¿Qué función cumple la palabra clave JOIN en SQL?",
        options: [
            "Inserta registros en una tabla.",
            "Borra registros de una tabla.",
            "Une filas de dos o más tablas basándose en una condición relacionada.",
            "Actualiza registros en una tabla.",
        ],
        correct: "Une filas de dos o más tablas basándose en una condición relacionada.",
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
        count = 31;
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
    count = 31;
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