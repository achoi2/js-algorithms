// let anagram = (str1, str2) => {
//     if(str1.length !== str2.length) {
//         return false
//     }

//     let container1 = {};
//     let container2 = {};

//     for(let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         container1[char] = container1[char] + 1 || 1
//     }

//     for (let i = 0; i < str2.length; i++) {
//         let char = str2[i];
//         container2[char] = container2[char] + 1 || 1
//     }

//     for(char in container1) {
//         if(container1[char] !== container2[char]) {
//             return false
//         }
//     }
//     return true    
// }

// console.log(anagram('ello', 'olleh'))



// let anagram = (str1, str2) => {
//     if(str1.length !== str2.length) {
//         return false
//     }

//     let container1 = {};

//     for(let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         container1[char] = container1[char] + 1 || 1
//     }

//     for (let i = 0; i < str2.length; i++) {
//         let char = str2[i]

//         if(!container1[char]) {
//             return false
//         } else {
//             container1[char] -= 1;
//         }
//     }
//     return true    
// }

// console.log(anagram('hello', 'olleh'))




const letterToObj = (str) => {
    let container = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        container[char] = container[char] + 1 || 1
    }

    return container
}

console.log(letterToObj('aaaaaaaabbbbxxxpp', 'bbbjjaaapppeeeoo'))