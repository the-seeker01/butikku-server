const mongoose = require("mongoose");

const BlogsSchema = mongoose.Schema({

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

module.exports = mongoose.model("Blogs", BlogsSchema);