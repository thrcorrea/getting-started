const { Discount } = require("./discount");
const { expect } = require("chai");

describe('Discount Unit Testing', () => {

  const fakeDiscountService = {
    getBaseDiscount: () => {
      return Promise.resolve(0.1);
    }
  }

  const discount = new Discount({ discountService: fakeDiscountService });

  it('Should return the discount of some value', async () => {
    const result = await discount.calcDiscount(150);
    expect(result).to.equal(15);
  })
})
