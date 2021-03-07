const { Calc } = require("./calc")
const chai = require('chai');
const expect = chai.expect;

describe('Calc Unit Testing', () => {

  const calc = new Calc();

  it('Should return the sum of two values correctly', () => {
    const result = calc.add(1, 1);
    expect(result).to.equal(2);
  });
})
