const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const filteredString = string
    .toLowerCase()
    .split('')
    .filter((a) => alphanumerical.includes(a))
    .join('')
  const reverseString = filteredString.split('').reverse().join('');

  if (filteredString === reverseString){
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
