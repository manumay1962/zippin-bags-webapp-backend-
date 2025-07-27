const mongoose=require("mongoose");
const debuger=require("debug")("development:mongoose")
const config=require("config")
mongoose
.connect(`${config.get("MONGODB_URI")}/zippin`)
.then(function(){
    debuger("connected");
    
})
.catch(function(err){
    debuger(err);
    
})

module.exports=mongoose.connection;