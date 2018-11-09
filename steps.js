const steps = (num) => {
    for (let row = 0; row < num; row++) {
        let stair = '';
        for (let col = 0; col < num; col++) {
            if (col <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair)
    }
}

console.log(steps(5))