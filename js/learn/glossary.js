let mode = 'random';
let wordsList = [];
let learnedWords = [];
let glossaryEntries = [];
let currentWordIndex = -1;
let currentEditIndex = -1;

function loadGlossary() {
    const storedGlossary = localStorage.getItem('glossaryEntries');
    if (storedGlossary) {
        glossaryEntries = JSON.parse(storedGlossary);
        displayGlossary();
    }
}

function toggleMode() {
    if (mode === 'random') {
        elements.checkBtn.style.display = 'inline-block';
        elements.addBtn.style.display = 'none';
        elements.nextWordBtn.style.display = 'inline-block';
        elements.answerInput.placeholder = 'Now rewrite the word above!📝';
        displayNewWord();
    } else if (mode === 'author') {
        elements.checkBtn.style.display = 'none';
        elements.addBtn.style.display = 'inline-block';
        elements.nextWordBtn.style.display = 'none';
        elements.wordDisplay.textContent = 'Enter your own word';
        elements.answerInput.value = '';
        elements.answerInput.placeholder = 'Write your own word here!📝';
        elements.message.textContent = '';
        elements.saveWordsBtn.disabled = false;
    }
}

function checkAnswer() {
    const userAnswer = elements.answerInput.value.trim().toLowerCase();
    const currentWord = wordsList[currentWordIndex];
    if (userAnswer === currentWord.english) {
        elements.message.textContent = 'Correct! Well done.';
        elements.message.style.color = 'green';
        learnedWords.push(currentWord);
        displayLearnedWords();
    } else {
        elements.message.textContent = 'Incorrect. Try again.';
        elements.message.style.color = 'red';
    }
}

function addWord() {
    const userWord = elements.answerInput.value.trim();
    if (userWord) {
        const newWord = { english: userWord };
        learnedWords.push(newWord);
        displayLearnedWords();
        elements.answerInput.value = '';
        elements.message.textContent = 'Word added successfully!';
        elements.message.style.color = 'green';
    } else {
        elements.message.textContent = 'Please enter a word.';
        elements.message.style.color = 'red';
    }
}

function saveWords() {
    const translationInputs = document.querySelectorAll('.translation-input');
    translationInputs.forEach((input, index) => {
        const userTranslation = input.value.trim();
        if (userTranslation) {
            const currentWord = { ...learnedWords[index], translation: userTranslation };
            glossaryEntries.push(currentWord);
        }
    });

    displayGlossary();
    clearLearnedWords();
    elements.saveWordsBtn.disabled = false;
    elements.message.textContent = 'Translations saved successfully!';
    elements.message.style.color = 'green';

    saveGlossary();
}

function clearLearnedWords() {
    learnedWords = [];
    elements.learnedWordsList.innerHTML = '';
}

function displayLearnedWords() {
    elements.learnedWordsList.innerHTML = '';
    learnedWords.forEach(word => {
        const li = document.createElement('li');
        li.textContent = `${capitalizeFirstLetter(word.english)} - `;
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Write translation here';
        input.className = 'translation-input';
        li.appendChild(input);
        elements.learnedWordsList.appendChild(li);
    });
}

function displayGlossary() {
    elements.glossaryList.innerHTML = '';
    glossaryEntries.forEach((word, index) => {
        const li = document.createElement('li');
        li.className = 'glossary-item';

        const wordContainer = document.createElement('div');
        const englishWord = document.createElement('span');
        englishWord.textContent = hyphenateWord(capitalizeFirstLetter(word.english));
        englishWord.style.textDecoration = 'underline';
        wordContainer.appendChild(englishWord);
        wordContainer.appendChild(document.createTextNode(` - ${word.translation || 'Not translated'}`));
        li.appendChild(wordContainer);

        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'glossary-actions';

        const editBtn = document.createElement('span');
        editBtn.textContent = 'Edit';
        editBtn.style.color = 'gray';
        editBtn.style.textDecoration = 'underline';
        editBtn.style.cursor = 'pointer';
        editBtn.addEventListener('click', () => openModal(index));
        actionsContainer.appendChild(editBtn);

        const removeBtn = document.createElement('span');
        removeBtn.textContent = 'Remove';
        removeBtn.style.color = 'gray';
        removeBtn.style.textDecoration = 'underline';
        removeBtn.style.cursor = 'pointer';
        removeBtn.style.marginLeft = 'auto';
        removeBtn.addEventListener('click', () => removeWord(index));
        actionsContainer.appendChild(removeBtn);

        li.appendChild(actionsContainer);
        elements.glossaryList.appendChild(li);
    });
}

function openModal(index) {
    currentEditIndex = index;
    const word = glossaryEntries[index];
    elements.editTranslationInput.value = word.translation;
    elements.editModal.style.display = 'block';
}

function closeModal() {
    elements.editModal.style.display = 'none';
}

function saveEdit() {
    const newTranslation = elements.editTranslationInput.value.trim();
    if (newTranslation) {
        glossaryEntries[currentEditIndex].translation = newTranslation;
        displayGlossary();
        saveGlossary();
        closeModal();
    } else {
        alert('Please enter a translation.');
    }
}

function removeWord(index) {
    glossaryEntries.splice(index, 1);
    displayGlossary();
    saveGlossary();
}

function clearGlossary() {
    glossaryEntries = [];
    displayGlossary();
    saveGlossary();
}

function saveGlossary() {
    localStorage.setItem('glossaryEntries', JSON.stringify(glossaryEntries));
}

function fetchWords() {
    fetch('https://random-word-api.herokuapp.com/word?number=50')
        .then(response => response.json())
        .then(data => {
            wordsList = data.map(word => ({ english: word }));
            displayNewWord();
        })
        .catch(error => {
            console.error('Error fetching words:', error);
            elements.message.textContent = 'Error fetching words. Please try again later.';
            elements.message.style.color = 'red';
        });
}

function displayNewWord() {
    if (mode === 'random') {
        if (wordsList.length === 0) {
            fetchWords();
        } else {
            currentWordIndex = Math.floor(Math.random() * wordsList.length);
            const currentWord = wordsList[currentWordIndex];
            elements.wordDisplay.textContent = capitalizeFirstLetter(currentWord.english);
            elements.answerInput.value = '';
            elements.message.textContent = '';
            elements.saveWordsBtn.disabled = false;
        }
    }
}
