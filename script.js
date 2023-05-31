// tictactoe
// need to keep in mind that everything should be contained in objects
// create the board
// the pieces
// the players
// if there is one use a module
// if there are many use a factory function

const playerFactory = (playerName, piece, playerType) => ({ playerName, piece, playerType });

const gameBoard = (() => {
   const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
   ];
   const registerMove = (row, col, piece) => {
      board[row][col] = piece;
      return board;
   };
   return {
      board,
      registerMove,
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
   };

   // render board

   // allow input of move
   // check validity of move
   // if valid update board
   // check for a win
   // check for any other valid moves - is board full?

   // wait for player move or return computer move
   return {
      playerOne,
      playerTwo,
   };
})();
