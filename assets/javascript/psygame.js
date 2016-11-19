
// sanity code.....keeping it simple

console.log('Hello, World!')

// pseudo code for myself


// alphabet variable....for user input

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


// variables set to zero....

var wins = 0;
var loses = 0;

//variables for guessing
var guesses = x;
var guessesLeft = x;
var guessedLetters = [];
var letterToGuess = null;


//The computer select a random letter from the var alphabet

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//Allows the user 10 guesses
// guesses = guesses || 10




// Getting HTML element and setting it =  guessesLeft. ('guessesLeft' displayed in HTML)



// Here we take the guesses the user has tried -- then display it as letters separated by commas.



// Function will be called when we reset everything




//When key is released it becomes the users guess

document.onkeyup = function(event) {




	// win update & html to display the win 


	// loss & html to display the loss 


	// Reset & reset button or automatic....leaning on automatic


}










