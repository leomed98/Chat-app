import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async(req, res, next) => {
    try {
      const token = req.cookies.jwt;
      if  (!token) {
          return res.status(401).json({error: "You need to be logged in to access this route"});
      }  

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded){
        return res.status(401).json({error: "invalid token - unauthorized access"});
      }

      const user = await User.findById(decoded.userID).select("-password");
      if (!user){
        return res.status(404).json({error: "User not found...please sign up"})
      }

      req.user = user 

      next();

    } catch (error) {
        console.log("Error in the protect route middleware", error.message);
       res.status(500).json({error: "Internal Server Error"}); 
    }
}

export default protectRoute;