const mongoose = require('mongoose')


const eventSchema = mongoose.Schema({
    title: {type:String, required:true},
    author:{type:String, required:false},
    duration:{type:String, required:false},
    startsFrom:{type:String, required:false},
    time:{type:String, required:false},
    creator:{ type: mongoose.Schema.Types.ObjectId, ref:"User", required:true}
    
});

module.exports=mongoose.model('Event', eventSchema);