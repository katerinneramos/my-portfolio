function checkCommand(inputId, correctCommand, challengeNumber) {
    const command = document.getElementById(inputId).value.trim().toLowerCase();
    const feedback = document.getElementById(`feedback-${challengeNumber}`);

    if (command === correctCommand) {
        feedback.textContent = "¡Correcto! Has ingresado el comando correcto.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Comando incorrecto. Intenta nuevamente.";
        feedback.style.color = "red";
    }
}
