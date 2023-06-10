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

const displayController = (() => {
   const screenBoard = document.querySelectorAll(".board-container>div");

   return {
      screenBoard,
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

   const playerSelection = (e) => {
      const { row } = e.target.dataset;
      const { col } = e.target.dataset;
      const { piece } = activePlayer;
      const activeCell = document.querySelector(`div[data-row="${row}"][data-col="${col}"]`);

      if (activeCell.classList.length === 0) {
         activeCell.classList.add(piece);
         activeCell.innerHTML = piece;
         playRound();
      } else {
         // handle invalid click here
         // signal to the player that the cell is invalid
      }
   };

   const playGame = () => {
      const DOMBoard = displayController.screenBoard;
      DOMBoard.forEach((cell) => {
         cell.addEventListener("click", playerSelection);
      });
   };

   return {
      playGame,
      playerSelection,
   };
})();

gameFlow.playGame();

// tie the display in with the general game flow
// begin cleaning up the old methods that are no longer needed
// a click should attempt to call the play round feature in the game
// once the player makes the choice the game should instantly validate the move
// if it is invalid then the screen should update with some indication so the player knows
// once the selection is valid the program should update the board on the screen and internally
// the internal board will be used to check for a win or a tie
// we can worry about the player choice later, assume player two is human for now
// attach each cell with an event listener that plays the round (or turn)
// do this under display controller
// see above for the flow of how it should work logically
