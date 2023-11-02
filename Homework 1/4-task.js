function isPrime(value) {
    if (value <= 1) {
        return false;
    }
    if (value <= 3) {
        return true;
    }
    if (value % 2 === 0 || value % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= value) {
        if (value % i === 0 || value % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(-1));
