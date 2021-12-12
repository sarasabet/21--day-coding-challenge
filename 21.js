
const parseMessage = (origin, message)=> {
  return (origin + ': '+ message)
};

const parseMissionSummary = (exchanges, missionData) => {
  const missionSummary = {
    transcript:[],
  }
  for (let i = 0; i < exchanges.length; i++){
    let x = parseMessage((exchanges[i].origin), exchanges[i].message);
    missionSummary.transcript.push(x);
  };
  missionSummary.missionData = missionData;
  return missionSummary
};


const exchanges = [
  {origin:"MC", message:"So how is it out there?"},
  {origin:"Shuttle", message:"Oh it's pretty nice!"},
  {origin:"MC", message:"Did you like the challenges?"},
]
   
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}

console.log(parseMissionSummary (exchanges, missionData))
