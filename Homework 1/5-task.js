function highAndLow(numbers) {
    const numArray = numbers.split(' ').map(Number);

    const maxNumber = Math.max(...numArray);
    const minNumber = Math.min(...numArray);

    const result = `${maxNumber} ${minNumber}`;

    return result;
}


console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
