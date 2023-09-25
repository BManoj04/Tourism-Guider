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
        enum: ["Hotel","Entertainment","Emergency","Lodge"]
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
    }
})

const detail = mongoose.model("Detail", detailsSchema);

module.exports = detail;