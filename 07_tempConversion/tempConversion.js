const ftoc = function(temp) {
  //(F-32) * 5/9
  let convertedTemp = (temp - 32) * 5/9;
  return Math.round(convertedTemp * 10) / 10;
};

const ctof = function(temp) {
  // 9/5 + 32
  let convertedTemp = temp * 9/5 + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
