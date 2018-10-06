const chai = require('chai');
const expect = chai.expect;

const packagedProduct = require('../../src/products/packaged');

describe('Packaged product', () => {
  it('should work with provided examples', () => {
    expect(packagedProduct.model(3500)).to.equal(800);
    expect(packagedProduct.model(4500)).to.equal(950);
    expect(packagedProduct.model(6000)).to.equal(1400);
  });
  it('should handle errors', () => {
    expect(() => packagedProduct.model(-1000)).to.throw(/Invalid argument/);
  });
});