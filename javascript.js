function getComputerChoice(){
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Its a tie"
    }
    switch (playerSelection){
        case "Rock":
            if (computerSelection == "Paper"){
                return "You Lose! Paper beats Rock"}
            else{
                return "You Win! Rock breaks Scissors"
            }
        case "Paper":
            if (computerSelection == "Scissors"){
                return "You Lose! Scissors beats Papper"}
            else{
                return "You Win! Paper covers Rock"
            }
        case "Scissors":
            if (computerSelection == "Rock"){
                return "You Lose! Rock beats Scissors"}
            else{
                return "You Win! Scissors beats Paper"
            }
    }
    
}
function game(){
    let score = 0;
    for(let i=0; i<5; i++){
        let answer = prompt("enter choice")
        while( "Rock" !== answer && "Paper" !== answer && "Scissors" !== answer){
            answer = prompt("enter choice")
        }
        answer = playRound(answer, getComputerChoice())
        console.log(answer)
        if(answer.slice(0,8) == "You Win!"){
            console.log(1)
            score++;
        }
    }
    return score;
}
console.log(game())
