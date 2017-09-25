
/**
 * Accept an array with 2 numbers.  Return the sum of all numbers
 * between the highest and lowest numbers passed * 
 * @param {int} arr 
 * @return {int} 
 */
function sumAll(arr) {
    var min = Math.min(arr[0],arr[1]),
        max = Math.max(arr[0],arr[1]),
        sum = 0;
    for (var i=min;i<=max;i++) {
      sum += i;
    }
    return sum;
  }
  
  sumAll([4, 1]);
  //should return 10