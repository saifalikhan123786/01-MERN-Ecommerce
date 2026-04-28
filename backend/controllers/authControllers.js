import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const SignupUser= async (req,res)=>{
    try{
        const{name,email,password}=req.body;

        // Check User is already exit
         const userExits= await User.findOne({email});

        if(userExits){
            return res.status(400).json({message:"User Already Exits"})
        }

        // Hash Password

        const hashPassword= await bcrypt.hash(password,10);

        // Create User
         await User.create({
            name,
            email,
            password:hashPassword
         });
          res.json({message:"User register successfully"});
    }
    catch(error){
      res.status(500).json({message:"Server Error"})
    }
};

// Login user
 export const loginUser=async(req,res)=>{
   try{
         const {email,password}=req.body;

        // Check User is already exit
         const user= await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"User Not Found"});
        }

        // Compare Password
        const match=await bcrypt.compare(password,user.password);

        if(!match){
             return  res.status(400).json({message:"Invalid Credentials"});
        }

        // Generate JWT Token
        const token = jwt.sign(
           { id:user._id},
           process.env.JWT_SECRET,
           {expiresIn: "7d" }
        );
        res.json({
            message:"Login Succssfully",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                 }
               });
        
   }
   catch(error){
    res.status(500).json({message:"Server error", error});
   }
 }