const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

    function getCandy(candyStore, id){

        const retrivedBook = candyStore.candies.find(c => c.id == id)
        console.log(retrivedBook)
        }
        getCandy(candyStore, "5hd7y")