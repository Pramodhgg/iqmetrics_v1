
const Event = require("../models/event");
const User = require('../models/user');

exports.createEVent= (req, res, next)=>{
    const event = new Event({
        title:req.body.title,
        author:req.body.author,
        duration:req.body.duration,
        startsFrom:req.body.startsFrom,
        time:req.body.time,
        creator:req.user.userId
    });
    console.log(req.user.role)
    if(req.user.role ==="admin"){
        event.save().then(newEvent=>{
            console.log(event)
            res.status(201).json({
                  message:'Event added successfully',
                  eventId: event._id
              });
        }).catch(error=>{
          res.status(500).json({
            message:"Someting went wrong!!!"
          })
        });
    }else{
        res.status(500).json({
            message:"Not Authorised...."
        });
    }

  
}

exports.updateEvent =  (req, res, next)=>{
    const event = new Event({
      _id:req.body.id,
      title:req.body.title,
      author:req.body.author,
      duration:req.body.duration,
      startsFrom:req.body.startsFrom,
      time:req.body.time,
      creator:req.user.userId
  });
  const role= "admin"
    Event.updateOne({_id:req.params.id},event).then(result=>{
      console.log(result);
      if(result.nModified>0){
        res.status(200).json({
          message:'Updated Successfull'
        });
      }else{
        res.status(401).json({
          message:'Not authorised'});
      }
  
    })
  }

exports.getAllEVents = (req, res, next)=>{
    Event.find()
    .then((documents)=>{
       res.status(200).json({
           message:'Events fetched successfully',
           events:documents
       });
    });
   
   }

exports.getEVentByID = (req, res, next)=>{
    Event.findById(req.params.id).then(event=>{
      if(event){
        // console.log(event)
        res.status(200).json(event)
      }
      else{
        res.status(404).json({message:'Event not found!'})
      }
    })
  }

  exports.deleteEventByID = (req, res, next)=>{
    const role= "admin"
    Event.deleteOne({_id:req.params.id}).then(result=>{
        // console.log(result);
        if(result.n>0){
          res.status(200).json({
            message:'Deletion Successfull'
          });
        }else{
          res.status(401).json({
            message:'Not authorised'});
        }
    })
}


