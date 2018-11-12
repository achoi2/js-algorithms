const vowels = (str) => {
    let strArr = str.split('')
    
    let arr = ['a','e','i','o','u']

    let count = 0;

    for (let char of strArr) {
        for (let letter of arr) {
            if (char === letter) {
                count += 1
            }
        }
    }
    return count
}

console.log(vowels('how many vowels are there'))