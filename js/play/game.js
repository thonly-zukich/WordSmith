let glossaryEntries = [];
let pickedWords = [];
let currentTranslation = '';
let currentWord = '';
let timer = 0;
let timerInterval;
let points = 0;
let startTime;

const gameSelectors = {
    glossaryList: '#glossary-words-list',
    launchBtn: '#launch-btn',
    gameModal: '#game-modal',
    closeModalBtn: '.close-btn',
    translationElement: '#translation',
    answerInput: '#answer',
    checkBtn: '#check',
    timerElement: '#timer',
    gradeStatusElement: '#grade-status',
    pointsElement: '#points'
};

function getGameElements() {
    return {
        glossaryList: document.querySelector(gameSelectors.glossaryList),
        launchBtn: document.querySelector(gameSelectors.launchBtn),
        gameModal: document.querySelector(gameSelectors.gameModal),
        closeModalBtn: document.querySelector(gameSelectors.closeModalBtn),
        translationElement: document.querySelector(gameSelectors.translationElement),
        answerInput: document.querySelector(gameSelectors.answerInput),
        checkBtn: document.querySelector(gameSelectors.checkBtn),
        timerElement: document.querySelector(gameSelectors.timerElement),
        gradeStatusElement: document.querySelector(gameSelectors.gradeStatusElement),
        pointsElement: document.querySelector(gameSelectors.pointsElement)
    };
}

const gameElements = getGameElements();

function loadGlossary() {
    const storedGlossary = localStorage.getItem('glossaryEntries');
    if (storedGlossary) {
        glossaryEntries = JSON.parse(storedGlossary);
        displayGlossary();
    }
}

function displayGlossary() {
    gameElements.glossaryList.innerHTML = '';
    glossaryEntries.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${entry.english} - ${entry.translation}`;
        li.addEventListener('click', () => togglePickWord(index));
        gameElements.glossaryList.appendChild(li);
    });
}

function togglePickWord(index) {
    const entry = glossaryEntries[index];
    const li = gameElements.glossaryList.children[index];
    if (pickedWords.includes(entry)) {
        pickedWords = pickedWords.filter(word => word !== entry);
        li.classList.remove('highlighted');
    } else {
        pickedWords.push(entry);
        li.classList.add('highlighted');
    }
}

function openModal() {
    if (pickedWords.length === 0) {
        alert('Please pick some words to play with!');
        return;
    }
    resetGame();
    showNextTranslation();
    gameElements.gameModal.style.display = 'block';
}

function closeModal() {
    gameElements.gameModal.style.display = 'none';
    clearInterval(timerInterval);
}

function resetGame() {
    timer = 0;
    points = 0;
    startTime = null;
    pickedWords = shuffleArray(pickedWords);
    updateTimer();
    updatePoints();
    updateGradeStatus();
}

function showNextTranslation() {
    if (pickedWords.length === 0) {
        endGame();
        return;
    }
    const entry = pickedWords.pop();
    currentTranslation = entry.translation;
    currentWord = entry.english;
    gameElements.translationElement.textContent = currentTranslation;
    gameElements.answerInput.value = '';
    startTime = Date.now();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer = Math.floor((Date.now() - startTime) / 1000);
        updateTimer();
        updateGradeStatus();
    }, 1000);
}

function updateTimer() {
    gameElements.timerElement.textContent = `${timer}s ⏰`;
}

function updateGradeStatus() {
    let grade;
    let color;
    if (timer <= 5) {
        grade = 'S';
        color = 'gold';
    } else if (timer <= 10) {
        grade = 'A';
        color = 'silver';
    } else if (timer <= 15) {
        grade = 'B';
        color = 'bronze';
    } else if (timer <= 30) {
        grade = 'C';
        color = 'initial';
    } else {
        grade = 'F';
        color = 'initial';
    }
    gameElements.gradeStatusElement.textContent = `Grade: ${grade}`;
    gameElements.gradeStatusElement.style.color = color;
}

function updatePoints() {
    gameElements.pointsElement.textContent = `Points: ${points}`;
}

function checkAnswer() {
    const userAnswer = gameElements.answerInput.value.trim().toLowerCase();
    if (userAnswer === currentWord.toLowerCase()) {
        let pointsToAdd;
        if (timer <= 5) {
            pointsToAdd = 1000;
        } else if (timer <= 10) {
            pointsToAdd = 500;
        } else if (timer <= 15) {
            pointsToAdd = 300;
        } else if (timer <= 30) {
            pointsToAdd = 200;
        } else {
            pointsToAdd = 100;
        }
        points += pointsToAdd;
        updatePoints();
        showNextTranslation();
    } else {
        alert('Incorrect! Try again.');
    }
}

function endGame() {
    clearInterval(timerInterval);
    alert(`Game over! You scored ${points} points.`);
    closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
    loadGlossary();
    setupEventListeners();
});

function setupEventListeners() {
    gameElements.launchBtn.addEventListener('click', openModal);
    gameElements.closeModalBtn.addEventListener('click', closeModal);
    gameElements.checkBtn.addEventListener('click', checkAnswer);
}
