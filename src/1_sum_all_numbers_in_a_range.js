function sumAll(arr) {
  // The formula for sum 2 number in a range is ((startNum + endNum) * numCount) / 2
  // Using Arithmetic Progression summing formula

  const [startNum, endNum ] = arr;
  const numCount = Math.abs(startNum - endNum) + 1

  return ((startNum + endNum) * numCount) / 2;
}
module.exports = sumAll;


// My method
//function sumAll(arr) {
//  let [start, end ] = arr.sort((a, b) => a - b);
//  let sum = 0;
//  while(start <= end) {
//    sum += start;
//    start += 1;
//  }
//  return sum;
//}


