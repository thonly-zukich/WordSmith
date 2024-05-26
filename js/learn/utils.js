function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function hyphenateWord(word, maxLength = 30) {
    let hyphenated = '';
    while (word.length > maxLength) {
        hyphenated += word.slice(0, maxLength) + '-\n';
        word = word.slice(maxLength);
    }
    return hyphenated + word;
}
