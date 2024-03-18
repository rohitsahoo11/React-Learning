import { Router } from "express";
import userRoutes from "./user-routes.js";
import charRoutes from "./chat-routes.js";

const appRouter = Router()
appRouter.use("/user", userRoutes) //domain/api/v1/users
appRouter.use("/chats", charRoutes) //domain/api/v1/chat

export default appRouter