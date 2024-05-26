function setupEventListeners() {
    elements.modeSwitch.addEventListener('change', (event) => {
        mode = event.target.value;
        toggleMode();
    });

    elements.checkBtn.addEventListener('click', checkAnswer);
    elements.addBtn.addEventListener('click', addWord);
    elements.nextWordBtn.addEventListener('click', displayNewWord);
    elements.saveWordsBtn.addEventListener('click', saveWords);
    elements.clearGlossaryBtn.addEventListener('click', clearGlossary);

    elements.closeBtn.addEventListener('click', closeModal);
    elements.saveEditBtn.addEventListener('click', saveEdit);
}
