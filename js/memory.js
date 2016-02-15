var Space = function (xCoordinate, yCoordinate){
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.flipped = false;
  this.matched = false;
  this.pic = '';
};

Space.prototype.checkForMatch = function(testSpace2) {
  if (this.pic === testSpace2.pic ){
    return true;
  } else {
    return false;
  }
};

var Game = function(rows, columns) {
  this.rows = rows;
  this.columns = columns;
  this.spaces = [];
  this.turnsTaken = 0;
  this.isOver = false;
  this.winMessage = "You've found all the matches!";
};

 Game.prototype.setupBoard = function () {
  if (this.columns % 2 === 0 && this.rows % 2 === 0) {
    for (var x = 1; x <= this.columns; x++) {
      for(var y = 1; y <= this.rows; y++) {
        var space = new Space(x, y);
        this.spaces.push(space);
      }
    }
  } else {
    console.log("Error, board dimensions must be even!");
  }
};

Game.prototype.getSpace = function (xIndex, yIndex) {
  return this.spaces.find(function(space) {
    return space.xCoordinate === xIndex && space.yCoordinate === yIndex;
  });
};

exports.Space = Space;
exports.Game = Game;
