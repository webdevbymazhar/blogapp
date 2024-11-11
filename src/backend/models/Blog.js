const { default: mongoose } = require("mongoose");


let blogSchema = new mongoose.Schema({
    title : {
        type:String,
        required : true,
        unique:true
    },
    image : {
        type:String,
        required : true
    },
    description : {
        type:String,
        required : true
    },
    category : {
        type:String,
        required : true
    }
},{timestamps:true})

const Blog = mongoose.models.blogapp || mongoose.model("blogapp",blogSchema)
module.exports = {Blog}