const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1) ;

console.log(randomNumbers);

// ....................1.................

// const  doubleValues = randomNumbers.map(function(b) {
//     return b*2
// }
//  )
//  console.log(doubleValues)

// ....................2.................

// const evenNumbers = [];
// const onlyEvenValues = randomNumbers.map(function(b) {
//     if(b % 2 === 0){
//         evenNumbers.push(b);
//     }
// });
// console.log(evenNumbers);  

// ....................3..................

// let arr = ['rr', 4, 4, 'f', 43, 'yy'];

// let arr2 = arr.filter(function(b) {
//     return isNaN(b);
// });

// let firstElement = arr2[0];
// let lastElement = arr2[arr2.length - 1];

// console.log(firstElement, lastElement);  

// ....................4..................
// function vowelCount(str) {
//     str = str.toLowerCase();

//     let vowelCountObj = {a:0, e:0, i:0, o:0, u:0};

//     for(let i = 0; i < str.length; i++) {
       
//         if(vowelCountObj.hasOwnProperty(str[i])) {
//             vowelCountObj[str[i]]++;
//         }
//     }
//     return vowelCountObj;
// }

// console.log(vowelCount('Example string')); 

// ....................5..................

// function capitalize (str) {


//     let everyOtherstr = 
//     let cap = everyOtherstr.toUpperCase()
//     return cap
// }
// console.log(capitalize('sdad  asd dssdf dsfsd dsd'))


// ....................6..................



const stringToArr = (str) => {
    let newArr = str.split(' ');
    return newArr;
};

const result = stringToArr('hi bro go on');
console.log(result); 

const everyOtherWord = (arr) => {
    let newArr2 = arr.filter((word, index) => index % 2 === 0);
    return newArr2;
};

const filteredResult = everyOtherWord(result);
console.log(filteredResult);  

console.log(everyOtherWord(stringToArr('hi bro go you')));
 
function capitalize(filteredResult) {
    let cap = filteredResult.map(word => word.toUpperCase());
    return cap;
}

const capitalizedArray = capitalize(filteredResult);
console.log(capitalizedArray);

