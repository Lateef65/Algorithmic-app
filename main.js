// function countSentence(sentence) {
//     let sentenceLength = 0;
//     let numWords = 0;
//     let numVowels = 0;
    
//     const vowels = "aeiouAEIOU";
    
//     for (let i = 0; i < sentence.length; i++) {
//         const char = sentence[i];
//         sentenceLength++;
        
//         if (char === ' ') {
//             numWords++;
//         } else if (vowels.includes(char)) {
//             numVowels++;
//         }
//     }
    
//     // Adding 1 to numWords to account for the last word before the period
//     numWords++;
    
//     return [sentenceLength, numWords, numVowels];
// }

// // Example usage:
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const [length, words, vowels] = countSentence(sentence);
// console.log("Length of the sentence:", length);
// console.log("Number of words in the sentence:", words);
// console.log("Number of vowels in the sentence:", vowels);


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Pick the current element to be inserted
        const current = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element into the sorted sequence
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage:
const arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr.slice())); // slice() to avoid modifying the original array
g

