
const addJobToAstronaut = (astronaut, job) => {
  astronaut.job = job
  return astronaut;
 }
const exampleAstronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
}
     
 console.log(addJobToAstronaut(exampleAstronaut, "Shuttle DJ"))