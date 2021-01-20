const { expect } = require("@jest/globals");
const {
  myReverse,
  allCombinations,
  allCaps,
  myPower,
  getFirstNotRepeating,
  isPrefectNumber,
} = require("./Exercises");

describe("Question 1", () => {
  it("Should reverse a string", () => {
    const input = "Nitzan";
    const expOutput = "naztiN";
    const output = myReverse(input);

    expect(output).toBe(expOutput);
  });
});

describe("Question 2", () => {
  it("Should get all combinations of a string", () => {
    const input = "dog";
    const expOutput = ["d", "do", "dog", "o", "og", "g"];
    const output = allCombinations(input);

    expect(output).toEqual(expOutput);
  });
});

describe("Question 3", () => {
  it("Should capitalize all words in sentance", () => {
    const input = "i am a cyber4s student";
    const expOutput = "I Am A Cyber4s Student";
    const output = allCaps(input);

    expect(output).toBe(expOutput);
  });
});

describe("Question 4", () => {
  it("Should perform a mathematic power method", () => {
    const input = [
      Math.floor(Math.random(10) + 1),
      Math.floor(Math.random(5) + 1),
    ];
    const expOutput = Math.pow(input[0], input[1]);
    const output = myPower(input[0], input[1]);

    expect(output).toBe(expOutput);
  });
});

describe("Question 5", () => {
  it("Should get the first non repeating character in a string", () => {
    const input = "abanibiabohebe";
    const expOutput = "n";
    const output = getFirstNotRepeating(input);

    expect(output).toBe(expOutput);
  });
});

describe("Question 6", () => {
  it("Should check if a number is a perfect number (optional)", () => {
    const giveUp = "I'm not interested in the bonus question :(";
    const perfectNumber = 496;
    const regularNumber = 7;
    const outputTrue = isPrefectNumber(perfectNumber);
    const outputFalse = isPrefectNumber(regularNumber);

    if (outputTrue === giveUp && outputFalse === giveUp) {
      expect(true).toBe(true);
    } else {
      console.log(outputTrue);
      expect(outputTrue).toBe(true);
      expect(outputFalse).toBe(false);
    }
  });
});
