const palindrome = (str1, str2) => {
    let arr = str1.split('');
    let container = '';

    for (let char of arr) {
        container = char + container
    }
    if (container === str2) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('ello', 'olleh'))