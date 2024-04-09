let numeroCasuale = Math.floor(Math.random() * 100) + 1;
let tentativiRimasti = 5;

function verificaNumero() {
    let tentativo = parseInt(document.getElementById('userGuess').value);
    let feedback = document.getElementById('feedback');
    let tentativiFeedback = document.getElementById('tentativiFeedback');

    if (!tentativo) {
        feedback.textContent = 'Per favore, inserisci un numero valido.';
        feedback.style.color = '#d32f2f';
        return;
    }

    tentativiRimasti--;
    tentativiFeedback.textContent = `Tentativi rimasti: ${tentativiRimasti}`;

    if (tentativo === numeroCasuale) {
        feedback.textContent = 'Complimenti! Hai indovinato il numero.';
        feedback.style.color = '#388e3c';
        setTimeout(() => window.location.reload(), 3000);
    } else if (tentativiRimasti <= 0) {
        feedback.textContent = `Mi dispiace, hai esaurito i tentativi. Il numero era: ${numeroCasuale}.`;
        feedback.style.color = '#d32f2f';
        setTimeout(() => window.location.reload(), 5000);
    } else {
        feedback.textContent = tentativo < numeroCasuale ? 'Più alto. Prova ancora!' : 'Più basso. Prova ancora!';
        feedback.style.color = '#ffa000';
    }
}

function mostraPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('userGuess').value = ''; // Resetta l'input
    document.getElementById('feedback').textContent = ''; // Resetta il feedback
    tentativiRimasti = 5; // Resetta i tentativi
    document.getElementById('tentativiFeedback').textContent = `Tentativi rimasti: ${tentativiRimasti}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startGame').addEventListener('click', mostraPopup);
});
