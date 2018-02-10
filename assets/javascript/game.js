

// Creates arrays to store possible computerChoices and userChoices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Creates variables to store wins, losses, guessesLeft, and letters alreadyGuessed
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alreadyGuessed = [];


//functions that update the wins, losses, guessesLeft
function resetGlobalVariables() {
    //list of all the variables with original attributes here
   guessesLeft = 9;
    alreadyGuessed = [];
    updateGuessesLeft();


}
function updateWins() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    //resetGlobalVariables();
    
}
function updateLosses() {
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    //resetGlobalVariables();
    
    
    
}
function updateGuessesLeft() {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

    if (guessesLeft < 1) {
        //document.getElementById("guessesLeft").innerHTML = "Game Over!";
        losses++;
        resetGlobalVariables();
        }

           
}



// FUNCTIONS
// ==============================================================================



updateWins();
updateLosses();
updateGuessesLeft();


//Creates a function that runs when the user presses a key
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    userGuess.textContent = event.key;
    

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    for (var i = 0; i < computerChoices.length; i++) {

    if ((userGuess === userChoices[i]) && (computerGuess === computerChoices[i])) {
        console.log("You win!");
        wins++;
        resetGlobalVariables();
        
        
    } else if ((userGuess === userChoices[i]) && (computerGuess != computerChoices[i])) {
        console.log("wrong");
        guessesLeft--;
        console.log(guessesLeft);
        
    }
    
        
}

    function updateAlreadyGuessed() {
        document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed.push(userGuess);
        document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;
    }
    updateAlreadyGuessed();
    updateGuessesLeft();
    updateWins();
    updateLosses();
}

