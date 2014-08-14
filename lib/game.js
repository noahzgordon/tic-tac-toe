(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }


  var Game = TTT.Game = function Game () {
    this.board = new TTT.Board();
    this.currentPlayer = TTT.Board.marks[0];
  }

  Game.prototype.isOver = function () {
    return this.board.isOver();
  };

  Game.prototype.playMove = function (pos) {
    this.board.placeMark(pos, this.currentPlayer);
    this.swapTurn();
  };

  Game.prototype.swapTurn = function () {
    if (this.currentPlayer === TTT.Board.marks[0]) {
      this.currentPlayer = TTT.Board.marks[1];
    } else {
      this.currentPlayer = TTT.Board.marks[0];
    }
  };

  Game.prototype.winner = function () {
    return this.board.winner();
  };

})();
