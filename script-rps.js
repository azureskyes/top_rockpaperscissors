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
});
waterButton.addEventListener('click',function(e) {
    playRound('water');
});
earthButton.addEventListener('click', function(e) {
    playRound('earth');
});

function resetScore() {
    mainImage.src = './cgpt-imgs/homepage-img-start/hp3.WEBP';
    playerScore = 0;
    computerScore = 0;
    playCount = 0;
    console.log("Score has been reset.");
}
resetButton.addEventListener('click', resetScore);

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
const arrayDrawEE = [];
const basePathEE = './cgpt-imgs/draw-earth-earth/ee';
for (let i = 0; i <= 22; i++) {
    arrayDrawEE.push(`${basePathEE}${i}.WEBP`);
}
/*Array of Draw Fire Fire */
const arrayDrawFF = [];
const basePathFF = './cgpt-imgs/draw-fire-fire/ff';
for (let i = 0; i <= 6; i++) {
    arrayDrawFF.push(`${basePathFF}${i}.WEBP`);
}

/* Array of Draw Water Water */
const arrayDrawWW = [];
const basePathWW = './cgpt-imgs/draw-water-water/ww';
for (let i = 0; i <= 4; i++) {
    arrayDrawWW.push(`${basePathWW}${i}.WEBP`);
}



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
        console.log("We picked the same. It's a tie!");
        playerScore += .5;
        computerScore += .5;
        printScore();
    } else if (userInput === "fire" && computerChoice === "fire") {
        mainImage.src = getRandomImage(arrayDrawFF);
        console.log("We picked the same. It's a tie!");
        playerScore += .5;
        computerScore += .5;
        printScore();
    } else if (userInput === "water" && computerChoice === "water") {
        mainImage.src = getRandomImage(arrayDrawWW);
        console.log("We picked the same. It's a tie!");
        playerScore += .5;
        computerScore += .5;
        printScore();
    /* Win/Lose Conditionals */
    } else if (userInput === "earth" && computerChoice === "fire") {
        /*mainImage.src = getRandomImage(arrayDrawEE);*/
        console.log("I picked fire. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "earth" && computerChoice === "water") {
        console.log("I picked water. You won!");
        playerScore++;
        printScore();
    } else if (userInput === "water" && computerChoice === "earth") {
        console.log("I picked earth. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "water" && computerChoice === "fire") {
        console.log("I picked fire. You won!");
        playerScore++;
        printScore();
    } else if (userInput === "fire" && computerChoice === "water") {
        console.log("I picked water. You lose!");
        computerScore++;
        printScore();
    } else if (userInput === "fire" && computerChoice === "earth") {
        console.log("I picked earth. You won!");
        playerScore++;
        printScore();
    } else {
        console.log("Let me know when you want to play!");
    }
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

