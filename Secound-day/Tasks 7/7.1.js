const newArr = [3,  4,4, 3, 6, 3]
const noDub = [];

for(let i = 0; i < newArr.length; i++){
    if(noDub.indexOf(newArr[i]) === -1 ){
        noDub.push(newArr[i]);
    } 
}

console.log(noDub);