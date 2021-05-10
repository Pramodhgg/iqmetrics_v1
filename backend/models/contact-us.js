const mongoose = require('mongoose')


const contactSchema = mongoose.Schema({
    name:{type:String, required:true},
    number:{type:String},
    email:{type:String, required:true},
    designation:{type:String,required:true},
    message:{type:String,required:true}
});

module.exports = mongoose.model('Contact', contactSchema);