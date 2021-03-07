class Discount {

  constructor({ discountService }) {
    this.discountService = discountService;
  }

  async calcDiscount(value) {
    const discount = await this.discountService.getBaseDiscount();
    return value * discount;
  }
}

module.exports = { Discount };
