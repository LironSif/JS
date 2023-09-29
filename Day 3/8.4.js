const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
function counter(arr){
    let arrString = arr.join('')
    const count = {}
    let max = 0
    let maxch 
    for(let i = 0; i < arrString.length ; i++){

        let ch = [arrString[i].toLowerCase()]
        if (ch === " " ) continue
        if(count[ch]){
            count[ch] += 1
        }else{
            count[ch] = 1
        }
       if(count[ch] > max){
        max = count[ch]
        maxch = ch

       }
    }
    return maxch
}

console.log(counter(array))
