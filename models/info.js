const mongoose = require("mongoose");
const { Schema } = mongoose;

const detailsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    shortDescription:{
        type: String,
        required: true
    },
    longDescription:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        enum: ["Restaurants","Entertainment","Emergency","Lodge"]
    },
    contactInformation:{
        type: String,
        required: true
    },
    latitude:{
        type: String,
        required: true
    },
    longitude:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    qrcode:{
        type: String,
    }
})

const detail = mongoose.model("Detail", detailsSchema);

module.exports = detail;