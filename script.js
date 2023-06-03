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
      return activePlayer;
   };

   const getActivePlayer = () => activePlayer;

   const { ...board } = gameBoard;

   let turnNumber = 0;

   const playRound = () => {
      console.log(board.board);
      console.log(`${getActivePlayer().name}'s Turn`);
      boardUpdate = board.registerMove(globalTestMoves[turnNumber][0], globalTestMoves[turnNumber][1], getActivePlayer().piece);
      switchPlayer();
      turnNumber += 1;
   };

   const playGame = () => {
      for (let i = 0; i < 3; i += 1) {
         playRound();
      }
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
      board,
      playRound,
   };
})();

console.log(gameFlow.playRound());
