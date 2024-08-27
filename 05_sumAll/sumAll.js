const sumAll = function(min, max) {
    // error handling
    if (!Number.isInteger(min) || (!Number.isInteger(max))) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    // swapping min and max if min is greater than max
    if (min > max) [min, max] = [max, min];

    // looping through every number in range(min, max) and adding them
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
