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


// Do not edit below this line
module.exports = repeatString;