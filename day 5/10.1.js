// ...........................................................................................
// function isString(str, callback) {
//     if (typeof str === 'string') {
//         callback(str);
//     }
// }
// let callback = function(x) {
//         console.log(x);
// }
// isString('dede', callback); 

// ...........................................................................................
// function firstWordUpperCase(str, callback) {
//     let end = str.indexOf(' ');
//     if (end === -1) endOfFirstWord = str.length;

//     const cap = str.slice(0, end).charAt(0).toUpperCase() + str.slice(1, end);
//     const restOfString = str.slice(end);

//     const result = cap + restOfString;

//     callback(result);
// }

// let addDashe = function(input) {
//     const dashed = input.split(' ').join('-');
//     console.log(dashed);
// };
// firstWordUpperCase('hello world!', addDashe); 
// ...........................................................................................
// function calc (num1, num2, callback) {
//     const result = callback(num1, num2);
//     console.log(result);
// }

// let multiply = function(x, y) {
//     return x * y;
// };
// calc(5, 4, multiply);  
// ...........................................................................................
