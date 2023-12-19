document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const restartBtn = document.getElementById("restartBtn");

    let isFlipped = false;
    let firstCard, secondCard;
    let lockBoard = false;

 
    const shuffledCards = Array.from(cards).sort(() => Math.random() - 0.5);
    document.querySelector(".memory-game").innerHTML = "";
    shuffledCards.forEach(card => {
        document.querySelector(".memory-game").appendChild(card);
    });

    restartBtn.addEventListener("click", restartGame);

    cards.forEach(card => card.addEventListener("click", flipCard));

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add("flip");

        if (!isFlipped) {
      
            isFlipped = true;
            firstCard = this;
            return;
        }

     
        isFlipped = false;
        secondCard = this;

        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.card === secondCard.dataset.card;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

        removeCardsFromBoard(firstCard, secondCard);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");

            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [isFlipped, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function restartGame() {
        location.reload();
    }

    function removeCardsFromBoard(card1, card2) {

        card1.style.display = "none";
        card2.style.display = "none";
    }
});