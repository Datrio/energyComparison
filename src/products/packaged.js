module.exports = {
  name: 'Packaged tariff',
  model: (consumptionPerYear) => {
    if (consumptionPerYear < 0) {
      throw new Error('Invalid argument: consumptionPerYear is below 0');
    }

    const costUpToLimit = 800;
    const limitInKWH = 4000;
    const extraCostPerKWH = 0.3;

    return costUpToLimit + Math.max(0, consumptionPerYear - limitInKWH) * extraCostPerKWH;
  }
};