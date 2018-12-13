//test to see if Js is properly linked
var name = "Priyesh Patel";
console.log(name);

//create array of alphabet for computer choice
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// commands below confirms the array computerChoice is properly written showing length of 26 and all the letters on each line:
// console.log(computerChoice.length);
// for (var i = 0; i < computerChoice.length; i++) {
//   console.log(computerChoice[i]);
// }

//create variables for wins/losses/guessesleft/your guesses soo far
var wins = 0;
var losses = 0;
var guessesleft = 10;

//create variables that hold references to the places in the HTML where things are displayed
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("userchoice - text");
var guessesLeftText = document.getElementById("guesses-left");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var yourGuesses = document.getElementById("your-guesses");

//function for when A-Z is pressed
document.onkeyup = function (event) {

//determining which key is pressed
var userChoice = event.key.toLowerCase();


//registers key pressed in console
console.log(userChoice);



//randomly choosing from computer array for computer guess
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computerGuess);

//matching to see if key pressed matches the computer guess if correct player wins if wrong player looses guess and after 10 guesses a loss is registered on html page

if(userChoice !== computerGuess) {
 guessesleft--;
}
else if (guessesleft = 0) {
  alert("You Loose!");
  losses++;
  guessesleft = 10;
}
 else if (userChoice === computerGuess) {
wins++;
guessesleft = 10;
}

//displaying on which key is pressed and registering it on page
userChoiceText.textContent = "You chose: " + userChoice;
// computerChoiceText.textContent = "The computer chose: " + computerGuess;
guessesLeftText.textContent = "Guesses Left: " + guessesleft;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
yourGuesses.textContent = "Your Guesses: " + userChoice;

}

// how do I record key strokes with .write function?
// how do i reset the guesses?
// how do i reset recorded key storkes?








//testing to see if keyup function works with one key
// if (userChoice === "a") {
//   alert("a is pressed");
// }