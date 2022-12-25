const mongoose = require("mongoose");

const BoutiqueSchema = mongoose.Schema({

    name: {
        type : String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    category : {
        type: String,
        required : true
    }
},{timestamps : true});

module.exports = mongoose.model("Boutique", BoutiqueSchema);