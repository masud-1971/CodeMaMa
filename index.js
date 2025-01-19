
// ***********************************
// Write a program using JavaScript to implement a function to generate all possible
// permutations of characters in a given string. For example, if the input is "abc,"
// the output should include "abc," "acb," "bac," "bca," "cab," and "cba."
// The output answers will be in sorted order
// *****************************





// JavaScript Program to generate all unique
// permutations of a string

// Recursive function to generate
// all permutations of strings

function recurPermute(index, s, ans) {

    // Base Case
    if (index === s.length) {
        ans.add(s.join(""));
        return;
    }

    // Swap the current index with all
    // possible indices and recur
    for (let i = index; i < s.length; i++) {
        [s[index], s[i]] = [s[i], s[index]];
        recurPermute(index + 1, s, ans);
        [s[index], s[i]] = [s[i], s[index]];
    }
}

// Function to find all unique permutations
function findPermutation(s) {

    // sort input string
    s = s.split("").sort();

    // Stores all unique permutations
    let res = new Set();
    recurPermute(0, s, res);

    // Convert Set to Array for the final answer
    return Array.from(res).sort();
}

const s = "ABC";
const res = findPermutation(s);
console.log(res.join(" "));



//*******************
//From Piku
//*****************


// function generatePermutations(inputString) {
//     const results = [];
//
//     function permute(arr, current) {
//         if (arr.length === 0) {
//             results.add(current.join(''));
//             // ans.add(s.join(""));
//         }
//         for (let i = 0; i < arr.length; i++) {
//             // আগের এলিমেন্ট বাদ দিয়ে পারমুটেশন তৈরি
//             const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
//             permute(newArr, current.concat(arr[i]));
//         }
//     }
//
//     permute(inputString.split(''), []);
//
//     // ফলাফল সজ্জিত করা
//     return results.sort();
// }
//
// // ইনপুট স্ট্রিং
// const inputString = "abc";
// // কার্যকরী কাজ করা এবং ফলাফল দেখা
// const result = generatePermutations(inputString);
// console.log(result);
