(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var UI = TTT.UI = function UI (elem, game) {
    this.elem = elem;
    this.game = game;
  };

  UI.prototype.getPos = function() {
    return this.elem.attr("id").split("_").slice(1).map(function(coord) {
      return parseInt(coord);
    });
  };

  UI.prototype.sendMove = function () {
    this.game.playMove(this.getPos());
  };

})();