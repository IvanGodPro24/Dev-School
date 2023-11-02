class Vector {
    constructor(array) {
        this.array = array;
    }

    add(other) {
        if (this.array.length !== other.array.length) {
            console.log("Arrays must have the same length");
        } else {
            let Sum = [];
            for (let i = 0; i < this.array.length; i++) {
                let sum = this.array[i] + other.array[i];
                Sum.push(sum);
            }
            return new Vector(Sum);
        }
    }

    subtract(other) {
        if (this.array.length !== other.array.length) {
            console.log("Arrays must have the same length");
        } else {
            let Subtract = [];
            for (let i = 0; i < this.array.length; i++) {
                let subtract = this.array[i] - other.array[i];
                Subtract.push(subtract);
            }
            return new Vector(Subtract);
        }
    }

    dot(other) {
        if (this.array.length !== other.array.length) {
            console.log("Arrays must have the same length");
        } else {
            let dot = 0;
            for (let i = 0; i < this.array.length; i++) {
                let product = this.array[i] * other.array[i];
                dot += product;
            }
            return dot;
        }
    }

    norm() {
        let Norm = 0;
        for (let i = 0; i < this.array.length; i++) {
            let norm = Math.pow(this.array[i], 2);
            Norm += norm;
        }
        return Math.sqrt(Norm);
    }

    toString() {
        return `(${this.array.join(',')})`;
    }

    equals(other) {
        if (this.array.length !== other.array.length) {
            return false;
        } else {
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] !== other.array[i]) {
                    return false;
                }
            }
            return true;
        }
    }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));      // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c));      // throws an error
console.log(a.toString());  // should return '(1,2,3)'
console.log(a.equals(b));   // should return false
