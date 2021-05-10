const mongoose = require('mongoose')


const userRatingSchema = mongoose.Schema({
    eventId: {type:mongoose.Schema.Types.ObjectId,ref:"Event",required:true,unique:true},
    creator:{ type: mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    rating:{type:Number}
});

module.exports=mongoose.model('UserRating', userRatingSchema);