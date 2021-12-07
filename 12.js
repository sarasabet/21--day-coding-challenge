const parseTranscripts = (messages) => {
  let parssedMessage = [];
  for ( const obj of messages){
    parssedMessage.push(`${obj.origin}: ${obj.message}`)
  }
  return parssedMessage;
}
const messages = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
]
console.log(parseTranscripts(messages))