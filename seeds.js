const mongoose = require("mongoose")
const detail = require("./models/info")


mongoose.connect('mongodb://127.0.0.1:27017/Tourist')
    .then(() =>{
        console.log("Mongo connected")
    })
    .catch(err => {
        console.log("Mongooes error")
    })

const p = new detail({
    name: "FunSpot Entertainers(Kids Play Area & VR Games)",
    shortDescription: "FunSpot Entertainers is a video arcade, amusement center, park, indoor playground",
    longDescription: "Most Amazing & Cheapest Game Center at Madurai with Lot of New Games also has Biggest Play Area in Madurai.Kids will have valuable time for entertainment along with parents. Most Interesting thing is Recharge Less Play More and Redeem Free Gift for Tickets. It is about 0.50 kilometers away from the Madurai Junction railway station.",
    category: "Entertainment",
    contactInformation: "4524520240",
    latitude: "9.927548",
    longitude: "78.126869",
    address: " 7th Floor Theni Anantham Readymades, No19, Junction,Thiruvenkatapuram, Goripalayam,Tamil Nadu 625002"
})
p.save().then(p => {console.log(p)})
.catch(e => {console.log(e)})
