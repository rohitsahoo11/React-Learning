import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";


export const validate = (validations: ValidationChain[]) => {
    return async (req:Request, res:Response, next: NextFunction) => {
        for(let validation of validations){
            const result = await  validation.run(req); // runs the validation req from client
            if(!result.isEmpty()){
                break
            }
        }
        const errors = validationResult(req);// gets all the errors in one place
        if (errors.isEmpty()){
            return next()
        }
        return res.status(422).json({errors: errors.array()})
    }
}

export const loginValidators = [
    body("email")
    .trim()
    .isEmail()
    .withMessage("Email is Required"),
    
    body("password")
    .trim()
    .isLength({min: 6})
    .withMessage("Password must be at least 6 characters"),
]


export const signupValidators = [
    body("name")
    .notEmpty()
    .withMessage("Name is Required"),
    ...loginValidators,
]

