const removeFromArray = function(arr, ...value) {
    return arr.filter(ele => !value.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
