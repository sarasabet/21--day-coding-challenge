
const bookFreePlatform = (platformList, missionDate) => {
  for ( obj  of platformList){ 
    if( !obj.bookDate){
      obj.bookDate = missionDate;
      return platformList
    }  
  }
}
const missionDate = "2021-12-12"
const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate:undefined
  },
  {
    name:"Platform C",
    bookDate:undefined
  },
] 
console.log(bookFreePlatform (platformList, missionDate))