
const checkGaugeStatus = (gauge) => {
  if(gauge.min < gauge.current && gauge.max > gauge.current ){
    return true;
  }
  return false;
}
    const exampleGauge = {
      current:0.4,
      min:0.1,
      max:0.9
    }
    
console.log(checkGaugeStatus(exampleGauge))