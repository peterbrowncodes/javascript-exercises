const convertToCelsius = function(fTemp) {
//  x °C ≘ (x × ⁠9/5⁠ + 32) °F
  return Math.round(((fTemp - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
//  x °F ≘ (x − 32) × ⁠5/9⁠ °C
  return Math.round(((cTemp * (9/5)) + 32) * 10) / 10;  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
