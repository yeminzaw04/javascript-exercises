const fibonacci = num => {
    // Make sure the num is a number
    num = Number(num);

    // Negative value or zero
    if (num < 0) return "OOPS";
    if (num === 0) return 0;

    let first = 0;
    let second = 1;

    for (let i = 2; i <= num; i++) {
        let current = first + second;
        first = second;
        second = current;
    }

    return second;
}

// Do not edit below this line
module.exports = fibonacci;
