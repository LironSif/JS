function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

    const pokemon1 = new Pokemon("Pikachu", "Electric", ["Thunderbolt", "Quick Attack", "Iron Tail"]);
    const pokemon2 = new Pokemon("Charizard", "Fire/Flying", ["Flamethrower", "Dragon Claw", "Fly"]);
    const pokemon3 = new Pokemon("Squirtle", "Water", ["Water Gun", "Bubble", "Withdraw"]);


    Pokemon.prototype.callPokemon = function () {
        console.log('I choose you,' + this.name  )
    }
    pokemon1.callPokemon(); 