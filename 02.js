
const exampleAstronaut = {
  firstName: "Yuri",
  lastName: "Gagarin",
  nickname: "First!",
  prefix: "Cosmonaut"
}
const generateAstronautTag = (astronaut) => {
 return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
}
console.log(generateAstronautTag(exampleAstronaut))