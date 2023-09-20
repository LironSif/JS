let mycountry = {
  country: "Israel",
  capital: "jerusalem",
  language: "Hebrew",
  population: 10,
  neighbours: ["Jorden", "Egypt", "Labanon",],
  describe: function() {
    return `${this.country} has a population of ${this.population} million people, the capital is ${this.capital}, the native language is ${this.language}, and it has ${this.neighbours.length} neighbouring countries: ${this.neighbours.join(', ')}.`;
  }
};

console.log(mycountry.describe());

mycountry.checkIsland = function() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  };

  mycountry.checkIsland();
console.log( 'is a island ', mycountry.isIsland);