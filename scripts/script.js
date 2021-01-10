let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("comp-score");

function game(event){
document.getElementById("scoreBoard").style.visibility = "visible"; 
playButton.removeEventListener("click", game);
function computerPlay() {
    let option = ["rock", "scissor", "paper"];
    let randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}
function playRound(event, playerSelect) {
    let compSelect = computerPlay();
    let compImage = "comp-" + compSelect;
    document.getElementById(compImage).style.cssText = "transform: scale(1.2);"; 
    let options = {
        rock: 0,
        scissor: 1,
        paper: 2,
    };
    let compIndex = options[compSelect];
    let playerIndex = options[playerSelect];
    let winner;
    if ((playerIndex === compIndex - 1) || (playerIndex === 2 && compIndex === 0)) {
        winner = "You";
        playerScore.textContent = `${++playerScore.textContent}`;
    }
    else if (playerIndex === compIndex)
        winner = "No one";
    else {
        winner = "Robot";
        compScore.textContent = `${++compScore.textContent}`;
    }
    document.getElementById("whoWon").innerHTML = `${winner.toUpperCase()} won this round!`;
    setTimeout(function() {
    document.getElementById(compImage).style.cssText = "transform: scale(1);"; 
    }, 500);
    if (compScore.textContent === '5' || playerScore.textContent === '5') {
        setTimeout(function() {
            alert(`${winner} won the game!`); window.location.reload();
        },100)
        
    }
    return winner;
}

const rock = document.querySelector("#rock");
const ppr = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", (event) => playRound(event, "rock"));
ppr.addEventListener("click", (event) => playRound(event, "paper"));
scissor.addEventListener("click", (event) => playRound(event, "scissor"));
}
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", game);
playButton.addEventListener("click", (e) => {
    e.target.style.cssText = "box-shadow: 0 0 5px 10px  rgba(9, 240, 228, 0.3);"; 
    e.target.textContent = "Now Playing..."; 
})






















// function game() {
//     // Function to modify the text content of the paragraph
//     const changeText = () => {
//         const p = document.querySelector('p');

//         p.textContent = "I changed because of an event handler property.";
//     }

//     // Add event handler as a property of the button element
//     const button = document.querySelector('button');
//     button.onclick = changeText;


//     let scoreP = 0;
//     let scoreC = 0;
//     function playRound(playerSelection, computerSelection) {
//         let options = {
//             Rock: 0,
//             Scissor: 1,
//             Paper: 2,
//         }
//         const compImage = document.getElementsByClassName('compImage');
//         let index;
//         if (computerSelection === "Rock") {
//             index = 0;
//         }
//         else if (computerSelection === "Paper") {
//             index = 1;
//         }
//         else {
//             index = 2;
//         }
//         compImage[index].style.cssText = 'transform: scale(2);';
//         let playerIndex = options[playerSelection];
//         let computerIndex = options[computerSelection];
//         let winner;

//         if ((playerIndex == computerIndex - 1) || (playerIndex == 0 && computerIndex == 1)) {
//             scoreP++;
//             winner = "Player";
//         }
//         else if (playerIndex === computerIndex)
//             winner = "None";
//         else {
//             scoreC++;
//             winner = "Computer";
//         }
//         const result = document.getElementById('whoWon');
//         result.innerHTML = `${winner} won this round`;
//         const result = document.getElementById('scoreBoard');
//         result.innerHTML = `Your Score = ${scoreC} <br> Computer's Score = ${scoreP}`;
//         if (scoreC === 5 || scoreP === 5)
//             declareWinner();
//     }

//     function declareWinner() {
//         alert(`Your Score:${scoreP}\nComputer's Score: ${scoreC}`);
//         if (scoreP > scoreC)
//             alert(`You Win the game!`);
//         else
//             alert(`You lose the game!`);
//     }
//     return;
// }
// game();

