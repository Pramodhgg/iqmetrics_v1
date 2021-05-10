const jwt = require("jsonwebtoken");
const user = require("../models/user");
const User = require("../models/user")
const bcrypt = require("bcrypt");




exports.createUser = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash=>{
        const user = new User({
            email: req.body.email,
            password: hash,
            name:req.body.name,
            role:"user"
        });
        console.log(user)
        user.save()
        .then(result=>{
            res.status(201).json({
                message:'User created successfully',
                id:result._id,
                name:result.name,
                email:result.email,
                role:result.role
            });
        }).catch(error=>{
            res.status(500).json({
                message:"User Already exists ! Please login"
            });
        });
    });
 
}


exports.getAllUsers = async(req, res, next)=>{
    User.find()
    .then((documents)=>{
       res.status(200).json({
           message:'Events fetched successfully',
           users:documents
       });
    });
    // try{
    //     const users = await User.find()
    //     res.send(users);
    // }catch(e){
    //     console.log(e)
    //     res.status(404).json({
    //         message:"error occured : "+ e
    //     })
    // }
        
}
exports.userLogin =  (req, res, next)=>{
    let fetchedUser;
    User.findOne({email:req.body.email})
    .then(user=>{
        
        if(!user){
            return res.status(401).json({
                message:'User doesnot exist ! Please SignUp'
            });
        }
        fetchedUser = user;
        console.log(fetchedUser)
       return bcrypt.compare(req.body.password, user.password)
    })
    .then(result=>{
        if(!result){
            return res.status(401).json({
                message:'Invalid authentication credentials'
            });
        }
        const token = jwt.sign({
            email:fetchedUser.email,
            userId:fetchedUser._id,
            role:fetchedUser.role},
            'Iqmetrics_jwt_token_for_secure_user_experience_without_any_hackers_hacking_this_jwt_token_given_by_jwt',
            {expiresIn:"1h"}
   );
   res.status(200).json({
       token:token,
        expiresIn:3600,
        userId:fetchedUser._id,
        userRole:fetchedUser.role,
        message:"logged in successfully"
   });
    })
    .catch(err=>{
        return res.status(401).json({
            message:'Invalid authentication credentialsssssssss'
        });
    })
}

