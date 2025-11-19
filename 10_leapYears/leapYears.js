const leapYears = function(year) {
    if (
        (year % 400 === 0) ||
        (year % 4 === 0 && year % 100 !== 0)
    ){
        return true
        // return `${year} is a leap year.`
    } else {
        return false
        // return `${year} is not a leap year.`
    }
};

// Do not edit below this line
module.exports = leapYears;
