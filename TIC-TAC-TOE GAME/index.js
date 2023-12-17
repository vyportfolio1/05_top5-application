const board = document.getElementById('board');
const status = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = 'X';
let gameBoard = Array(9).fill('');
let gameActive = true;

function handleClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    updateBoard();
    const winner = checkWinner();
    if (winner) {
      endGame(winner);
    } else {
      togglePlayer();
      makeComputerMove();
    }
  }
}

function updateBoard() {
  board.innerHTML = '';
  gameBoard.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell', 'w-20', 'h-20', 'bg-neutral-500', 'cursor-pointer', 'rounded-md');
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => handleClick(index));
    board.appendChild(cellElement);
  });
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      return gameBoard[a];
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    return 'Tie';
  }

  return null;
}

function endGame(winner) {
  if (winner === 'X') {
    status.textContent = 'You win!';
  } else if (winner === 'O') {
    status.textContent = 'Computer wins!';
  } else {
    status.textContent = "It's a tie!";
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `Current Player: ${currentPlayer}`;
}

function makeComputerMove() {
  if (gameActive) {
    const emptyCells = gameBoard.reduce((acc, cell, index) => {
      if (cell === '') {
        acc.push(index);
      }
      return acc;
    }, []);

    if (emptyCells.length === 0) {
      endGame('Tie');
      return;
    }

    let computerMove;

    for (const index of emptyCells) {
      const tempBoard = [...gameBoard];
      tempBoard[index] = 'O';
      if (checkWinner(tempBoard) === 'O') {
        computerMove = index;
        break;
      }
    }

    if (!computerMove) {
      for (const index of emptyCells) {
        const tempBoard = [...gameBoard];
        tempBoard[index] = 'X';
        if (checkWinner(tempBoard) === 'X') {
          computerMove = index;
          break;
        }
      }
    }

    if (!computerMove) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      computerMove = emptyCells[randomIndex];
    }

    gameBoard[computerMove] = 'O';

    updateBoard();

    const winner = checkWinner();
    if (winner) {
      endGame(winner);
    } else {
      togglePlayer();
    }
  }
}

function resetGame() {
  gameBoard = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = 'Game in progress';
  updateBoard();
  location.reload();  
}

resetBtn.addEventListener('click', resetGame);

updateBoard();
