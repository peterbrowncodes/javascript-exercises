const leapYears = function(year) {
/*
leap years are:
- divisible by 4
- divisible by 400
- not divisible by 100
*/
isLeapYear = false

if (year % 100 === 0) {
    if (year % 400 === 0) {
        isLeapYear = true;
    };
} else {
    if (year % 4 === 0) {
        isLeapYear = true;
    };
};
return isLeapYear;
};
// Do not edit below this line
module.exports = leapYears;
