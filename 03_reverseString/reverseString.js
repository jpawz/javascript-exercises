const reverseString = function(str) {
    const strArray = str.split('');
    strArray.reverse();
    return strArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
