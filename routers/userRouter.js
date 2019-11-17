import express from "express";
import routes from "../routes"

const userRouter = express.Router();

export default userRouter

userRouter.get(routes.home, (req, res) => res.send('user home'));
userRouter.get("/login", (req, res) => res.send('user login'));
userRouter.get("/logout", (req, res) => res.send('user logout'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));

