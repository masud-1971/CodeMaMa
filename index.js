
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

// function recurPermute(index, s, ans) {
//
//     // Base Case
//     if (index === s.length) {
//         ans.add(s.join(""));
//         return;
//     }
//
//     // Swap the current index with all
//     // possible indices and recur
//     for (let i = index; i < s.length; i++) {
//         [s[index], s[i]] = [s[i], s[index]];
//         recurPermute(index + 1, s, ans);
//         [s[index], s[i]] = [s[i], s[index]];
//     }
// }
//
// // Function to find all unique permutations
// function findPermutation(s) {
//
//     // sort input string
//     s = s.split("").sort();
//
//     // Stores all unique permutations
//     let res = new Set();
//     recurPermute(0, s, res);
//
//     // Convert Set to Array for the final answer
//     return Array.from(res).sort();
// }
//
// const s = "ABC";
// const res = findPermutation(s);
// console.log(res.join(" "));



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





// *********************************
// Write a program to find the length of the longest substring in a given string without repeating characters. For example, in the string "abcabcbb," the longest substring without repeating characters is "abc," which has a length of 3.
//******************

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};

    for (let end = 0; end < s.length; end++) {
        if (charMap[s[end]] !== undefined) {
            start = Math.max(charMap[s[end]] + 1, start);
        }
        charMap[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// উদাহরণ ইনপুট
const inputString = "abcabcbb";
// সর্বোচ্চ সাবস্ট্রিংয়ের দৈর্ঘ্য বের করা
const result = lengthOfLongestSubstring(inputString);
console.log(result); // আউটপুট হবে 3
