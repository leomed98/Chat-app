import jwt from 'jsonwebtoken';

const generateTokensAndSetCookies =  (userID, res) =>{
    const token = jwt.sign({userID}, `${process.env.JWT_SECRET}`,{
        expiresIn: '15d'
    } )

    res.cookie("jwt", token,{
        maxAge: 15 *24 *60 *60 * 1000, //millisecond format
        httpOnly: true, //prevents XXS (cross-site scripting) attack
        sameSite:"strict", // CSRF cross-site request forgery attacks 
        secure: process.env.Node_ENV !== "development" //dynamic since not in prod yet 
    })
};
export default generateTokensAndSetCookies;