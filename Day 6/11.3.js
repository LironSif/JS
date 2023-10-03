const data = [



    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },




    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },},
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];

    const getname = (obj) => {
        let names = obj.map((name2) => name2.name);
        return names;
    };

    const namesArray = getname(data);
    // console.log(namesArray);
    const Before1990 = (obj) => {
        return obj.filter(person => {
            let year = person.birthday.split('-')[2];
            return parseInt(year) < 1990;
        });
    };
    
    const peopleBefore1990 = Before1990(data);
    console.log(peopleBefore1990);



    const countFoods = (data) => {
        let foodCounts = {};
    
        data.forEach(person => {

          
            ['meats', 'fish'].forEach(foodType => {

                console.log(foodType)

                person.favoriteFoods[foodType].forEach(food => {

                    console.log(food)

                    foodCounts[food] = (foodCounts[food] || 0) + 1;
                    console.log(foodCounts)
                });
            });
        });
        console.log(foodCounts)
        return foodCounts;
    };
    
    const foodCountsObj = countFoods(data);
    console.log(foodCountsObj);
    
    