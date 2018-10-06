const chai = require('chai');
const expect = chai.expect;

const basicProduct = require('../../src/products/basic');

describe('Basic product', () => {
  it('should work with provided examples', () => {
    expect(basicProduct.model(3500)).to.equal(830);
    expect(basicProduct.model(4500)).to.equal(1050);
    expect(basicProduct.model(6000)).to.equal(1380);
  });
  it('should handle errors', () => {
    expect(() => basicProduct.model(-1000)).to.throw(/Invalid argument/);
  });
});