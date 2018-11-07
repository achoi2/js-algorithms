const arrayChunk = (arr, size) => {
    const chunked = [];

    for (let elem of arr) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([elem]);
        } else {
            last.push(elem);
        }
    }
    return chunked;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6], 2));
