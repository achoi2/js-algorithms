// let equalsZero = (arr) => {
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]]
//         } else if (sum > 0) {
//             right--
//         } else {
//             left++
//         }
//     }
// }

// console.log(equalsZero([-3, -2, -1, 1, 2, 3, 4, 5]));


// const uniqueValues = (arr) => {
//     let i = 0;

//     for (let j = 1; j < arr.length; j++) {
//         if(arr[i] !== arr[j]) {
//             i++
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }


// console.log(uniqueValues([1,1,1,3,3,3,4,4,5,6,6]))