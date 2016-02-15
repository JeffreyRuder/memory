exports.Space = function (xCoordinate, yCoordinate){
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.flipped = false;
  this.pic = '';
};

exports.flipAndCheck = function(testSpace1, testSpace2) {
  testSpace1.flipped = true;
  testSpace2.flipped = true;
  if (testSpace1.pic !== testSpace2.pic ){
    testSpace1.flipped = false;
    testSpace2.flipped = false;
    return false;
  } else {
    return true;
  }
};

exports.Game = function(rows, columns) {
  this.rows = rows;
  this.columns = columns;
  this.spaces = [];
  this.turnsTaken = 0;
  this.isOver = false;
  this.winMessage = "You've found all the matches!";
};

exports.Game.prototype.setupBoard = function () {
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

exports.Game.prototype.getSpace = function (xIndex, yIndex) {
  return this.spaces.find(function(space) {
    return space.xCoordinate === xIndex && space.yCoordinate === yIndex;
  });
};
