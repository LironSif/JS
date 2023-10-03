let obj = {};

const values = ["A", "B", "C"];  // Array to hold the possible values

for (let i = 1; i <= 10; i++) {
    const randomIndex = Math.floor(Math.random() * values.length);  // Generate a random index
    const randomValue = values[randomIndex];  // Use the random index to select a value from the array
    obj[`item${i}`] = { person: randomValue };  // Assign the random value to the person key
}

console.log(obj);

const count = (obj) => {
    let newObj = {};

    Object.values(obj).forEach(person => {
        const value = person.person;  // Access the person property of each object
        newObj[value] = (newObj[value] || 0) + 1;
    });

    return newObj;
};

const result = count(obj);  // Call the count function with obj as an argument
console.log(result);  // Log the result to the console
