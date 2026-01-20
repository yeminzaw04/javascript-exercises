const palindromes = str => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const nums = "1234567890";
    const cleanStr = str
    .toLowerCase()
    .split("")
    .filter(char => alphabets.includes(char.toLowerCase()) || nums.includes(char))
    .join("");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
};
console.log(palindromes('r3ace3car'))
// Do not edit below this line
module.exports = palindromes;
