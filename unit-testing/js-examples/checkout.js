class Checkout {

  constructor({ discountService }) {
    this.discountService = discountService;
  }

  async calcTotalCheckout(value, cupom) {
    try {
      const discount = await this.discountService.getBaseDiscount(cupom);
      return value * discount;
    } catch (err) {
      return value;
    }
  }
}

module.exports = { Checkout };
