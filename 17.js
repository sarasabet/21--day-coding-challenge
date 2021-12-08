
const switchSpecificToggle = (toggleList, specificToggle) => {
  let newtoggleList = toggleList
  for (const obj of newtoggleList){
    if(obj.name === specificToggle){
      obj.isOn ? obj.isOn = false : obj.isOn = true
    }
  }
  return newtoggleList
}

const toggleList = [
  {
    name: "toggleA",
    isOn: false
    }, 
  {
    name: "toggleB",
    isOn: true
  }
]
const specificToggle = "toggleA"
console.log(switchSpecificToggle(toggleList, specificToggle))