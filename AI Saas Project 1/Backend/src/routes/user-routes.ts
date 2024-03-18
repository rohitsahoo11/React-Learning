import { Router } from "express";
import { getAllUser, userLogin, userSignup } from "../controllers/user-controllers.js";
import { validate, signupValidators, loginValidators } from "../utils/validators.js";

const userRoutes = Router()

userRoutes.get("/", getAllUser)
userRoutes.post("/signup", validate(signupValidators) ,userSignup)
userRoutes.post("/login", validate(loginValidators) ,userLogin)

export default userRoutes