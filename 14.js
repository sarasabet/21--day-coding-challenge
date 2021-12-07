
const switchAllTogglesOn = (toggleList) => {
  let NewToggleList = toggleList
  for (const obj of NewToggleList) {
    if (obj.isOn) {
      obj.isOn = false
    }
    obj.isOn = true
  }
  return NewToggleList;
}
const toggleList = [
  {
    name: "Air",
    isOn: true
  },
  {
    name: "Radio",
    isOn: false
  },
]
console.log(switchAllTogglesOn(toggleList))