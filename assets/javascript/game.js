var wins=0;
var losses=0;
var guessesLeft=9;
var guesses=0;
var computerGuess=0;
var randomLetter=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   
function stats(){
    document.getElementById("wins").innerHTML="Wins: "+wins;
    document.getElementById("losses").innerHTML="Losses: "+losses;
    document.getElementById("guessesLeft").innerHTML="Guesses Left: "+guessesLeft;
    document.getElementById("guesses").innerHTML="Your Guesses So Far: "+guesses;
}

function randomizer(){
    computerGuess=randomLetter[Math.floor(Math.random()*randomLetter.length)];
    console.log("Computer Guess: "+computerGuess);
}

stats();
randomizer();

document.onkeyup=function(event){
    var letterGuess=event.key.toLowerCase();
    
    if(letterGuess!==computerGuess){
        guesses++;
        guessesLeft--;
        stats();
    }
    if(letterGuess===computerGuess){
        wins++;
        guesses=0;
        guessesLeft=9;
        stats();
        randomizer();
    }
    if(guessesLeft===0){
        losses++;
        guesses=0;
        guessesLeft=9;
        stats();
        randomizer();
    }
}