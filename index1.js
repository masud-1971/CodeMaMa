function generatePermutations(inputString) {
    const results = [];

    function permute(arr, current) {
        if (arr.length === 0) {
            results.push(current.join(''));
        }
        for (let i = 0; i < arr.length; i++) {
            // আগের এলিমেন্ট বাদ দিয়ে পারমুটেশন তৈরি
            const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
            permute(newArr, current.concat(arr[i]));
        }
    }

    permute(inputString.split(''), []);

    // ফলাফল সজ্জিত করা
    return results.sort();
}

// ইনপুট স্ট্রিং
const inputString = "abc";
// কার্যকরী কাজ করা এবং ফলাফল দেখা
const result = generatePermutations(inputString);
console.log(result.join(" "));
