const buttons = document.querySelectorAll("button");
const event1 = document.querySelector(".event");
const rezult = document.querySelector(".rezult");
const count = document.querySelector(".count");
const reset = document.querySelector(".reset");


let winCount = 0;
let looseCount = 0;
let tiedCount = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let computerCh = Math.random();
        if (computerCh > 0 && computerCh < 1/3) {
            computerCh = "rock";
        } else if (computerCh > 1/3 && computerCh < 2/3) {
            computerCh = "paper";
        } else if (computerCh > 2/3 && computerCh < 1) {
            computerCh = "scissors";
        }
        
        const humanChoice = button.id; 
        game(humanChoice, computerCh);
        rezult.innerHTML = `you choose: ${humanChoice}, computer": ${computerCh}`;s
    });
});


function game(human, computer) {
    if (human === computer) {
        event1.innerHTML = `It's a tie`;
        tiedCount++;
    } else if ((human === "rock" && computer === "scissors") ||
               (human === "paper" && computer === "rock") ||
               (human === "scissors" && computer === "paper")) {
        event1.innerHTML = "You win";
        winCount++;
    } else {
        event1.innerHTML = "You lose";
        looseCount++;
    }
    count.innerHTML =`Win:${winCount} loose:${looseCount} tied:${tiedCount}`;
}

reset.addEventListener("click", () => {
    winCount = 0;
    looseCount = 0;
    tiedCount = 0;
    count.innerHTML = `Win: ${winCount} Lose: ${looseCount} Tied: ${tiedCount}`;
    rezult.innerHTML = "";
    event1.innerHTML = "Events";
});
