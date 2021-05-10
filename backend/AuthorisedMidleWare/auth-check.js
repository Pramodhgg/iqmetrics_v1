const jwt = require("jsonwebtoken");



module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
       const tokenFetched = jwt.verify(token,"Iqmetrics_jwt_token_for_secure_user_experience_without_any_hackers_hacking_this_jwt_token_given_by_jwt");
       req.user = {email:tokenFetched.email, userId:tokenFetched.userId, role:tokenFetched.role}; 
       console.log(req.user.role);
       next();
    } catch (error){
        res.sendStatus(401).json({message:'Authentication failed'});
    }
   
};