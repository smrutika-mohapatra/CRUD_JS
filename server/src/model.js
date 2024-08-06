let mongoose=require("mongoose")

let formSchema=new mongoose.Schema({
    name:String,
    email:String,
    phoneNo:Number,
    password:String
})

let FormData=mongoose.model("RegisterUser",formSchema)

module.exports=FormData