function groupAnagrams(arr) {
    const anagramGroups = {};

    for (const word of arr) {
        const sortedWord = word.split('').sort().join('');

        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }

        anagramGroups[sortedWord].push(word);
    }

    return Object.values(anagramGroups);
}

const result = groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
console.log(result);
