const reverseString = function(string) {
  const stringLength =  string.length - 1;
  const stringArray = string.split("");
  let reversedString = '';
  for (i = stringLength; i >= 0; i--) {
    reversedString += stringArray[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
