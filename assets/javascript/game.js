var wins = 0;
var losses = 0;
var guessesLeft = 5;
var userGuesses = document.getElementById("guesses"); 
var winsCount = document.getElementById("wins");
var lossesCount = document.getElementById("losses");
var guessesCount = document.getElementById("guessesLeft");
var options = 'abcdefghijklmnopqrstuvwxyz';

document.getElementById('btn').onclick = function(){ 
	console.log('reset')
	guessesLeft = 5;
	guessesCount.innerHTML = guessesLeft;

	userGuesses.innerHTML = '';
	winsCount.innerHTML = '0';
	lossesCount.innerHTML = 0;
	losses = 0;
}

document.onkeyup = function(event) {

	if (guessesLeft==0) {
		return;
	}	
	console.log('guess left::', guessesLeft)
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerGuess = options[Math.floor(Math.random()*options.length)];
	// console.log('user:: ', userGuess, 'computer::', computerGuess);
	userGuesses.innerHTML += userGuess;
	if (userGuess===computerGuess) {
		console.log('YOU WIN');
		wins += 1;
		winsCount.innerHTML = wins;
	}
	else {
		losses +=1;
		lossesCount.innerHTML = losses;
		guessesLeft--;
		guessesCount.innerHTML =  guessesLeft;
	}
};


