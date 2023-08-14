// ____________________  PRACTICE PRACTICE PRACTICE ____________________  // 

// Q#1
var string = "Mera development ka 2 saal ka experience hai.";
var revWord = string.split(" ").map((word) => {
    return word.split("").reverse().join("");
});
console.log(revWord.join(" "));

// Q#2
let arr = [1,2,3];
let obj = {a: 1, b: 2, c: 3};
console.log(Array.isArray(arr));  // true
console.log(Array.isArray(obj));  // false

// Q#3
var arr1 = [1,2,3];
arr1.length = 0;
console.log(arr1);

// Q#4
function isInt(num) {
    return num%1 === 0 ? true : false;
}
console.log(isInt(9.1)); // false
console.log(isInt(9.0)); // true

// Q#5
function duplicate(arr) {
    return arr.concat(arr);
}
console.log(duplicate([1,2,3])); // [1, 2, 3, 1, 2, 3]

// Q#6
function revNum(num) {
        return Number(num.toString().split("").reverse().join(""));
}
console.log(revNum(6924));  // 4296

// Q#7
function isPalindrome(str) {
        var revStr = str.split("").reverse().join("");
    return revStr === str ? "Palindrome" : "Not Palindrome";
}
console.log(isPalindrome("racecar"));  // Palindrome
console.log(isPalindrome("pool"));     // Not Palindrome

// Q#8
function sort(str) {
    return str.split("").sort().join("");
}
console.log(sort("uoiea"));  // aeiou
console.log(sort("zig zag"));  // aggizz

// Q#9
function doUppeerCase(str) {
    var upperWord = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    return upperWord.join(" ");
}
console.log(doUppeerCase("how are you")); // How Are You

// Q#10
function occ(str) {
    var occObj = {};
    str.split("").forEach((word) => {
        if(occObj.hasOwnProperty(word) === true) {
            occObj[word]++;
        } else {
            occObj[word] = 1;
        }
    })
    return occObj;
}
console.log(occ("Hello"));