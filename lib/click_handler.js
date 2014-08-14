function clickHandler() {
  $("ul").on("click", "li", function() {

    var $el = $(this);

    if (($el.attr("class") !== undefined) || (game.winner())) {
      return null;
    }

    var UI = new TTT.UI($el, game);

    if (game.currentPlayer === "x") {
      $el.addClass("x_placed");
    } else {
      $el.addClass("o_placed");
    }

    UI.sendMove();

    updateTurnIndicator();
  });
}

function updateTurnIndicator() {
  var $indicator = $("#turn_indicator")

  if (game.board.isOver()) {
    if (game.winner()) {
      var message = game.winner() + " cat wins!";
    } else {
      var message = "Tie Game.";
    }
  } else {
    var message = game.currentPlayer + " cat's turn.";
  }

  $indicator.html(message)
}