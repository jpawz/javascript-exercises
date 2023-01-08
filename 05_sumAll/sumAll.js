const sumAll = function(start, end) {
    if(parametersAreInvalid(start, end)) {
        return "ERROR";
    }

    if(start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

const parametersAreInvalid = function(start, end) {
    return (typeof start !== 'number') 
    || (typeof end !== 'number')
    || (start < 0)
    || (end < 0)
}

// Do not edit below this line
module.exports = sumAll;
