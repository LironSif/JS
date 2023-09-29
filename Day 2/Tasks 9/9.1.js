const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
  ];
  
  for (let i = 0; i < listOfNeighbours.length; i++) {
    let country = listOfNeighbours[i];
    for(let j = 0 ; j < country.length; j ++){
      console.log(`country name: ${country[j]}`);
    }
  }
  