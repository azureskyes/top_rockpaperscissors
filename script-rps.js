let playerScore = 0;
let computerScore = 0;
let playCount = 0;

/* Image Array Randomizer function*/
function getRandomImage(imageArray) {
    const randomArray = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomArray];
}

let mainImage = document.querySelector(".result-img");
mainImage.src = './cgpt-imgs/homepage-img-start/hp3.WEBP';

function getComputerChoice() {
    let computerChoice = ["earth", "water", "fire"];
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

let fireButton = document.querySelector('.option1-fire');
let waterButton = document.querySelector('.option2-water');
let earthButton = document.querySelector('.option3-earth');

let resetButton = document.querySelector('.reset-score');



fireButton.addEventListener('click',function(e) {
    playRound('fire');
    let championPick = document.querySelector('.champion-pick');
    championPick.textContent = "You picked a champion of Fire."
});
waterButton.addEventListener('click',function(e) {
    playRound('water');
    let championPick = document.querySelector('.champion-pick');
    championPick.textContent = "You picked a champion of Water."
});
earthButton.addEventListener('click', function(e) {
    playRound('earth');
    let championPick = document.querySelector('.champion-pick');
    championPick.textContent = "You picked a champion of Earth."
});

let championPick = document.querySelector('.champion-pick');
championPick.textContent = "Who will you pick?"

function resetScore() {
    mainImage.src = './cgpt-imgs/homepage-img-start/hp3.WEBP';
    let printResults = document.querySelector('.result-text');
    printResults.textContent = "Pick your champion."
    playerScore = 0;
    computerScore = 0;
    playCount = 0;
    console.log("Score has been reset.");
    let championPick = document.querySelector('.champion-pick');
    championPick.textContent = "Who will you pick?"
}
resetButton.addEventListener('click', resetScore);

function gameLogDOM() {
    let playerScoreDOM = document.querySelector('.player-score');
    playerScoreDOM.textContent = "Player Score:" + playerScore;
    let computerScoreDOM = document.querySelector('.computer-score');
    computerScoreDOM.textContent = "Computer Score:" + computerScore;
}



/* Array of output images */
/*const arrayDrawEE = [
    './cgpt-imgs/draw-earth-earth/ee1.WEBP',
    './cgpt-imgs/draw-earth-earth/ee2.WEBP',
  ...
    './cgpt-imgs/draw-earth-earth/ee20.WEBP',
    './cgpt-imgs/draw-earth-earth/ee21.WEBP',
    './cgpt-imgs/draw-earth-earth/ee22.WEBP',
];*/
/*Array of Draw Earth Earth*/
let deeN = 22;
const arrayDrawEE = [];
const basePathEE = './cgpt-imgs/draw-earth-earth/ee';
for (let i = 1; i <= deeN; i++) {
    arrayDrawEE.push(`${basePathEE}${i}.WEBP`);
}
/*Array of Draw Fire Fire */
let dffN = 6;
const arrayDrawFF = [];
const basePathFF = './cgpt-imgs/draw-fire-fire/ff';
for (let i = 1; i <= dffN; i++) {
    arrayDrawFF.push(`${basePathFF}${i}.WEBP`);
}

/* Array of Draw Water Water */
let dwwN = 3;
const arrayDrawWW = [];
const basePathWW = './cgpt-imgs/draw-water-water/ww';
for (let i = 1; i <= dwwN; i++) {
    arrayDrawWW.push(`${basePathWW}${i}.WEBP`);
}

let wfeN = 20;
const arrayWinFE = [];
const basePathWFE = './cgpt-imgs/win-fire-earth/wfe';
for (i = 1; i <= wfeN; i++) {
    arrayWinFE.push(`${basePathWFE}${i}.WEBP`);
}

let wwfN = 10;
const arrayWinWF= [];
const basePathWWF = './cgpt-imgs/win-water-fire/wwf';
for (i = 1; i <= wwfN; i++) {
    arrayWinWF.push(`${basePathWWF}${i}.WEBP`);
}

let wewN = 19;
const arrayWinEW = [];
const basePathWEW = './cgpt-imgs/win-earth-water/wew';
for (i = 1; i <= wewN; i++) {
    arrayWinEW.push(`${basePathWEW}${i}.WEBP`);
}

let printResults = document.querySelector('.result-text');
    printResults.textContent = "Pick your champion."

function printYouLost() {
    let printResults = document.querySelector('.result-text');
    printResults.textContent = "An unfortunate end. Your champion has fallen."
}

function printYouWon() {
    let printResults = document.querySelector('.result-text');
    printResults.textContent = "Victory! Your champion has conquered the enemy."
}

function printItsATie() {
    let printResults = document.querySelector('.result-text');
    printResults.textContent = "It's a stalemate. Your champion clinched a draw."
}

/*function logPlayerWin() {
    let playerScoreDOM = document.querySelector('.player-score');
    let playerScoreTxt = document.createTextNode(playerScore);
    playerScoreDOM.appendChild(playerScoreTxt);
}
*/

/* Test Array */
const arrayTester123 = ["dog", "cat", "raccoon"];



function playRound(userInput) {
    userInput = userInput.toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    
    if (userInput !== null && userInput !== undefined) {
        playCount++;
    }
    /* Draw Conditionals */
    if (userInput === "earth" && computerChoice === "earth") {
        mainImage.src = getRandomImage(arrayDrawEE);
        printItsATie();
        console.log("We picked the same. It's a tie!");
        playerScore += .5;
        computerScore += .5;
        printScore();
        gameLogDOM();
    } else if (userInput === "fire" && computerChoice === "fire") {
        mainImage.src = getRandomImage(arrayDrawFF);
        printItsATie();
        console.log("We picked the same. It's a tie!");
        playerScore += .5;
        computerScore += .5;
        printScore();
    } else if (userInput === "water" && computerChoice === "water") {
        mainImage.src = getRandomImage(arrayDrawWW);
        printItsATie();
        console.log("We picked the same. It's a tie!");
        playerScore += .5;
        computerScore += .5;
        printScore();
    /* Win/Lose Conditionals */
    } else if (userInput === "earth" && computerChoice === "fire") {
        mainImage.src = getRandomImage(arrayWinFE);
        printYouLost();
        console.log("I picked fire. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "earth" && computerChoice === "water") {
        mainImage.src = getRandomImage(arrayWinEW);
        printYouWon()
        console.log("I picked water. You won!");
        playerScore++;
        printScore();
    } else if (userInput === "water" && computerChoice === "earth") {
        mainImage.src = getRandomImage(arrayWinEW);
        printYouLost()
        console.log("I picked earth. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "water" && computerChoice === "fire") {
        mainImage.src = getRandomImage(arrayWinWF);
        printYouWon()
        console.log("I picked fire. You won!");
        playerScore++;
        printScore();
    } else if (userInput === "fire" && computerChoice === "water") {
        mainImage.src = getRandomImage(arrayWinWF);
        printYouLost()
        console.log("I picked water. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "fire" && computerChoice === "earth") {
        mainImage.src = getRandomImage(arrayWinFE);
        printYouWon()
        console.log("I picked earth. You won!");
        playerScore++;
        printScore();
    } else {
        mainImage.src = './cgpt-imgs/homepage-img-start/hp3.WEBP';
        console.log("Let me know when you want to play!");

    }
}



function printScore() {
    console.log("Your score: " + playerScore);
    console.log("My score: " + computerScore);
    console.log("Play count: " + playCount);
    gameLogDOM();
}

function winRate() {
     if (playCount > 0) {
    return ("Your win rate is: " + parseInt((playerScore / playCount)*100) + "%.");
     }  else return("Play count needs to be higher than 0.");
}












/* 
console.log("Welcome to a game of Rock, Paper, Scissors! \nTry starting a game by typing 'game(n)' into the console; where 'n' is the number of rounds you want to play. \nGoodluck!")
let playerScore = 0;
let computerScore = 0;
let playCount = 0;

function playRound() {
    alert("Let's play Rock, Paper, Scissors!");
    let userInput = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    
    /*if (userInput != null || undefined)
    if (userInput !== null && userInput !== undefined) {
        playCount++;
    }

    if (userInput === computerChoice) {
        console.log("We picked the same. It's a tie!");
        playerScore += .5;
        computerScore += .5;
        printScore();
    } else if (userInput === "rock" && computerChoice === "paper") {
        console.log("I picked paper. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "rock" && computerChoice === "scissors") {
        console.log("I picked scissors. You won!");
        playerScore++;
        printScore();
    } else if (userInput === "scissors" && computerChoice === "rock") {
        console.log("I picked rock. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "scissors" && computerChoice === "paper") {
        console.log("I picked paper. You won!");
        playerScore++;
        printScore();
    } else if (userInput === "paper" && computerChoice === "scissors") {
        console.log("I picked scissors. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "paper" && computerChoice === "rock") {
        console.log("I picked rock. You won!");
        playerScore++;
        printScore();
    } else {
        console.log("Let me know when you want to play!");
    }
}

function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    playCount = 0;
    /*playerScore = playerScore * 0;
    computerScore = computerScore * 0;
    playCount = playCount * 0;
}

function printScore() {
    console.log("Your score: " + playerScore);
    console.log("My score: " + computerScore);
    console.log("Play count: " + playCount);
}

function winRate() {
     if (playCount > 0) {
    return ("Your win rate is: " + parseInt((playerScore / playCount)*100) + "%.");
     }  else return("Play count needs to be higher than 0.");
}


function game(roundLimit) {
    if (typeof roundLimit === "number" && roundLimit > 0) {
        resetScore();
        for (let i = 0; i < roundLimit; i++) {
        playRound();
         }

        if (playerScore > computerScore) {
            return ("Congratulations. Winner winner chicken dinner!" + " " + winRate());
        } else if (playerScore < computerScore) {
            return ("Aww. Better luck next time!" + " " + winRate());
        } else if (playerScore == computerScore) {
            return ("Wow. It's a tie!" + " " + winRate());
    } else if (isNaN(roundLimit) || roundLimit === null || roundLimit === undefined) {
        return("Pick a number!");
    } else {
        return("Pick a number!");
    }
}
}*/

