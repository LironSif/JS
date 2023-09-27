const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

// 1 iterat over each element in food1
// 2 compare each element from food1 to food2

compareArr =  function (arr1, arr2) {
    for ( let i =0; i < arr1.length; i++){
        console.log(arr1[i])
        if(arr1[i].inclode(arr2))
        return console.log("same")
    }else {
        return console.log(" not same")
    }


}
compareArr(food1,food2);