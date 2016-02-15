var memory = require('./../js/memory.js');

Game = memory.Game;
Space = memory.Space;
var flipAndCheck = memory.flipAndCheck;
var setupBoard = memory.setupBoard;
var checkSpace = memory.getSpace;

$(document).ready(function() {
  var thisGame = new Game(2, 2);
  thisGame.setupBoard();

  for (i = 1; i <= thisGame.rows; i++) {
    $(".game-grid").append("<div class='row'></div>");
  }
});
