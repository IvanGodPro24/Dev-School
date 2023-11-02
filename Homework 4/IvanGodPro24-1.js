class VigenèreCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(message) {
        return this.transform(message, (msgChar, keyChar) => {
            const shift = this.alphabet.indexOf(keyChar);
            return this.shiftCharacter(msgChar, shift);
        });
    }

    decode(message) {
        return this.transform(message, (msgChar, keyChar) => {
            const shift = this.alphabet.indexOf(keyChar);
            return this.shiftCharacter(msgChar, -shift);
        });
    }

    shiftCharacter(char, shift) {
        if (this.alphabet.includes(char)) {
            const currentIndex = this.alphabet.indexOf(char);
            const newIndex = (currentIndex + shift + this.alphabet.length) % this.alphabet.length;
            return this.alphabet[newIndex];
        }
        return char;
    }

    transform(message, operation) {
        let result = '';
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            const msgChar = message[i];
            const keyChar = this.key[keyIndex % this.key.length];

            result += operation(msgChar, keyChar);

            if (this.alphabet.includes(msgChar)) {
                keyIndex++;
            }
        }

        return result;
    }
}

const abc = "abcdefghijklmnopqrstuvwxyz";
const key = "password";
const cipher = new VigenèreCipher(key, abc);

console.log(cipher.encode('codewars'));
console.log(cipher.decode('rovwsoiv'));
console.log(cipher.encode('waffles'));
console.log(cipher.decode('laxxhsj'));
console.log(cipher.encode('CODEWARS'));
console.log(cipher.decode('CODEWARS'));