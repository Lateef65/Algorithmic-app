function countSentence(sentence) {
    let sentenceLength = 0;
    let numWords = 0;
    let numVowels = 0;
    
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        sentenceLength++;
        
        if (char === ' ') {
            numWords++;
        } else if (vowels.includes(char)) {
            numVowels++;
        }
    }
    
    // Adding 1 to numWords to account for the last word before the period
    numWords++;
    
    return [sentenceLength, numWords, numVowels];
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog.";
const [length, words, vowels] = countSentence(sentence);
console.log("Length of the sentence:", length);
console.log("Number of words in the sentence:", words);
console.log("Number of vowels in the sentence:", vowels);

