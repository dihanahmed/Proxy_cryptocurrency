//external api service
function SpaceagencyAPI()
{
  this.getValue = function(people)
  {
    console.log("Calling External API...")
    switch(people)
    {
      case "USA":
        return "NASA"
      case "RUSSIA":
        return "ROSCOSMOS"
      case "EUROPE":
        return "ESA"
       default:
        return "NA"
    }
  }
}


//const api= new SpaceagencyAPI()
//
//console.log(api.getValue("USA"))
//console.log(api.getValue("RUSSIA"))
//console.log(api.getValue("EUROPE"))


function SpaceagencyProxy()
{
  this.api = new SpaceagencyAPI()
  this.cache = {}

  this.getValue = function(people)
  {
    if(this.cache[people] == null)
    {
      this.cache[people] = this.api.getValue(people)
    }
    return this.cache[people]
  }
}

console.log("----------With Proxy----------")
const proxy = new SpaceagencyProxy()
console.log(proxy.getValue("USA"))
console.log(proxy.getValue("RUSSIA"))
console.log(proxy.getValue("EUROPE"))
console.log(proxy.getValue("USA"))
console.log(proxy.getValue("RUSSIA"))
console.log(proxy.getValue("EUROPE"))
console.log(proxy.getValue("USA"))
console.log(proxy.getValue("RUSSIA"))
console.log(proxy.getValue("EUROPE"))


