// setting some sample moves to call for logic testing
const globalTestMoves = [
   [0, 0],
   [0, 2],
   [1, 0],
   [1, 1],
   [0, 1],
];

const playerFactory = (playerName, piece, playerType) => ({ playerName, piece, playerType });

const gameBoard = (() => {
   // change the board to be an empty array
   // define the size of it and use a nested loop to generate it
   // recreate the board each time in the console for the game
   // the dom does not to be iterated like this
   // use register move to check and create
   const board = [];
   const rows = 3;
   const cols = 3;
   const emptyCell = 0;

   for (let i = 0; i < rows; i += 1) {
      board[i] = [];
      for (let j = 0; j < cols; j += 1) {
         board[i].push(emptyCell);
      }
   }

   const getBoard = () => board;

   const updateBoard = (row, col, piece) => {
      board[row].splice(col, 1, piece);
      return board;
   };

   const validMoves = [];

   const updateValidMoves = () => {
      for (let i = 0; i < 3; i += 1) {
         for (let j = 0; j < 3; j += 1) {
            if (board[i][j] === 0) {
               validMoves.push([i, j]);
            }
         }
      }
      return validMoves;
   };

   const getValidMoves = () => updateValidMoves();

   //  const validateMove = (row, col) => {

   //  }

   return {
      getBoard,
      updateBoard,
      getValidMoves,
   };
})();

const gameFuncs = (() => {
   const getPlayerOne = () => {
      const name = "Hunter"; // temp placeholder until connected to DOM
      const piece = "X"; // placeholder until connected to DOM
      const playerType = "Human";
      return playerFactory(name, piece, playerType);
   };
   const getPlayerTwo = () => {
      const name = "Robo";
      const piece = "O";
      const playerType = "Computer";
      return playerFactory(name, piece, playerType);
   };

   return {
      getPlayerOne,
      getPlayerTwo,
   };
})();

const gameFlow = (() => {
   const playerOne = gameFuncs.getPlayerOne();
   const playerTwo = gameFuncs.getPlayerTwo();

   let activePlayer = playerOne;

   const switchPlayer = () => {
      activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
      return activePlayer;
   };

   const getActivePlayer = () => activePlayer; // can use this later to pull info into the DOM

   let board = gameBoard.getBoard();

   // temp method to control the flow of the game
   let turnCount = 0;

   const getChoice = () => globalTestMoves[turnCount];

   const playRound = () => {
      console.log(board);
      console.log(`It's ${activePlayer.playerName}'s turn.`);
      // This area should be used for getting the player move
      board = gameBoard.updateBoard(getChoice()[0], getChoice()[1], activePlayer.piece);
      switchPlayer();
      turnCount += 1;
      return board;
   };

   const playGame = () => {
      // continue to call rounds until a winner or tie is decided
      console.log(board);

      for (let i = 1; i < globalTestMoves.length; i += 1) {
         playRound();
      }
   };

   const playerSelection = (e) => {
      const { row } = e.target.dataset;
      const { col } = e.target.dataset;
      const { piece } = activePlayer;
      const activeCell = document.querySelector(`div[data-row="${row}"][data-col="${col}"]`);
      console.log(activeCell.classList);
      if (activeCell.classList.length === 0) {
         activeCell.classList.add(piece);
         activeCell.innerHTML = piece;
         switchPlayer();
      } else {
         // handle invalid click here
      }
   };

   return {
      playGame,
      playerSelection,
   };
})();

const displayController = (() => {
   const screenBoard = document.querySelectorAll(".board-container>div");

   return {
      screenBoard,
   };
})();

const consoleBoard = document.querySelectorAll(".board-container>div");

consoleBoard.forEach((cell) => {
   cell.addEventListener("click", gameFlow.testMethod);
});

displayController.screenBoard.forEach((cell) => {
   cell.addEventListener("click", gameFlow.playerSelection);
});
// next step is to get the board to show a piece
