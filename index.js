const sumItems = function(array) {
  array.unshift(0);

  const originalLength = array.length - 1;
  let endOfArray = originalLength;

  prepEndOfArr();
  
  for (let i = 0; i < originalLength; i ++) {
    endOfArray = array.length - 1;

    prepEndOfArr();
    array[0] += Number(array.pop());
  }

  //return int
  return array[0];

  //hoisted above during runtime
  function prepEndOfArr() {
    if (Array.isArray(array[endOfArray])) {
      array[endOfArray] = sumItems(array[endOfArray]);
    }
  }
};

module.exports = sumItems;