
const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  let  daysRemaining= (Math.ceil((Math.abs(Date.parse(fakeToday) - Date.parse(launchDate)))/(1000 * 60 * 60 * 24)))

  let output = {
    missionName:missionName,
    daysRemaining: daysRemaining
  }
  return output
}
const launchDate = "2021-12-12"
const fakeToday = "2021-12-01"
const missionName = "Moon visit"

console.log(timeRemaining(launchDate, missionName, fakeToday))

