const { default: mongoose } = require("mongoose");


let userSchema = new mongoose.Schema({
    email : {
         type:String,
         required:true,
         unique:true
    },
    password : {
        type:String,
        required:true
   }
},{timestamps:true})

let User = mongoose.models.User || mongoose.model("User",userSchema)
module.exports ={User}