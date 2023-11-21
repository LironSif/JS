const myOBj = {apple: 5, banana: 3 , kiwi: 2, orange:9}

// “I Got 5 Apples”

const printFunc = function (obj) {
    Object.keys(obj).forEach ((el) => {
        console.log(`i got ${obj[el]} ${el}s` )
        console.log(el)
    })
}

printFunc(myOBj)

// Kiwi is the cheapest fruit - orange is the most expensive fruit

const priceChecker = (obj) => {
    let max = 0
    let min = 100
    let maxName ,minName;
    Object.keys(obj).forEach((el) => {
        if(obj[el] > max){
            max = obj[el]
            maxName = el
        }
        if(obj[el]< min){
            min=obj[el]
            minName = el
        }
    })
    console.log(`${maxName} is the expensive fruit - `)


    // newObj = Object.keys(obj)
    // console.log(newObj)

}

// priceChecker(myOBj)

const myObj2 = {abc: 500,asdf:348,asr:453,xcvb:876,ht:467}

const resolver = (obj) => {
    let sum = 0
    Object.keys(obj).forEach ((el) => {
        console.log(el.length)
        if(el.length < 4 && el.length > 2 ){
            console.log(el.length)
            console.log(obj[el])
            sum += obj[el]
        }
    })
    console.log(sum)
    }
resolver(myObj2)

const priceUpdate = (obj, precent) => {
    let newPrice = 0;
    Object.values(obj).forEach((el) => {
        newPrice = el * (`1.${precent}`)
        console.log(newPrice);
        return newPrice  // למה לא צריך
    })
}
priceUpdate(myOBj, 10)
// יש דרך אחרת באחוזים?// \האם יש אפשרות למאפ או משהו אחר מה קורה שרוצים להחזיר מערך ת ומה עושים להפוך לא אסינק ך
