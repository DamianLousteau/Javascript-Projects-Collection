// A program that detects if words are a paildrome or not.
// First things first, creating a prompt so the user can enter in a word and store the data.
let input = prompt('Please enter a single word and the following program will dertermine if the word is a palindrome.').toLowerCase();

let len = input.length;  // This is so we can calculate the length of the string.
let reverse = "";   // This help later to reverse the string.

// Creating a for loop so that it can run through and reverse the user input 'string' so it can determine if it is the same word reading forwards and backwards.
for (let i = 0; i < len; i++){
  reverse += input[len -i -1];    
};

// If and else statements to help create conditions that are ideal, and tell you if the word is or is not a palindrome. 
if (input == reverse){
  alert ('This is a Palindrome.');
} else {
  alert ('This is not a Palindrome.');
};