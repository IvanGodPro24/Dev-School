function maxLeadersHonor(arr, d) {
    const n = arr.length;
    if (n % d !== 0 || d < 1 || d > 31 || n === 0) {
        return -1;
    }

    let maxHonor = 0;

    for (let i = 0; i < n; i++) {
        let currentSum = 0;

        for (let j = 0; j < d; j++) {
            const index = (i + j * (n / d)) % n;
            currentSum += arr[index];
        }

        maxHonor = Math.max(maxHonor, currentSum);
    }

    return maxHonor;
}

console.log(maxLeadersHonor([1, 2, 3, 4], 2));
console.log(maxLeadersHonor([1, 5, 6, 3, 4, 2], 3));
console.log(maxLeadersHonor([1, 1, 0], 1));


