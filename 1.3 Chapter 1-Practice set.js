//PRACTICE SET FOR CHAPTER 1//
//Please refer to this rep only after completing the chapter 1
//try to solve these question on your own if not use the aanswers as reference

//1)Create a variable of type string and try to add a number to it
// Declare a string variable
var myString = 'Hello ';

// Add a number to the string
var myNumber = 42;
var result = myString + myNumber;

// Display the result
console.log(result); // Output: Hello 42

//2) use type of operator to find te datatype of string in the last question

// Declare a string variable
var myString = 'Hello ';

// Add a number to the string
var myNumber = 42;
var result = myString + myNumber;

// Use typeof to check the data type
console.log(typeof result); // Output: string

//3) create a const object in javascript can you change it to hold a number later?

//HINT 101-In JavaScript, const is used to declare constants, meaning that the identifier cannot be reassigned. However, when dealing with objects declared using const, the content of the object (i.e., its properties and their values) can still be modified.

// Create a const object
const myObject = {
  key: 'value',
};

// Try to change a property of the object
myObject.key = 42;

// Display the modified object
console.log(myObject); // Output: { key: 42 }

//4) TRY TO ADD A NEW KEY TO THE CONST OBJECT IN PROBLEM 3 were you able to do it?

// Create a const object
const myObject = {
  key: 'value',
};

// Try to add a new key to the object
myObject.newKey = 'new value';

// Display the modified object
console.log(myObject); // Output: { key: "value", newKey: "new value" }

//5) write a root 5 problem to create a word meaning dictionary of 5 words

// Initialize an empty dictionary object
const wordDictionary = {};

// Function to prompt the user for word meanings
function buildWordDictionary(word) {
  // Prompt the user for the meaning of the word
  const meaning = prompt(`Enter the meaning of the word "${word}":`);

  // Add the word and its meaning to the dictionary
  wordDictionary[word] = meaning;
}

// Prompt the user for meanings of five words
buildWordDictionary('apple');
buildWordDictionary('resilient');
buildWordDictionary('exquisite');
buildWordDictionary('ephemeral');
buildWordDictionary('serendipity');

// Display the word meaning dictionary
console.log('Word Meaning Dictionary:');
for (const word in wordDictionary) {
  console.log(`${word}: ${wordDictionary[word]}`);
}

//THE END//
//Please refer to this rep only after completing the chapter 1
//try to solve these question on your own if not use the aanswers as reference
