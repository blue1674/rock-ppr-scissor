function computerPlay() {
    let option = ["rock", "scissor", "paper"];
    let randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}



function declareWinner(winner, computerSelect, playerSelect) {
    if (winner === "None")
        return `It's a tie of two ${computerSelect}s.`;
    if (winner === "Computer")
        return `You Lose! ${computerSelect} beats ${playerSelect}!`;
    return `You Win! ${playerSelect} beats ${computerSelect}!`;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}
function game() {
    function playRound(playerSelection, computerSelection) {
        let options = {
            Rock: 0,
            Scissor: 1,
            Paper: 2,
        }
        let playerIndex = options[playerSelection];
        let computerIndex = options[computerSelection];
        let winner = "None";
        if (playerIndex === computerIndex)
            return winner;

        if ((playerIndex == computerIndex - 1) || (playerIndex == 0 && computerIndex == 1))
            winner = "Player";
        else
            winner = "Computer";
        return winner;


    }

    let scoreP = 0;
    let scoreC = 0;
    while(scoreP !== 5 && scoreC !== 5) {
        const playerSelection = capitalize(prompt("Rock/Paper/Scissor?"));
        const computerSelection = capitalize(computerPlay());
        let winner = playRound(playerSelection, computerSelection);
        alert(declareWinner(winner, computerSelection, playerSelection));
        if (winner === "Player")
            scoreP++;
        else if (winner === "Computer")
            scoreC++;
    }
    alert(`Your Score:${scoreP}\nComputer's Score: ${scoreC}`);
    if (scoreP > scoreC)
        alert(`You Win the game!`);
    else if (scoreP === scoreC)
        alert('It\'s a Tie!');
    else
        alert(`You lose the game!`);
}
game();