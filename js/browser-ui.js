var Game = require('./../js/memory.js').Game;
var Space = require('./../js/memory.js').Space;

var imageArray = [
  '1', '2', '3', '4', '5', '6', '7', '8',
  '1', '2', '3', '4', '5', '6', '7', '8'
];

var play = function (thisGame) {
  var flipCount = 0;
  var firstSpace;
  var firstDOMCell;
  var secondSpace;
  var secondDOMCell;
  var firstRequest;
  var secondRequest;

  $(".cell").on("click", function() {
    var request = $(this).prop("id").split("_");
    var thisSpace = thisGame.getSpace(parseInt(request[0]), parseInt(request[1]));
    if (thisSpace.matched === false && thisSpace !== firstSpace) {
      flipCount++;
      console.log("Flip count: " + flipCount);

      if (flipCount % 2 !== 0) {
        firstRequest = $(this).prop("id").split("_");
        console.log("first request " + firstRequest);
        firstDOMCell = $(this).prop("id");
        firstSpace = thisGame.getSpace(parseInt(firstRequest[0]), parseInt(firstRequest[1]));
        $(this).children(".image").show();
      }

      else {
        secondRequest = $(this).prop("id").split("_");
        console.log("second request " + secondRequest);
        secondSpace = thisGame.getSpace(parseInt(secondRequest[0]), parseInt(secondRequest[1]));
        secondDOMCell = $(this).prop("id");
        $(this).children(".image").show();

        var match = firstSpace.checkForMatch(secondSpace);
        if (match) {
          firstSpace.matched = true;
          secondSpace.matched = true;
        } else {
          $("#" + secondDOMCell).children(".image").fadeOut(1250);
          $("#" + firstDOMCell).children(".image").fadeOut(1250);
        }
        firstSpace = "";
        secondSpace = "";
        var allMatched = thisGame.spaces.every(function(space) {
          return space.matched === true;
        });
        if (allMatched) {
          alert(thisGame.winMessage + " It took you " + (flipCount / 2) + " guesses.");
          window.location.reload(true);
        }
      }
    }

  });
};

$(document).ready(function() {
  var thisGame = new Game(4, 4);
  thisGame.setupBoard();
  console.log(thisGame);

  //assign images
  for (var i = 0; i < thisGame.spaces.length; i++) {
    var randomIndex = Math.floor(Math.random() * imageArray.length);
    thisGame.spaces[i].pic = imageArray[randomIndex];
    imageArray.splice(randomIndex, 1);
  }

  //draw grid
  for (var i = 1; i <= thisGame.rows; i++) {
    $(".game-grid").append("<div class='row row-centered' id='row" + i + "'></div>" );
    for (var j = 1; j <= thisGame.columns; j++) {
      $("#row" + i).append("<div class='cell col-sm-2' id='" + i + "_" + j + "'><span hidden class='image'><img src='build/img/" + thisGame.getSpace(i, j).pic + ".jpg'></span></div>");
    }
  }

  play(thisGame);
});
