const sumAll = function(a, b) {
  let sumTotal = 0;
  if (
    a < 1 || b < 1
    || !Number.isInteger(a)
    || !Number.isInteger(b)
  ){
    return 'ERROR'
  }
  for (let i = a; i <= b; i++){
    if (a < b){
      sumTotal += i;
    }
  }
  for (let i = b; i <= a; i++){
    if (a > b){
      sumTotal += i;
    }
  }
  return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
