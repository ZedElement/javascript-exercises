const convertToCelsius = function(firstTemperature){
  let convertedTemp = (firstTemperature - 32) * (5/9);
  let roundedConvertedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedConvertedTemp;
};

const convertToFahrenheit = function(secondTemperature) {
  let convertedTemperature = (secondTemperature * (9/5)) + 32;
  let roundedConvertedTemperature = Math.round(convertedTemperature * 10) / 10;
  return roundedConvertedTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
