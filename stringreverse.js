const stringReverse = (str) => {
    let arr = str.split('');
    let reversed = '';

    for(let char of arr) {
        reversed = char + reversed;
    }
    return reversed
}

console.log(stringReverse('olleh'))