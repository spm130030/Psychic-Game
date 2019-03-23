// letters that the user can guess from
var computerChoices = ["a", "b", "c", "d", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
// setting to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userLetter = [];
var eachofLetters = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
}

function farUserGuesses() {
    document.querySelector("#letter").innerHTML = "Your Guesses so far:" + userLetter.join(' ');
}

countGuessesLeft();

var restart = function() {
    guessesLeft = 9;
    userLetter = [];
    computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];

}
document.onkeyup = function(event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    userLetter.push(userGuess);
    countGuessesLeft();
    farUserGuesses();

    if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
        restart();
    }
    else if (guessesLeft === 0) {
    losses++;
    document.querySelector("#lose").innerHTML = "Losses:" + losses;
    restart();
    }
};
