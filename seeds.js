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
    name: "Vishaal De Mal",
    shortDescription: "Vishaal De Mall featuring popular retail shops & boutiques, a range of eateries & a movie theater.",
    longDescription: "Vishaal de Mal is a shopping mall in the city of Madurai, Tamil Nadu. It is the 20th large format mall in southern Tamil Nadu and the city's first integrated multi-utility mall.The mall has theater with five Inox screens with a total capacity of 1302 (the screens have 166, 178, 350, 318, and 290 seats respectively). It has a parking capacity of about 150 cars.",
    category: "Entertainment",
    contactInformation: "09842968285",
    latitude: "9.939351418077536",
    longitude: "78.1357275779072",
    address: "W4QP+8C4, Gokhale Rd, chinna chokkikulam, Madurai, Tamil Nadu 625002"
})
p.save().then(p => {console.log(p)})
.catch(e => {console.log(e)})
