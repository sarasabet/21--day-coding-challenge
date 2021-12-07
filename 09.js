const listAstronautJobs = (roster) => {
  let jobList= [];
  for (const item of roster){
    jobList.push(item.job);
  }
  return jobList;
}

console.log(listAstronautJobs(exampleRoster))
    