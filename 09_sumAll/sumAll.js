const sumAll = function(a, b) {
/*
- check the parameters are both positive
- variable to store the final sum
- loop through all numbers between the parameters
- add current number to the final sum
- iterate up 1 number through the final number
*/
    if ((a > 0 && Number.isInteger(a)) && (b > 0 && Number.isInteger(b))){
        let finalSum = 0
        if (a > b) {
            for (i = a; i >= b; i--) {
            finalSum += i;
            }
        } else {
            for (i = a; i <= b; i++) {
            finalSum += i;    
            }
        };
        return finalSum;
    } else {
        return "ERROR"
    };
};

// Do not edit below this line
module.exports = sumAll;
