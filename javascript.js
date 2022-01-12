function computerPlay(){
    let result = Math.floor(Math.random()*3) +1;
    console.log(result);
    let computerChoice;
    switch(result){
        case 1:
            computerChoice = "Piedra";
            break;
        case 2:
            computerChoice = "Tijera";
            break;
        case 3:
            computerChoice = "Papel";
            break;
    }
    console.log(computerChoice);
    return computerChoice;
}
computerPlay();
function playerSelection(){
    let playerChoice = prompt("Choose rock paper or scisors");
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}
playerSelection();

function playRound(playerSelection, computerChoice){
    if(playerSelection == "tijeras" && computerChoice == "piedra"){
        console.log("Perdiste piedra le gana a tijeras");
    }
}