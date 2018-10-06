const chai = require('chai');
const expect = chai.expect;

const { calculateConsumption, compareCosts } = require('../src/functions');

const emptyModel = _ => _;

describe('calculateConsumption', () => {
  it('should convert first argument to a number when possible', () => {
    expect(calculateConsumption(1000, emptyModel)).to.equal(1000);
    expect(calculateConsumption('1000', emptyModel)).to.equal(1000);
    expect(calculateConsumption([1000], emptyModel)).to.equal(1000);

    expect(calculateConsumption(0, emptyModel)).to.equal(0);
    expect(calculateConsumption(null, emptyModel)).to.equal(0);
  });
  it('should handle errors', () => {
    expect(() => calculateConsumption()).to.throw(/Invalid argument/);
    expect(() => calculateConsumption(undefined, emptyModel)).to.throw(/Invalid argument/);
    expect(() => calculateConsumption(1000, 'notFunction')).to.throw(/Invalid argument/);
  });
});

describe('compareCosts', () => {
  it('should handle errors', () => {
    expect(() => compareCosts(1000, [{}])).to.throw(/Invalid argument/);
    expect(() => compareCosts(1000, [{ a: 'a', b: 'b' }])).to.throw(/Invalid argument/);
    expect(() => compareCosts(1000, [{ name: 0 }])).to.throw(/Invalid argument/);
    expect(() => compareCosts(1000, [{ name: 'a', model: 'model' }])).to.throw(/Invalid argument/);
    expect(() => compareCosts(1000, [{ name: emptyModel, model: emptyModel }])).to.throw(/Invalid argument/);
  });
});
