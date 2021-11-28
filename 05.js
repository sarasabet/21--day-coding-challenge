
const addJobToAstronaut = (astronaut, job) => {
  astronaut.job = job
  return astronaut;
 }

     
 console.log(addJobToAstronaut(exampleAstronaut, "Shuttle DJ"))