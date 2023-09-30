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
    name: "Tamilaga Unavu Viduthi",
    shortDescription: "Well known for Indian ,Asian , Non-Veg hotel.Stands Among  61hotel of 228 restaurants in Madurai.Located at 1.5kms  distance from Meenakshi Amman Temple ",
    longDescription: "Excellent non-vegetarian meals served in a cosy environment. Variety and taste at fair rates. There is a lot of earthenware and vintage-style decor in the eating area. amiable table service.Despite offering some vegetarian options, this is primarily a good non-vegetarian restaurant. The pricing is reasonable and the taste is good. Excellent for takeaway options as well. On the main thorough fare.a reasonably priced hotel with good service and delectable meals. Even if you arrive late at night, food is still served hot.",
    category: "Restaurants",
    contactInformation: "73737 66660",
    latitude: "9.91730",
    longitude: "78.13056",
    address: "No: 237, Near Alankar Deluxe Theatre, Krishna Puram, Madurai-625009 Tamil Nadu,India",
    qrcode:"https://maps.app.goo.gl/UD5F7J8LN1kApTnS6"
})
p.save().then(p => {console.log(p)})
.catch(e => {console.log(e)})
