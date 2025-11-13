const reverseString = function(string) {
  let splittedArr = string.split("");
  let reversedArr = splittedArr.reverse();
  let joinedArr = reversedArr.join("");
  return joinedArr;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
