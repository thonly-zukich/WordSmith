const domSelectors = {
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

function getDomElements() {
    return {
        glossaryList: document.querySelector(domSelectors.glossaryList),
        launchBtn: document.querySelector(domSelectors.launchBtn),
        gameModal: document.querySelector(domSelectors.gameModal),
        closeModalBtn: document.querySelector(domSelectors.closeModalBtn),
        translationElement: document.querySelector(domSelectors.translationElement),
        answerInput: document.querySelector(domSelectors.answerInput),
        checkBtn: document.querySelector(domSelectors.checkBtn),
        timerElement: document.querySelector(domSelectors.timerElement),
        gradeStatusElement: document.querySelector(domSelectors.gradeStatusElement),
        pointsElement: document.querySelector(domSelectors.pointsElement)
    };
}

const domElements = getDomElements();
