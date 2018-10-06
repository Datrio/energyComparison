const assert = require('assert');

const calculateConsumption = (consumptionPerYear, model) => {
  if (typeof model !== 'function') {
    throw new TypeError('Invalid argument: model is not a function');
  }
  if (isNaN(Number(consumptionPerYear))) {
    throw new TypeError('Invalid argument: consumptionPerYear is not possible to typecast to a number');
  }

  // logic
  return model(Number(consumptionPerYear));
};

const compareCosts = (consumptionPerYear, products) => {
  if (isNaN(Number(consumptionPerYear))) {
    throw new TypeError('Invalid argument: consumptionPerYear is not possible to typecast to a number');
  }
  if (!Array.isArray(products)) {
    throw new TypeError('Invalid argument: products is not an array');
  }

  products.forEach(product => assert(typeof product.name === 'string', 'Invalid argument: name of product is not a string'));
  products.forEach(product => assert(typeof product.model === 'function', 'Invalid argument: model of product is not a function'))
  products.forEach(product => assert(typeof product.model(1000) === 'number', 'Invalid argument: model of product doesn\'t return a number'));

  // logic
  return products.map((product) => {
    return {
      name: product.name,
      annualCost: calculateConsumption(consumptionPerYear, product.model)
    };
  }).sort((a, b) => a.annualCost - b.annualCost);
};

module.exports = { calculateConsumption, compareCosts };