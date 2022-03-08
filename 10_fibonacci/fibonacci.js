const fibonacci = function(n) {
  if (n < 0) return 'OOPS';
  let i = 0;
  let array = [];
  let fib = 1;
  array.push(fib);
  while (i < n) {
    array.push(fib);
    fib += array[i];
    i++;
  } 
  return array[n - 1];
}
// Do not edit below this line
module.exports = fibonacci;
