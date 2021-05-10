const express = require("express");


const Event = require("../models/event");
const User = require('../models/user');
const Rating = require('../models/userRating')

exports.addRating =(req,res,next)=>{
    const rating = new Rating({
        eventId: req.body.eventId,
        creator:req.user.userId,
        rating:req.body.rating
    });
    console.log(rating)

    rating.save().then(result=>{
        console.log(result)
        res.status(200).json({
            message:"saved successfully",
            result:result
        }).catch(e=>{
            console.log(e);
            res.status(500).json({
                message:"failure man"
            })
        })
    })
}