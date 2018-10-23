// calcuate the maximum sum of num consecutive elements

const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
};

console.log(maxSubarraySum([3, 4, 5, 6, 7, 8, 9, 10], 2));
