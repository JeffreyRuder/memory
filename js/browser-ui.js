var memory = require('./../js/memory.js');

Game = memory.Game;
Space = memory.Space;
var flipAndCheck = memory.flipAndCheck;
var setupBoard = memory.setupBoard;
var checkSpace = memory.getSpace;

$(document).ready(function() {
  var thisGame = new Game(2, 2);
  thisGame.setupBoard();

  

  //draw grid
  for (var i = 1; i <= thisGame.rows; i++) {
    $(".game-grid").append("<div class='row' id='row" + i + "'></div>" );
    for (var j = 1; j <= thisGame.columns; j++) {
      $("#row" + i).append("<div class='cell col-sm-4' id='" + i + "_" + j + "'></div>");
    }
  }
});
