import jwt from "jsonwebtoken"

export const createToken = (id: string, email: string, expiresIn) =>{
    const payload = {id, email}
    const token = jwt.sign(payload,process.env.JWT_SECRET,{   //sign the token from the user data
        expiresIn,    // the  time until the token will be valid 
    })
    return token
}