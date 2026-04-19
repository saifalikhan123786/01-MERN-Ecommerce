import express from "express";
import { SignupUser } from "../controllers/authControllers.js";


const router=express.Router();

router.post('/signup',SignupUser);

export default router;