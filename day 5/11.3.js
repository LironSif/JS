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
    },
    },
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
    
  

    let arr = data.map(function(n) {
        return n.name;
    });
    console.log(arr)


    let before1990 = data.filter(function(n) {
        let parts = n.birthday.split("-");
        let year = parseInt(parts[2], 10);  
        return year < 1990;
    });
    
    console.log(before1990);
    
    
    let foods = function (data) {
        let fod = {};
    
        data.forEach(function(person) {
            person.favoriteFoods.meats.forEach(function(meat) {
                if (fod[meat]) {
                    fod[meat] += 1;
                } else {
                    fod[meat] = 1;
                }
            });
    
            person.favoriteFoods.fish.forEach(function(fish) {
                if (fod[fish]) {
                    fod[fish] += 1;
                } else {
                    fod[fish] = 1;
                }
            });
        });
    
        return fod;
    };
    
    let fod = foods(data);
    console.log(fod);
    