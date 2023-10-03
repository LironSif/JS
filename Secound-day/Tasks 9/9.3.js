const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Hamburgers", "Olives"];

const compareArr = function (arr1, arr2) {

    if (arr1.length !== arr2.length) {
        console.log("not true");
        return;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("diff order");
            return;
        }
    }

    console.log("true");
}

compareArr(food1, food2);
