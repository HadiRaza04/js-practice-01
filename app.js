//=========================== 1) How to reverse a string and print it
var sen = "Pakistan sub ki jan";
var sorted = sen.split(" ").map((word) => {
    return word.split("").reverse().join("")
})
console.log(sorted.join(" "));
//=========================== 2) How to check if an object is array or not
function isArray(element) {
    return Array.isArray(element)
}
console.log(isArray([]));     // true
console.log(isArray({}));     // false
//=========================== 3) How to empty an array in JS
let fillArr = [1, 2, 3, 4, 5, 6];
console.log(fillArr.length);  // 6
fillArr.length = 0;
console.log(fillArr.length);  // 0
//=========================== 4) How would you check if a numner is an integer Don't use "Number.isInteger()"
let isInt = 12.0;
if(isInt % 1 === 0){
    console.log("Integer");  // Integer
} else {
    console.log("Not !");
}
//=========================== 5) Duplicate an arr = [1,2,3,4]; Answer is: [1,2,3,4,1,2,3,4];
function duplicateArr(arr) {
    return arr.concat(arr);
}
console.log(duplicateArr([1,2,3,4])); // [1, 2, 3, 4, 1, 2, 3, 4]
//=========================== 6) Func that Reverse a number
function reverseNum(num) {
    return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNum(98));     // 89
console.log(reverseNum(11375));  // 57311
//=========================== 7) Func that checks whether a string is palindrome or not
function isPlindrome(str) {
    var revNum = str.split("").reverse().join("");
    return str === revNum ? "Palindrome" : "Not Palindrome";
}
console.log(isPlindrome("racecar"));  // Palindrome
console.log(isPlindrome("loop"));    // Not Palindrome
//=========================== 8) Func that returns a passed string with letters in alphabetical order
function alphabeticalOrder(string) {
    return string.toLowerCase().split("").sort().join("");
}
console.log(alphabeticalOrder("uoeai"));     // aeiou
console.log(alphabeticalOrder("Pakistan"));  // aaiknpst
//=========================== 9) Func that converts the first letter of each word of the string in uppercase
function capitalize(str) {
    var allWords = str.split(" ").map((x) => {
        return x.charAt(0).toUpperCase() +  x.substring(1);
    })
    return allWords.join(" ");
}
console.log(capitalize("how are you ???"));  // How Are You ???
//=========================== 10) Func to get the no of occurrence of each letter in specified string
function occ(elem) {
    var occurence = {};
    elem.split("").forEach((alphabet) => {
        if(occurence.hasOwnProperty(alphabet) === false){
            occurence[alphabet] = 1;
        } else {
            occurence[alphabet]++;
        }
    });
    return occurence;
}
console.log(occ("raza"));
//=========================== 11) Loop an array and add all members of it
let members = [1,2,3,4,5];
let addMember = 0;
members.forEach((member) => {
    addMember += member;
})
console.log(addMember);   // 15
//=========================== 12) In an array of numbers and string, only add those members which are not
let memberrs = [1, "addMe", 122, "subtractMe", 4, "multiplyMe", "divideMe", 3];
let summ = 0;
memberrs.forEach((mem) => {
    if(typeof mem === "number") {
        summ += mem;
    }
})
console.log(summ);        // 130
//=========================== 13) JS Function to clone an array
function cloneArr(arr) {
    var newArrr = [];
    arr.forEach((elem) => {
        newArrr.push(elem);
    })
    return newArrr;
}
console.log(cloneArr([1,2,4,9]));





