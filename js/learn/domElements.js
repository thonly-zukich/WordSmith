const selectors = {
    saveWordsBtn: '#save-words-btn',
    wordDisplay: '#word-display',
    answerInput: '#answer-input',
    message: '#message',
    checkBtn: '#check-btn',
    addBtn: '#add-btn',
    nextWordBtn: '#next-word-btn',
    learnedWordsList: '#learned-words-list',
    glossaryList: '#glossary-list',
    modeSwitch: '.mode-switch',
    clearGlossaryBtn: '#clear-glossary-btn',
    editModal: '#edit-modal',
    closeBtn: '.close-btn',
    editTranslationInput: '#edit-translation-input',
    saveEditBtn: '#save-edit-btn',
};

function getElements() {
    return {
        saveWordsBtn: document.querySelector(selectors.saveWordsBtn),
        wordDisplay: document.querySelector(selectors.wordDisplay),
        answerInput: document.querySelector(selectors.answerInput),
        message: document.querySelector(selectors.message),
        checkBtn: document.querySelector(selectors.checkBtn),
        addBtn: document.querySelector(selectors.addBtn),
        nextWordBtn: document.querySelector(selectors.nextWordBtn),
        learnedWordsList: document.querySelector(selectors.learnedWordsList),
        glossaryList: document.querySelector(selectors.glossaryList),
        modeSwitch: document.querySelector(selectors.modeSwitch),
        clearGlossaryBtn: document.querySelector(selectors.clearGlossaryBtn),
        editModal: document.querySelector(selectors.editModal),
        closeBtn: document.querySelector(selectors.closeBtn),
        editTranslationInput: document.querySelector(selectors.editTranslationInput),
        saveEditBtn: document.querySelector(selectors.saveEditBtn),
    };
}

const elements = getElements();
