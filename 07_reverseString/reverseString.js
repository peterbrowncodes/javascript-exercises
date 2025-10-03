const reverseString = function(input) {
/* 
- break string into individual letters in array
- loop through array in reverse order
- write letters to output
*/
    let string = input
    let array = []
    for (i = 0; i < input.length; i++) {
        array.push(string[i])
    }
    array.reverse()
    return array.join("")
};

// Do not edit below this line
module.exports = reverseString;
