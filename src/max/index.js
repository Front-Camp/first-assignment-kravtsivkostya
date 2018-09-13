/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
var number = arr[0];

  for ( var i = 1 ; i < arr.length ;i++){
    if (isNaN(arr[i]))
      continue;
    if (number <= arr[i])
      number = arr[i];
      }
  return number;
};

export default max;
