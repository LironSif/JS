let obj = {
    name: 'ali',
    lastname: 'cohen'
}
let newobj = {}

function swap(originalObj) {
    for (let key in originalObj) {
        newobj[originalObj[key]] = key;
    }
}

swap(obj)
console.log(newobj)  
