function rearrangeDigits(number) {
    if (number < 0) {
        return false
    }
    const sortedDigits = number.toString().split('').sort((a, b) => b - a).join('');

    const result = parseInt(sortedDigits, 10);
    return result;
}

console.log(rearrangeDigits(42145));
console.log(rearrangeDigits(145263));
console.log(rearrangeDigits(123456789));