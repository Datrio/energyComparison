module.exports = {
  name: 'Basic electricity tariff',
  model: (consumptionPerYear) => {
    if (consumptionPerYear < 0) {
      throw new Error('Invalid argument: consumptionPerYear is below 0');
    }

    const costPerMonth = 5;
    const costPerKWH = 0.22;

    return costPerMonth * 12 + consumptionPerYear * costPerKWH;
  }
};