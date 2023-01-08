const removeFromArray = function(arr, ...items) {
    let filteredArray = arr;
    items.forEach((item) => filteredArray = filteredArray.filter((i) => i !== item));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
