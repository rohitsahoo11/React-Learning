import { NextFunction, Request, Response } from "express"
import User from "../models/User.js"
import { compare, hash } from 'bcrypt'
import { createToken } from "../utils/token-manager.js"
import { COOKIE_NAME } from "../utils/constants.js"

export const getAllUser = async (req:Request, res:Response, next:NextFunction) =>{
    // get user from database
    try {
        const users = await User.find()
        return res.status(200).json({message: "Ok", users})
    } catch (error) {
        console.log(error)
        return res.status(200).json({message: "Error", cause: error.message})
    }
    
}

export const userSignup = async (req:Request, res:Response, next:NextFunction) =>{
    // get user from database
    try {
        const {name, email, password} = req.body
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(401).send("User already exists")
        const hashedPassword = await hash(password, 10)
        const user = new User({name, email, password: hashedPassword})
        await user.save()
       
        //create token and store cookie
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            httpOnly: true,
            domain: "localhost",
            signed: true,
        })


        return res.status(201).json({message: "Ok", id: user._id.toString()})
    } catch (error) {
        console.log(error)
        return res.status(200).json({message: "Error", cause: error.message})
    }
    
}

export const userLogin = async (req:Request, res:Response, next:NextFunction) =>{
    // get user from database
    try {
        //user Login
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            res.status(401).send("User not Registered")
        }
        const isPasswordCorrect = await compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(403).send("Incorrect Password")
        }

        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            signed: true,
            httpOnly: true,
        })

        const token = createToken(user._id.toString(), user.email, "7d")
        const expires = new Date()
        expires.setDate(expires.getDate() + 7)
        res.cookie(COOKIE_NAME,token,{
            path:"/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed:true,
        })
        return res.status(200).json({message: "Ok", id: user._id.toString()})
    } catch (error) {
        console.log(error)
        return res.status(200).json({message: "Error", cause: error.message})
    }
    
}