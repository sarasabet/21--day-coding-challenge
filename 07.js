
const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  const tempFarenhitToCelsius= Math.round((temperature-32) *(5/9))
  const windSpeedMeterPerSecond =Math.round((windSpeed *1609.34) / (60*60))
  let newObj = {};
  newObj.temperature = tempFarenhitToCelsius;
  newObj.windSpeed = windSpeedMeterPerSecond;
  newObj.windDirection = windDirection;
  newObj.condition =condition;


  return newObj;
}

const temperature = 32
const condition = "Sunny with small clouds"
const windSpeed = 20
const windDirection = "NNE"
console.log(storeWeatherConditions(temperature, condition, windSpeed, windDirection) )