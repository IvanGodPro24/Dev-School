function totalLandPerimeter(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === 'X') {
                perimeter += 4;

                if (i > 0 && arr[i - 1][j] === 'X') {
                    perimeter -= 2;
                }
                if (j > 0 && arr[i][j - 1] === 'X') {
                    perimeter -= 2;
                }
            }
        }
    }

    return `Total land perimeter: ${perimeter}`;
}

const array1 = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];

const array2 = [
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
];

console.log(totalLandPerimeter(array1));
console.log(totalLandPerimeter(array2));
