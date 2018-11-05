const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            console.log('Fizzbuzz')
        }
        else if (i % 5 === 0) {
            console.log('Buzz')
        }
        else if (i % 3 === 0) {
            console.log('Fizz')
        }
        else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(100))