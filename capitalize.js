const capitalize = (str) => {
    let words = [];
    let splitWords = str.split(' ')
    for (let i = 0; i < splitWords.length; i++) {
       words.push(splitWords[i][0].toUpperCase() + splitWords[i].slice(1))
    }
    return words.join(' ')
}

console.log(capitalize('hello world'))