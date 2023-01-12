const palindromes = function (str) {
    const fixedStr = str.toLowerCase().replace(/\W/g, '');
    for (let i = 0; i < fixedStr.length / 2; i++) {
        if(fixedStr[i] !== fixedStr[fixedStr.length - 1 - i]) {
            return false;
        }        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
