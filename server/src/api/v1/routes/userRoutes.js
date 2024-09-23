import { Router } from "express";
import userController from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.route('/users')
    .get(userController.getUsers)
    .post(userController.createUser)


userRoutes.route('/users/:id')
    .get(userController.getUserById)

export default userRoutes;