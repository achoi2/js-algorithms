const pyramid = (num) => {
    const midpoint = Math.floor((2 * num - 1) / 2);
    
    for (let row = 0; row <= num; row++) {
        let level = '';
        for (let col = 0; col < 2 * num - 1; col++) {
            if (midpoint - row <= col && midpoint + row >= col) {
                level += '#'
            } else {
                level += ' ';
            }
        }
        console.log(level)
    }
}

console.log(pyramid(6))

