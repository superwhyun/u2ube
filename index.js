import express from "express"
import morgan from "morgan"
import helmet from "helmet"  // hiding HTTP header for security reason
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

// const express = require("express")
const app = express()

const PORT = 4000


const handleListening = () => console.log(`Listening on ${PORT}`);
const handleHome = (req, res) => res.send('Hello from home')
const handleProfile = (req, res) => res.send('Hello from profile');
const betweenHome = (req, res, next) =>  {
    console.log("POST-processReqeust");
    next(); // yield to next function
}

// app.use(betweenHome) // 앞으로 이 함수는 무조건 실행됨. global declaration



app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true} ));
app.use(helmet());
app.use(morgan("combined")); 


// app.get("/", betweenHome, handleHome)
app.get("/", handleHome)
app.get("/profile", handleProfile)
app.listen(PORT, handleListening)