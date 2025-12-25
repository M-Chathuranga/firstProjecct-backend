import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import cors from "cors";
import orderRouter from "./routers/orderRouter.js";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

const mongoUrl = process.env.MONGODB_URI;

app.use(bodyParser.json())
app.use(cors());

mongoose.connect(mongoUrl).then(
    ()=>{
        console.log("Connected to database")
    }
).catch(
    ()=>{
        console.log("Failed to connect to the database")
    }
)

app.use(express.json());

app.use(
    (req,res,next)=>{
        const value = req.header("Authorization")
        if(value != null){
            const token = value.replace("Bearer ","")
            jwt.verify(
                token,
                process.env.JWT_SECRET,
                (err,decoded)=>{
                    if(decoded == null){
                        res.status(403).json({
                            message : "Unauthorized"
                        })
                    }else{
                        req.user = decoded
                        next()
                    }                    
                }
            )
        }else{
            next()
        }        
    }
)

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders",orderRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
