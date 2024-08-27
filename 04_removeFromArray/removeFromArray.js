const removeFromArray = function(array, ...arg) {
    return array.filter(x => !arg.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
