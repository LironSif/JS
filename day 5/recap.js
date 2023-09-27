const nums = [223, 4567, 123, 99];

const bigger = nums.filter(num => {
    if (num > 100) {
        return true;
    }
    return false;  // Added for clarity
});

console.log('bigger', bigger);

function myFilter(originalArray, callback) {
   const newArr = [];
   for (let i = 0; i < originalArray.length; i++) {
       const element = originalArray[i];
       if (callback(element)) {  // Check if the callback returns true
           newArr.push(element);
       }
   }
   return newArr;
}

const result = myFilter(nums, (el) => {
    return el > 100;
});

console.log('result', result);  // Should log the numbers greater than 100
