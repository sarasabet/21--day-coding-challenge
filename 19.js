
const organizeData = (receivedData) => {
  let organizedList = {};

  for (const obj of receivedData) {
    if(!organizedList[obj.type]){
      organizedList[obj.type] =[obj.data]
    } else {
      organizedList[obj.type].push(obj.data)
    }   
  }
  return organizedList;

}

const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
]
console.log(organizeData(listOfReceivedData))
    