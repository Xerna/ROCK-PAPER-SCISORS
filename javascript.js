let computerScore = 0;
let userScore = 0;

function computerPlay(){
    let result = Math.floor(Math.random()*3) +1;
    let computerChoice;
    switch(result){
        case 1:
            computerChoice = "piedra";
            break;
        case 2:
            computerChoice = "tijera";
            break;
        case 3:
            computerChoice = "papel";
            break;
    }
    return computerChoice;
}
function playerSelection(){
    let playerChoice = prompt("Choose rock paper or scisors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}
function playRound(playerSelection, computerChoice){
    console.log("Jugador escojio: " + playerSelection + " Computadora escojio: " + computerChoice);
    if(playerSelection == "tijera" && computerChoice == "piedra"){
        computerScore++;
    }else if(playerSelection == "piedra" && computerChoice == "tijera"){
        userScore++;
    }else if(playerSelection == "papel" && computerChoice == "piedra"){
        userScore++;
    }else if(playerSelection == "piedra" && computerChoice == "papel"){
        computerScore++;
    }else if(playerSelection == "tijera" && computerChoice == "papel"){
        userScore++;
    }else if(playerSelection == "papel" && computerChoice == "tijera"){
        computerScore++;
    }
    
}
function play(){
    playRound(playerSelection(),computerPlay());
    playRound(playerSelection(),computerPlay());
    playRound(playerSelection(),computerPlay());
    playRound(playerSelection(),computerPlay());
    playRound(playerSelection(),computerPlay());
    if(computerScore>userScore){
        alert("COMPUTER WINS")
    }else if(computerScore == userScore){
        alert("EMPATE")
    }else{
        alert("USER WINS");
    }
}
play();