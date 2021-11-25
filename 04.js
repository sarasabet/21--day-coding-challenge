
const switchToggle = (toggle) => {

  if (toggle.isOn ) {
    toggle.isOn = false;
    } 

  else if (!toggle.isOn) {
    toggle.isOn = true;
  }
  
   return toggle;
  
}

const someToggle = {
  name:"toggleA",
  isOn:true
}

console.log(switchToggle(someToggle))