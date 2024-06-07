// Pig Latin Translator 

function PigLatin(word) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(word[0].toLowerCase())) {
        return word + 'ehe';
    } else {
        return word.slice(1) + word[0] + 'eh';
    }
}

function translateSentence(sentence) {

    const words = sentence.split(' ');
    const translatedWords = words.map(word => PigLatin(word.toLowerCase()));
    return translatedWords.join(' ');
}

const readline = require('readline').createInterface({
    
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a sentence: ', (sentence) => {
    
    const translatedSentence = translateSentence(sentence);
    console.log(`Pig Latin: ${translatedSentence}`);
    readline.close();
});