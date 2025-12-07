import express from "express";
import { creatStudent, getStudents } from "../controllers/studentControllers.js";


const studentRouter = express.Router();

studentRouter.get("/",getStudents);
studentRouter.post("/",creatStudent);  


export default studentRouter;