let choices = document.querySelectorAll(".choice");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let resetBtn = document.querySelector(".resetbtn");

let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// find the user choice
for(let choice of choices){
    choice.addEventListener(("click"), () => {
       let userChoice = choice.getAttribute("id");
       console.log(userChoice);
       playGame(userChoice);
    });
}

// get the computer choice
const getCompChoice = () => {
    let arrChoices = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random()*3);    /*imp line to get a number randomly*/
    let compChoice = arrChoices[randomIndex];
    console.log(compChoice);
    return compChoice;
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        console.log("You Win!")
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        console.log("You lost!");
    }
};

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = getCompChoice();

    if(userChoice === compChoice){
        // Draw Game
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // compChoice = scissor/paper
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            // compChoice = scissor/rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            // userChoice === "scissor"
            // compChoice = rock/paper
            userWin = compChoice === "rock"? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

const gameDraw = () => {
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
    console.log("Game was draw!");
};

const resetGame = () => {
    userScore = 0;
    userScorePara.innerText = userScore;
    compScore = 0;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
}

resetBtn.addEventListener("click", resetGame);