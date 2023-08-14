//=========================== How to reverse a string and print it
var sen = "Pakistan sub ki jan";
var sorted = sen.split(" ").map((word) => {
    return word.split("").reverse().join("")
})
console.log(sorted.join(" "));
//=========================== How to check if an object is array or not
function isArray(element) {
    return Array.isArray(element)
}
console.log(isArray([]));     // true
console.log(isArray({}));     // false
//=========================== How to empty an array in JS
var fillArr = [1, 2, 3, 4, 5, 6];
console.log(fillArr.length);  // 6
fillArr.length = 0;
console.log(fillArr.length);  // 0
//=========================== How would you check if a numner is an integer Don't use "Number.isInteger()"
var isInt = 12.0;
if(isInt % 1 === 0){
    console.log("Integer");  // Integer
} else {
    console.log("Not !");
}
//=========================== Duplicate an arr = [1,2,3,4]; Answer is: [1,2,3,4,1,2,3,4];
function duplicateArr(arr) {
    return arr.concat(arr);
}
console.log(duplicateArr([1,2,3,4])); // [1, 2, 3, 4, 1, 2, 3, 4]
//=========================== A function that Reverse a number
function reverseNum(num) {
    return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNum(98));     // 89
console.log(reverseNum(11375));  // 57311
//=========================== Function that checks whether a string is palindrome or not
function isPlindrome(str) {
    var revNum = str.split("").reverse().join("");
    return str === revNum ? "Palindrome" : "Not Palindrome";
}
console.log(isPlindrome("racecar"));  // Palindrome
console.log(isPlindrome("loop"));    // Not Palindrome

