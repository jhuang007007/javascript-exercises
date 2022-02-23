const removeFromArray = function(array) {
  let args = Array.prototype.slice.call(arguments);
  args.sort(function(a, b){return a - b});
  for (let i = args.length-1; i > 0; i--) {
    if (array.includes(args[i])) {
      array.splice(args[i]-1, 1);
    }
  }
  return array;

};

// Do not edit below this line
module.exports = removeFromArray;
