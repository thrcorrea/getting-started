const { Checkout } = require("./checkout");
const { expect } = require("chai");

describe('Checkout Unit Testing', () => {

  const fakeDiscountService = {
    getBaseDiscount: () => {
      return Promise.resolve(0.1);
    }
  }

  it('Should return the total value with the discount', async () => {
    const checkout = new Checkout({ discountService: fakeDiscountService });
    const result = await checkout.calcTotalCheckout(150, '10PERCENTCUPOM');
    expect(result).to.equal(15);
  })

  it('Should return the full value when discountService returns an error', async () => {
    fakeDiscountService.getBaseDiscount = () => { throw new Error('Failed to retrieve discount') };
    const checkout = new Checkout({ discountService: fakeDiscountService });
    const result = await checkout.calcTotalCheckout(150, '10PERCENTCUPOM');
    expect(result).to.equal(150);
  })
})
