import jwt from 'jsonwebtoken'

const Auth=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        let decodedata=jwt.verify(token,process.env.JWT_SECRET)
        req.userid=decodedata?.id
        next()
    } catch (error) {
        res.status(400).json("Invalid Credentials...")
        return
    }
}

export default Auth