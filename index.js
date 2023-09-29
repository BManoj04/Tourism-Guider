const express =  require ("express")
const ejsmate = require("ejs-mate")
const path = require("path")
const mongoose = require("mongoose")  
const detail = require("./models/info")
const favi = require("./favorits")
const app = express()
https://dribbble.com/
mongoose.connect('mongodb://127.0.0.1:27017/Tourist')
.then(() =>{
    console.log("Mongo connected")
})
.catch(err => {
    console.log("Mongooes error")
})

app.use(express.static(path.join(__dirname, "public")))

app.engine("ejs", ejsmate)
app.set("view engine", "ejs")

// <----------------------------------------------------------------------------------->

app.get("/", async (req,res)=>{
    const details = await detail.find({}) 
    const dbDatas = await detail.find({})
    res.render("home.ejs", { details : JSON.stringify(details) , favi , dbDatas })
})

app.get("/:id",async(req,res)=>{
    let id = req.params["id"].toString()
    const details = await detail.find({})
    const dbData = await detail.findOne({_id:id})
    res.render("place.ejs",{ details : JSON.stringify(details), id ,dbData})
})
app.use(() =>{
    console.log("manoj")
})

app.listen(3000,()=>{
})