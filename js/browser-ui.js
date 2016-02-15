var Game = require('./../js/memory.js').Game;
var Space = require('./../js/memory.js').Space;

$(document).ready(function() {
  var thisGame = new Game(4, 4);
  thisGame.setupBoard();

  //draw grid
  for (var i = 1; i <= thisGame.rows; i++) {
    $(".game-grid").append("<div class='row' id='row" + i + "'></div>" );
    for (var j = 1; j <= thisGame.columns; j++) {
      $("#row" + i).append("<div class='cell col-sm-2' id='" + i + "_" + j + "'></div>");
    }
  }


});
