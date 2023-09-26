const express =  require ("express")
const ejsmate = require("ejs-mate")
const path = require("path")
const mongoose = require("mongoose")
const jsonUtils = require("./json_utils");  
const detail = require("./models/info")
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
    res.render("home.ejs", { details : JSON.stringify(details) })
})

app.get("/:id",(req,res)=>{
    let id = req.params["id"]
    res.render("place.ejs",{ id })
})


app.listen(3000,()=>{
})