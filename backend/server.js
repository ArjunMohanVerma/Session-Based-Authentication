import express from "express";
import authRouter from './routes/authRouter.js'
import session from "express-session";
import dotenv from 'dotenv'
import dbc from "./utility/db.js"
import cors from "cors"

const app = express();
app.use(express.json());
dotenv.config();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // your Vite frontend URL
  credentials: true, // if you need cookies
}));
app.use(
  session({
    name: "UserCookie",
    secret: process.env.SESSION_SECRET, // move to .env in production
    resave: false,
    saveUninitialized: false,
    credentials:true,
    cookie: {
      httpOnly: true,
      secure: false // true only if HTTPS
    }
  })
);

dbc;



app.use('/auth', authRouter)


app.listen(5000, ()=>{ console.log("Server is running at port 5000")})
