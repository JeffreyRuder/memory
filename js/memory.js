function Space(xCoordinate, yCoordinate){
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.flipped = false;
  this.pic = '';
}

function flipAndCheck(testSpace1, testSpace2) {
  testSpace1.flipped = true;
  testSpace2.flipped = true;
  if (testSpace1.pic !== testSpace2.pic ){
    testSpace1.flipped = false;
    testSpace2.flipped = false;
    return false;
  } else {
    return true;
  }
}

function Game() {
  this.spaces = [];
  this.turnsTaken = 0;
  this.isOver = false;
  this.winMessage = "You've found all the matches!";
}

Game.prototype.setupBoard = function (xSize, ySize) {
  if (xSize % 2 === 0 && ySize % 2 === 0) {
    for (var x = 1; x <= xSize; x++) {
      for(var y = 1; y <= ySize; y++) {
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
