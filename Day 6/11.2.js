const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1) ;

console.log(randomNumbers);


// const  doubleValues = randomNumbers.map(function(b) {
//     return b*2
// }
//  )
//  console.log(doubleValues)
// ...........................................
// const evenNumbers = [];
// const onlyEvenValues = randomNumbers.map(function(b) {
//     if(b % 2 === 0){
//         evenNumbers.push(b);
//     }
// });
// console.log(evenNumbers);  
// ...........................................
// const evenNumbers = [];
// const onlyEvenValues = randomNumbers.map(function(b) {
//     if(b % 2 === 0){
//         evenNumbers.push(b);
//     }
// });
// console.log(evenNumbers);  



let arr = ['rr', 4, 4, 'f', 43, 'yy'];

let arr2 = arr.filter(function(b) {
    return isNaN(b);
});

let firstElement = arr2[0];
let lastElement = arr2[arr2.length - 1];

console.log(firstElement, lastElement);  
