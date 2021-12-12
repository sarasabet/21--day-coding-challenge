const confirmReentryPlans = (speed, missionData, checks) => {
  if(speed < checks.maxSpeed 
    && speed > checks.minSpeed 
    && missionData.astro.length === checks.dataEntries.astro 
    &&  missionData.bio.length === checks.dataEntries.bio 
    &&  missionData.physics.length === checks.dataEntries.physics){
    return true;
  }
  return false;
}


const speed = 40
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}
const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:3,
    bio:1,
    physics:1
  }
}
console.log(confirmReentryPlans(speed, missionData, checks))