const maxChars = str => {
    let container = {};
    let max = 0;
    let maxChar = '';

    for (let i = 0; i < str.length; i++) {
        container[str[i]] = container[str[i]] + 1 || 1;
    }

    for (let char in container) {
        if (container[char] > max) {
            max = container[char];
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(maxChars('aaaaaabbbcccvse'));
