document.addEventListener("DOMContentLoaded", () => {
    loadProgress();
    loadExercise();
});

let score = 0;
let currentExercise = 0;
let timer;
let timeLeft = 60;

const exercises = [
    {
        description: "Crea una máquina virtual en GCP llamada 'my-vm'.",
        command: "gcloud compute instances create my-vm",
        explanation: "Este comando crea una VM en Compute Engine. Usa 'gcloud compute instances create' seguido del nombre deseado."
    },
    {
        description: "Crea un bucket de almacenamiento llamado 'my-bucket'.",
        command: "gcloud storage buckets create my-bucket",
        explanation: "Los buckets se crean con 'gcloud storage buckets create' seguido del nombre."
    },
    {
        description: "Lista las instancias de máquinas virtuales.",
        command: "gcloud compute instances list",
        explanation: "'gcloud compute instances list' este comando muestra todas las VMs disponibles en tu proyecto."
    }
];

function loadExercise() {
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById("timer").textContent = timeLeft;

    if (currentExercise >= exercises.length) {
        document.getElementById("exerciseDesc").textContent = "¡Has completado todos los ejercicios!";
        document.getElementById("terminal").style.display = "none";  // Oculta la terminal si ya se completaron los ejercicios.
        return;
    }

    // Asegurarse de mostrar la descripción del ejercicio en el HTML
    document.getElementById("exerciseDesc").textContent = exercises[currentExercise].description;
    document.getElementById("output").innerHTML = "";

    // Comienza el temporizador para este ejercicio
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("output").innerHTML = "<p style='color:red;'>⏳ Tiempo agotado. Intenta de nuevo.</p>";
        }
    }, 1000);
}

function executeCommand() {
    let input = document.getElementById("commandInput").value.trim();
    let outputDiv = document.getElementById("output");

    if (currentExercise >= exercises.length) return;

    if (input === exercises[currentExercise].command) {
        outputDiv.innerHTML = `<p style="color:green;">✅ Correcto: ${exercises[currentExercise].command}</p>`;
        score += timeLeft * 10;
        document.getElementById("score").textContent = score;
        saveProgress();
        unlockBadge(currentExercise);
    } else {
        outputDiv.innerHTML = `<p style="color:red;">❌ Incorrecto. Explicación: ${exercises[currentExercise].explanation}</p>`;
    }
}

function nextExercise() {
    if (currentExercise < exercises.length) {
        currentExercise++;
        loadExercise();
    }
}

function saveProgress() {
    localStorage.setItem("gcpProgress", JSON.stringify({ currentExercise, score }));
    checkAchievements();
}

function loadProgress() {
    let progress = JSON.parse(localStorage.getItem("gcpProgress")) || { currentExercise: 0, score: 0 };
    currentExercise = progress.currentExercise;
    score = progress.score;
    document.getElementById("score").textContent = score;
    checkAchievements();
}

function checkAchievements() {
    let badgesDiv = document.getElementById("badges");
    badgesDiv.innerHTML = "<p>Insignias obtenidas:</p>";

    if (currentExercise >= 1) badgesDiv.innerHTML += "<p>🖥️ Creaste una VM</p>";
    if (currentExercise >= 2) badgesDiv.innerHTML += "<p>📦 Creaste un bucket</p>";
    if (currentExercise >= 3) badgesDiv.innerHTML += "<p>📄 Listaste las VMs</p>";
}

function unlockBadge(index) {
    let badgesDiv = document.getElementById("badges");
    if (index === 0) badgesDiv.innerHTML += "<p>🖥️ Creaste una VM</p>";
    if (index === 1) badgesDiv.innerHTML += "<p>📦 Creaste un bucket</p>";
    if (index === 2) badgesDiv.innerHTML += "<p>📄 Listaste las VMs</p>";
}

function resetProgress() {
    localStorage.removeItem("gcpProgress");
    document.getElementById("output").innerHTML = "";
    document.getElementById("badges").innerHTML = "";
    document.getElementById("score").textContent = "0";
    currentExercise = 0;
    score = 0;
    loadExercise();
}
