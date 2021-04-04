const { Calc } = require("./calc")
const chai = require('chai');
const expect = chai.expect;

describe('Calc Unit Testing', () => {

  // Setup Phase
  const calc = new Calc();

  it('Should return the sum of two values correctly', () => {
    // Exercise Phase
    const result = calc.add(1, 1);
    // Verify Phase
    expect(result).to.equal(2);
  });
})
