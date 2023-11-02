function hanoiTowerMoves(discs) {
    if (discs <= 0) {
        return 0;
    } else {
        return 2 * hanoiTowerMoves(discs - 1) + 1;
    }
}

const numberOfDiscs = 3;
const movesRequired = hanoiTowerMoves(numberOfDiscs);
console.log(`Для ${numberOfDiscs} дисків потрібно зробити ${movesRequired} ходів.`);
