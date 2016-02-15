var expect = require("chai").expect;
var memory = require('./../js/memory.js');
Game = require('./../js/memory.js').Game;
Space = require('./../js/memory.js').Space;

var flipAndCheck = memory.flipAndCheck;
var setupBoard = memory.setupBoard;
var checkSpace = memory.getSpace;

describe('Space', function() {

  it("has a position", function() {
    var testSpace = new Space(1, 2);
    expect(testSpace.xCoordinate).to.equal(1);
    expect(testSpace.yCoordinate).to.equal(2);
  });

  it("has a pic property that can be tested for equality", function() {
    var testSpace1 = new Space (1, 1);
    testSpace1.pic = "img/frog.jpg";
    var testSpace2 = new Space (1, 2);
    testSpace2.pic = "img/frog.jpg";
    var testSpace3 = new Space (2, 2);
    testSpace3.pic = "img/horse.jpg";
    expect(testSpace1.pic).to.equal(testSpace2.pic);
    expect(testSpace1.pic).to.equal(testSpace2.pic);
    expect(testSpace1.pic).to.not.equal(testSpace3.pic);
  });

  it("flip and check function flips, tests for equality, and flips back if pictures don't match", function() {
    var testSpace1 = new Space (1, 1);
    testSpace1.pic = "img/frog.jpg";
    var testSpace2 = new Space (1, 2);
    testSpace2.pic = "img/frog.jpg";
    var testSpace3 = new Space (2, 1);
    testSpace3.pic = "img/cat.jpg";
    var testSpace4 = new Space (2, 2);
    testSpace3.pic = "img/horse.jpg";
    var firstCheck = flipAndCheck(testSpace1, testSpace2);
    var secondCheck = flipAndCheck(testSpace3, testSpace4);
    expect(testSpace1.flipped).to.be.true;
    expect(testSpace2.flipped).to.be.true;
    expect(firstCheck).to.be.true;
    expect(testSpace3.flipped).to.be.false;
    expect(testSpace4.flipped).to.be.false;
    expect(secondCheck).to.be.false;
  });
});

describe("Game", function(){
  it("accepts x and y size of game and checks that they're even", function(){
    var testGame = new Game (2, 2);
    testGame.setupBoard();
    expect(testGame.spaces).to.be.an("array");
    expect(testGame.spaces.length).to.equal(4);
  });

  it("returns a space based on x and y coordinates", function () {
    var testGame = new Game (2, 2);
    testGame.setupBoard();
    testGame.getSpace(1, 1).flipped = true;
    expect(testGame.spaces[0].flipped).to.be.true;
  });

});
