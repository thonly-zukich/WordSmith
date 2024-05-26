function setupEventListeners() {
    const elements = getDomElements();
    elements.launchBtn.addEventListener('click', openModal);
    elements.closeModalBtn.addEventListener('click', closeModal);
    elements.checkBtn.addEventListener('click', checkAnswer);
}

document.addEventListener('DOMContentLoaded', () => {
    loadGlossary();
    setupEventListeners();
});
