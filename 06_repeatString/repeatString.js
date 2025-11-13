const repeatString = function(string, num) {
    let array = [];
    if (num < 0){
      return 'ERROR';
    }
    for (i = 0; i < num; i++){
      array.push(string);
    }
    return array.join('');
};

repeatString('hey', 3);


// Another soution that relies only on strings

// const repeatString = function(string, num){
//   let word = "";
//   if (num < 0){
//     return 'ERROR';
//   }
//   for (i = 0; i < num; i++){
//     word += string;
//   }
//   return word;
// }

// console.log(repeatString('hey', 3));


// Do not edit below this line
module.exports = repeatString;