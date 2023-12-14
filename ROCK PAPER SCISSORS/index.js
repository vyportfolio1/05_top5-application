const buttons = document.querySelectorAll("button");
const event1 = document.querySelector(".event");
const rezult = document.querySelector(".rezult");
const count = document.querySelector(".count");
const reset = document.querySelector(".reset");

const winIcon = document.querySelector(".fa-wine-bottle");
const loseIcon = document.querySelector(".fa-heart-crack");
const tiedIcon = document.querySelector(".fa-user-tie");

let winCount = 0;
let loseCount = 0;
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
        showIcons(humanChoice, computerCh);
        rezult.innerHTML = `You chose: ${humanChoice}, Computer chose: ${computerCh}`;
    });
});

function showIcons(human, computer) {
    hideAllIcons();

    document.querySelector(`.left-${human}`).classList.remove("hidden");
    document.querySelector(`.right-${computer}`).classList.remove("hidden");
}

function hideAllIcons() {
    const allIcons = document.querySelectorAll(".left-hand img, .right-hand img");
    allIcons.forEach(icon => {
        icon.classList.add("hidden");
    });
}

function showWinIcon() {
    winIcon.classList.remove("hidden");
    loseIcon.classList.add("hidden");
    tiedIcon.classList.add("hidden");
}

function showLoseIcon() {
    winIcon.classList.add("hidden");
    loseIcon.classList.remove("hidden");
    tiedIcon.classList.add("hidden");
}

function showTiedIcon() {
    winIcon.classList.add("hidden");
    loseIcon.classList.add("hidden");
    tiedIcon.classList.remove("hidden");
}

function game(human, computer) {
    if (human === computer) {
        event1.innerHTML = `It's a tie`;
        tiedCount++;
        showTiedIcon();
    } else if ((human === "rock" && computer === "scissors") ||
               (human === "paper" && computer === "rock") ||
               (human === "scissors" && computer === "paper")) {
        event1.innerHTML = "You win";
        winCount++;
        showWinIcon();
    } else {
        event1.innerHTML = "You lose";
        loseCount++;
        showLoseIcon();
    }
    count.innerHTML = `Win: ${winCount} Lose: ${loseCount} Tied: ${tiedCount}`;
}

reset.addEventListener("click", () => {
    winCount = 0;
    loseCount = 0;
    tiedCount = 0;
    count.innerHTML = `Win: ${winCount} Lose: ${loseCount} Tied: ${tiedCount}`;
    rezult.innerHTML = "";
    event1.innerHTML = "Events";
    hideAllIcons();
    winIcon.classList.add("hidden");
    loseIcon.classList.add("hidden");
    tiedIcon.classList.add("hidden");
});
