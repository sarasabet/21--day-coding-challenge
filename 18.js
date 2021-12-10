const chooseLunchWinner = (listOfChoices) => {
  let choiseObj = [];
  for (const choice of listOfChoices){
    if(!choiseObj[choice]){
      choiseObj[choice] = 0;
    }
    choiseObj[choice] += 1;
  }

  const max= Object.keys(choiseObj).reduce(function(a, b){ return choiseObj[a] > choiseObj[b] ? a : b });
  return max;

}

const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich", 
  "Ice Cream Sandwich"
]

console.log(chooseLunchWinner(listOfChoices))
