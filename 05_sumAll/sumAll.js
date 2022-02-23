const sumAll = function(a, b) {
  // sort the two integers so it is always ascending
  const higherNum = Math.max(a,b);
  const lowerNum = Math.min(a,b);
  // initialize counter variable
  let sum = 0;
  // for loop starting from the lower number (inclusive) to the higher number (inclusive)
  for (let i = lowerNum; i <= higherNum; i++) {
    sum += i;
  }
  if (sum < 0 || typeof a === "string" || typeof b === "string" || typeof a === "object" || typeof b === "object") {
    return "ERROR";
  } else {
    return sum;
  }
  
};

// Do not edit below this line
module.exports = sumAll;
