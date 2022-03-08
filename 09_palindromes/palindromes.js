const palindromes = function (string) {
  //filter out non-alphabetic
  let word = string.toLowerCase().replace(/[^a-z]/g,""); 
  //split string into array
  let array = word.split('');
  //create new array with order reversed
  const reverse = array.slice().reverse();
  //return true if the array is the same as the array in reverse, false if not
  let result = (array.length == reverse.length) && array.every(function(element, i){
    console.log(element);
    console.log(reverse[i]);
    return element === reverse[i];
  })
  return result;
};

// Do not edit below this line
module.exports = palindromes;
