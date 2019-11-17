import express from "express"
import morgan from "morgan"
import helmet from "helmet"  // hiding HTTP header for security reason
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import globalRouter from "./routers/globalRouter"
import routes from "./routes"


// const express = require("express")
const app = express()

const handleHome = (req, res) => res.send('Hello from home')
const handleProfile = (req, res) => res.send('Hello from profile');
const betweenHome = (req, res, next) =>  {
    console.log(" 🤪 POST-processReqeust");
    next(); // yield to next function
}


app.set("view engine", "pug")
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true} ));
app.use(helmet());
app.use(morgan("combined")); 


app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)

export default app;