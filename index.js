const express =  require ("express")
const ejsmate = require("ejs-mate")
const path = require("path")
const mongoose = require("mongoose")  
const detail = require("./models/info")
const favi = require("./favorits")
const app = express()

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

app.get("/:id",(req,res)=>{
    let id = req.params["id"]
    res.render("place.ejs",{ id })
})


app.listen(3000,()=>{
})