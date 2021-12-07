
const getAverageSpeed = (firstPosition, secondPosition) => {
  let averageSpeed =((secondPosition.altitude -firstPosition.altitude) / (secondPosition.time - firstPosition.time)).toFixed(1)
  return Number(averageSpeed);
}

const firstPosition = {
  time: 1637074462,
  altitude: 1100
}
const secondPosition = {
  time: 1637074558,
  altitude: 2200
}
console.log(getAverageSpeed(firstPosition, secondPosition))