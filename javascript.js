let count = 0
function getComputerChoice(){
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];
}

function playRound(e){
    let playerSelection = 0;
    computerSelection = getComputerChoice();
    playerSelection = e.target.textContent
    if(playerSelection == computerSelection){
        div.textContent= "Its a tie";
        return ;
    }
    switch (playerSelection){
        case "Rock":
            if (computerSelection == "Paper"){
                count++;
                div.textContent = "You Lose! Paper beats Rock";
                return }
            else{
                div.textContent = "You Win! Rock breaks Scissors"
                return ;
            }
        case "Paper":
            if (computerSelection == "Scissors"){
                count++;
                div.textContent= "You Lose! Scissors beats Papper"
                return }
            else{
                div.textContent= "You Win! Paper covers Rock"
                return ;
            }
        case "Scissors":
            if (computerSelection == "Rock"){
                count++;
                div.textContent = "You Lose! Rock beats Scissors";
                return}
            else{
                div.textContent = "You Win! Scissors beats Paper";
                return ;
            }
    }
    
}


const div = document.querySelector("div");

const Rock = document.querySelector("#Rock");
Rock.addEventListener('click',playRound);
console.log(Rock);
const Paper =document.querySelector("#Paper");
Paper.addEventListener('click',playRound);
const Scissors = document.querySelector("#Scissors");
Scissors.addEventListener('click', playRound);





