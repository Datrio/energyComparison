const chai = require('chai');
const expect = chai.expect;

const { products } = require('../src/products');
const { calculateConsumption, compareCosts } = require('../src/functions');

describe('End to end test', () => {
  it('should order the products appropriately', () => {
    expect(compareCosts(3500, products).map(product => product.name)).to.deep.equal(['Packaged tariff', 'Basic electricity tariff']);
    expect(compareCosts(4500, products).map(product => product.name)).to.deep.equal(['Packaged tariff', 'Basic electricity tariff']);
    expect(compareCosts(6000, products).map(product => product.name)).to.deep.equal(['Basic electricity tariff', 'Packaged tariff']);
  });
});
