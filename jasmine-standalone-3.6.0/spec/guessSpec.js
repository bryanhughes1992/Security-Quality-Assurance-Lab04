describe("testToPassSuit", function() {
  it("If you guess four, should return 'You guessed it'", function() {
    expect(guessNum(4)).toEqual("You guessed it!");
  });
  it("If you enter -1 should return 'Way off! Pick between 1 and 10.'", function() {
    expect(guessNum(-1)).toEqual("Way off! Pick between 1 and 10.");
  });
});

describe("testToFailSuite", function () {
  it("If you guess 52, should not return 'You guessed it'", function () {
    expect(guessNum(52)).not.toEqual("You guessed it!");
  });
  it("If you enter 5 should not return 'You guessed it!'", function() {
    expect(guessNum(5)).not.toEqual("You guessed it!");
  });
});

describe("boundarySuite", function() {
  it("If you guess 0, should return 'Way off! Pick between 1 and 10.'", function() {
    expect(guessNum(0)).toEqual('Way off! Pick between 1 and 10.');
  });
  it("If you guess 1, should return 'Guess again.'", function() {
    expect(guessNum(1)).toEqual("Guess again.");
  });
  it("If you guess 2, should return 'Guess again.'", function() {
    expect(guessNum(2)).toEqual("Guess again.");
  });
  it("If you guess 11, should return 'Way off! Pick between 1 and 10.'", function() {
    expect(guessNum(11)).toEqual("Way off! Pick between 1 and 10.");
  });
  it("If you guess 10, should return 'Guess again.", function() {
    expect(guessNum(10)).toEqual("Guess again.");
  });
  it("If you guess 9, should return 'Guess again.'", function() {
    expect(guessNum(9)).toEqual("Guess again.");
  });
});
