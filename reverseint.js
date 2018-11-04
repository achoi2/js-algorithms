const reverseInt = (num) => {
    let reversed = parseInt(num.toString().split('').reverse().join(''))
    return Math.sign(num) * reversed
}

console.log(reverseInt(-90));