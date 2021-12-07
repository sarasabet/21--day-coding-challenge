
const averageWindSpeed = (weatherEntries) => {
  let listOfWindSpeed = 0;
  let count = 0;
  for (const obj of weatherEntries){
    listOfWindSpeed += (obj.windSpeed);
    count += 1;
  }
  return Math.round(listOfWindSpeed / count)
}
const exampleEntries = [
  { 
    temperature:0, 
    weather:"sunny", 
    windDirection: "NNE", 
    windSpeed:24
  },
  { 
    temperature:10, 
    weather:"cloudy", 
    windDirection: "NNE", 
    windSpeed:9 
  }
] 
console.log(averageWindSpeed(exampleEntries))