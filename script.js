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

   for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
         board[i][j].push(0);
      }
   }

   return {
      board,
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

   const getBoard = () => gameBoard.board();

   return {
      getPlayerOne,
      getPlayerTwo,
      getBoard,
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

   const getActivePlayer = () => activePlayer;

   const board = gameFuncs.getBoard();

   const playRound = () => {
      // display board in console, should be empty
      // get move from player one
      // check if move is valid, should be built into to register move
      // check if the move wins
      // check move is a tie
      // if move is valid return board
      // change active player
      console.log(board);
      console.log();
   };

   const playGame = () => {
      // continue to call rounds until a winner or tie is decided
      console.log("filler");
      
   };

   // render board

   // allow input of move
   // check validity of move
   // if valid update board
   // check for a win
   // check for any other valid moves - is board full?

   // wait for player move or return computer move

   // returning everything for now to test
   return {
      playerOne,
      playerTwo,
      activePlayer,
      switchPlayer,
      getActivePlayer,
      playRound,
   };
})();
