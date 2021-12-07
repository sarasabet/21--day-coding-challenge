const checkAllGauges = (gaugeList) => {
  let isInRange = true;
  for (const obj of gaugeList) {
    if (obj.min > obj.current || obj.max < obj.current) {
      isInRange = false
    }
  }
  return isInRange;
}

const gaugeList = [
  {
    current: 0.4,
    min: 0.1,
    max: 0.9
  },
  {
    current: 1.2,
    min: 0.1,
    max: 0.6
  }
]
console.log(checkAllGauges(gaugeList))