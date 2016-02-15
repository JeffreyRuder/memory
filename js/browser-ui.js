var memory = require('./../js/memory.js');

var Game = memory.Game;
var Space = memory.Space;
var flipAndCheck = memory.flipAndCheck;
var setupBoard = memory.setupBoard;
var checkSpace = memory.getSpace;

$(document).ready(function() {
  var thisGame = new Game(2, 2);
  thisGame.setupBoard();
});
