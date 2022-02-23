const removeFromArray = function(array) {
  let args = Array.prototype.slice.call(arguments);
  args.sort.reverse;
  for (let i = 1; i < args.length; i++) {
    if (array.includes(args[i])) {
      array.splice(args[i]-1, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
